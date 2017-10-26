using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Swashbuckle.AspNetCore.SwaggerGen;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SettingsController : Controller
    {
        // GET: api/values
        [HttpGet]
        [SwaggerOperation("getSettings")]
        public async Task<Settings> Get()
        {
            return await FileAccess.LoadSettings();
        }

        // POST api/values
        [HttpPost]
        [SwaggerOperation("postSettings")]
        public async Task Post([FromBody]Settings value)
        {
            MasterController.Instance.Settings = value;
            FileAccess.SaveSettings(value);
            MasterController.Instance.RenderEnabled = false;
            while(MasterController.Instance.Rendering)
            {
                await Task.Delay(10);
            }
            foreach (var transmitter in MasterController.Instance.Transmitters)
            {
                transmitter.Dispose();
            }
            MasterController.Instance.Transmitters.Clear();

            MasterController.Instance.Transmitters.Add(SACNTransmitter.Load(value.SacnTransmitter));
            MasterController.Instance.Transmitters.Add(EnttecProTransmitter.Load(value.EnttecProTransmitter));
            MasterController.Instance.RenderEnabled = true;
        }
    }
}
