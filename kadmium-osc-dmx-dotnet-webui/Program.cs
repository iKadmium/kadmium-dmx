using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using kadmium_osc_dmx_dotnet_core;

namespace kadmium_osc_dmx_dotnet_webui
{
    public class Program
    {
        public static void Main(string[] args)
        {
            MasterController.Initialise();
            MasterController.Instance.LoadVenue(@"Rehearsal Room.json");
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
