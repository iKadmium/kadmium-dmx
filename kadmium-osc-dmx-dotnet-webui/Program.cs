using System.IO;
using Microsoft.AspNetCore.Hosting;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore;

namespace kadmium_osc_dmx_dotnet_webui
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var context = new DatabaseContext())
            {
                context.Database.Migrate();
            }

            MasterController.Initialise().Wait();

            JObject settings = kadmium_osc_dmx_dotnet_core.FileAccess.LoadSettings().Result;
            int port = settings["webPort"].Value<int>();
            
            var host = new WebHostBuilder()
                .UseUrls("http://*:" + port + "/")
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
