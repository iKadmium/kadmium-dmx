using GraphQL;
using GraphQL.Http;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using GraphQL.Types;
using kadmium_dmx.DataAccess.Json;
using kadmium_dmx_core;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Settings;
using kadmium_dmx_webapi.GraphQL;
using kadmium_dmx_webapi.GraphQL.Queries;
using kadmium_dmx_webapi.GraphQL.Schemas;
using kadmium_dmx_webapi.GraphQL.Types;
using kadmium_dmx_webapi.WebSockets;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Converters;
using Swashbuckle.AspNetCore.Swagger;
using System.IO;
using System.IO.Compression;

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

            services
                .AddMvcCore()
                .AddApiExplorer();

            services.AddLogging(loggingBuilder =>
            {
                loggingBuilder.AddConfiguration(Configuration.GetSection("Logging"));
                loggingBuilder.AddConsole();
                loggingBuilder.AddDebug();
            });

            services.AddMvc(options => options.Conventions.Add(new KebabCaseRoutingConvention()))
                .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Latest)
                .AddJsonOptions(options => options.SerializerSettings.Converters.Add(new StringEnumConverter()));

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p => p
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
                c.EnableAnnotations();
                c.SchemaFilter<EnumFilter>();
            });

            services.AddSingleton<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddSingleton<IDocumentExecuter, DocumentExecuter>();
            services.AddSingleton<IDocumentWriter, DocumentWriter>();
            services.AddSingleton<KadmiumDMXQuery>();
            services.AddSingleton<KadmiumDMXMutation>();
            services.AddSingleton<KadmiumDMXSubscription>();
            services.AddSingleton<GroupType>();
            services.AddSingleton<StatusType>();
            services.AddSingleton<VenueStatusType>();
            services.AddSingleton<StatusCodeType>();
            services.AddSingleton<SACNTransmitterSettingsType>();
            services.AddSingleton<SettingsType>();
            services.AddSingleton<DMXChannelType>();
            services.AddSingleton<ColorWheelEntryType>();
            services.AddSingleton<MovementAxisType>();
            services.AddSingleton<FixtureTypeEnum>();
            services.AddSingleton<FixtureDefinitionType>();
            services.AddSingleton<FixtureInstanceType>();
            services.AddSingleton<UniverseType>();
            services.AddSingleton<VenueType>();
            services.AddSingleton<KadmiumDMXSchema>();
            services.AddSingleton<ISchema, KadmiumDMXSchema>();

            services.AddGraphQL(options =>
            {
                options.EnableMetrics = true;
                options.ExposeExceptions = true;
            })
            .AddWebSockets()
            .AddDataLoader();

            IFileAccess fileAccess = new kadmium_dmx.DataAccess.Json.FileAccess(Path.Combine("kadmium-dmx", "data"));
            services.AddSingleton(fileAccess);
            ISettingsStore settingsStore = new JsonSettingsStore(fileAccess);
            ISettings settings = settingsStore.GetSettings().Result;

            MasterController = new MasterController(settings);

            services.AddTransient<IFixtureDefinitionStore, JsonFixtureDefinitionStore>();
            services.AddTransient<IVenueStore, JsonVenueStore>();
            services.AddTransient<IGroupStore, JsonGroupStore>();
            services.AddTransient<ISettingsStore, JsonSettingsStore>();

            services.AddSingleton<IMasterController>(MasterController);
            services.AddSingleton<IRenderer>(MasterController.Renderer);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseCors(builder =>
            {
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
                builder.AllowAnyOrigin();
            });

            app.UseResponseCompression();

            app.UseWebSockets();
            app.UseGraphQLWebSockets<KadmiumDMXSchema>(new GraphQLSettings().Path);
            app.UseGraphQL<KadmiumDMXSchema>(new GraphQLSettings().Path);

            app.UseMiddleware<GraphQLMiddleware>(new GraphQLSettings
            {
                BuildUserContext = ctx => new GraphQLUserContext
                {
                    User = ctx.User
                }
            });
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions()
            {
                Path = "/graphql",
                GraphQLEndPoint = "/api/graphql"
            });

            app.MapWhen(x => x.Request.Path.Value.StartsWith("/socket/Universe"), builder => builder.Use(UniverseStreamSocketHandler.Acceptor));
            app.MapWhen(x => x.Request.Path.Value.StartsWith("/socket/Fixture"), builder => builder.Use(FixtureStreamSocketHandler.Acceptor));

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new
                    {
                        controller = "Home",
                        action = "Index"
                    });
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
        }
    }
}
