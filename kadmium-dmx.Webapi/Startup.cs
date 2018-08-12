using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using kadmium_dmx_webapi.WebSockets;
using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;
using System.IO;
using Microsoft.DotNet.PlatformAbstractions;
using System.Collections.Generic;
using kadmium_dmx_data;
using System.Linq;
using MongoDB.Driver;
using MongoDB.Bson;
using kadmium_dmx_data.Mongo;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Settings;
using kadmium_dmx_core;
using NSwag.AspNetCore;
using NSwag.SwaggerGeneration.Processors;
using kadmium_dmx_webapi.Controllers;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json;

namespace kadmium_dmx_webapi
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
        }

        public IConfigurationRoot Configuration { get; }
        private MasterController MasterController { get; set; }

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

            services.AddMvcCore().AddApiExplorer();

            services.AddMvc(options =>
            {
                options.Conventions.Add(new KebabCaseRoutingConvention());
            })
            .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Latest)
            .AddJsonOptions(options => {
                options.SerializerSettings.Converters.Add(new StringEnumConverter());
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

            services.AddSwagger();

            MongoClient client = new MongoClient("mongodb://docker:32768");
            var database = client.GetDatabase("kadmium-dmx");
            services.AddSingleton(x => database);

            ISettingsStore settingsStore = new FileSettingsStore();
            ISettings settings = settingsStore.GetSettings().Result;

            MasterController = new MasterController(settings);

            services.AddTransient<IFixtureDefinitionStore, MongoFixtureDefinitionStore>();
            services.AddTransient<IVenueStore, MongoVenueStore>();
            services.AddTransient<IGroupStore, MongoGroupStore>();
            services.AddTransient<ISettingsStore, FileSettingsStore>();

            services.AddSingleton<IMasterController>(MasterController);
            services.AddSingleton<IRenderer>(MasterController.Renderer);
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

            app.UseSwaggerUi3WithApiExplorer(config => {
                config.GeneratorSettings.OperationProcessors.Add(new SwaggerOperationProcessor());
            });

            app.UseWebSockets();

            app.Map("/socket/Status", StatusStreamSocketHandler.Map);
            app.Map("/socket/OSC", OSCStreamSocketHandler.Map);
            app.MapWhen(x => x.Request.Path.Value.StartsWith("/socket/Universe"), UniverseStreamSocketHandler.Map);
            app.MapWhen(x => x.Request.Path.Value.StartsWith("/socket/Fixture"), FixtureStreamSocketHandler.Map);

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
