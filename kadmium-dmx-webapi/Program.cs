using System.IO;
using Microsoft.AspNetCore.Hosting;
using kadmium_dmx_core;

namespace kadmium_dmx_webapi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            kadmium_dmx_core.FileAccess.CreateDataDirectory();

            Settings settings = kadmium_dmx_core.FileAccess.LoadSettings().Result;

            int port = settings.WebPort;

            var host = new WebHostBuilder()
                .UseUrls("http://*:" + port + "/")
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            MasterController.Initialise(settings);

            host.Run();
        }
    }
}
