using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_webui.WebSockets;
using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;

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

            services.AddMvc();

            services.AddDbContext<DatabaseContext>(builder =>
                DatabaseContext.SetConnection(builder as DbContextOptionsBuilder<DatabaseContext>)
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                //app.UseExceptionHandler("/Home/Error");
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
            {
                builder
                    .AllowAnyHeader()
                    .AllowAnyOrigin();
            });

            app.UseWebSockets();
            app.UseStaticFiles();
            app.UseResponseCompression();

            app.Map("/socket/Dashboard", WebSocketHandler.Map<DashboardSocketHandler>);
            app.Map("/socket/SACN", WebSocketHandler.Map<SACNTransmitterLive>);
            app.Map("/socket/OSC", WebSocketHandler.Map<OSCListenerLive>);
            app.Map("/socket/Solvers", WebSocketHandler.Map<SolversLiveSocketHandler>);

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }


    }
}
