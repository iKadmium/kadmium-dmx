using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using kadmium_osc_dmx_dotnet_core;
using Microsoft.Extensions.Configuration;

namespace kadmium_osc_dmx_dotnet_webui
{
    public class Program
    {
        public static void Main(string[] args)
        {
            MasterController.Initialise();
            
            var host = new WebHostBuilder()
                .UseUrls("http://*:5000/")
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
