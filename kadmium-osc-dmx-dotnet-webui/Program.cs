using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using kadmium_osc_dmx_dotnet_core;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace kadmium_osc_dmx_dotnet_webui
{
    public class Program
    {
        public static void Main(string[] args)
        {
            MasterController.Initialise();

            var settings = kadmium_osc_dmx_dotnet_core.FileAccess.LoadSettings();
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
