using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_webui.WebSockets;
using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;
using System.IO;
using Microsoft.DotNet.PlatformAbstractions;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            DatabaseContext.SetConnectionEnvironment(env.EnvironmentName);
            using (var context = DatabaseContext.GetContext())
            {
                context.Database.Migrate();
            }
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services
                .Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Fastest)
                .AddResponseCompression(options =>
                {
                    options.Providers.Add<GzipCompressionProvider>();
                });
            
            services.AddMvc(options =>
            {
                options.Conventions.Add(new KebabCaseRoutingConvention());
            });
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                {
                    Title = "kadmium-osc-dmx API",
                    Version = "v1"
                });
                
                var filePath = Path.Combine(ApplicationEnvironment.ApplicationBasePath, "kadmium-osc-dmx-dotnet-webui.xml");
                c.IncludeXmlComments(filePath);
            });

            services.AddDbContext<DatabaseContext>(builder =>
                DatabaseContext.SetConnection(builder as DbContextOptionsBuilder<DatabaseContext>)
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            
            app.UseCors(builder =>
            {
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
                builder.AllowAnyOrigin();
            });

            app.UseResponseCompression();
            app.UseStaticFiles();
            
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "kadmium-osc-dmx API v1");
            });

            app.UseWebSockets();
            app.Map("/socket/Status", WebSocketHandler.Map<StatusStreamSocketHandler>);
            app.Map("/socket/OSC", WebSocketHandler.Map<OSCStreamSocketHandler>);
            app.MapWhen(x => x.Request.Path.Value.StartsWith("/socket/Universe"), WebSocketHandler.Map<UniverseStreamSocketHandler>);
            app.MapWhen(x => x.Request.Path.Value.StartsWith("/socket/Fixture"), WebSocketHandler.Map<FixtureStreamSocketHandler>);
            
            app.UseMvc(routes =>
            { 
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                //routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
                
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

        }


    }
}
