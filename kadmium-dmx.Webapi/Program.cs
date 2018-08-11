using System.IO;
using Microsoft.AspNetCore.Hosting;
using kadmium_dmx_core;
using kadmium_dmx_data;
using System.Threading.Tasks;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Settings;

namespace kadmium_dmx_webapi
{
    public class Program
    {
        public async static Task Main()
        {
            int port = 5000;

            var host = new WebHostBuilder()
                .UseUrls("http://*:" + port + "/")
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            await host.RunAsync();
        }
    }
}
