using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Transmitters;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SettingsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public async Task<Settings> Get()
        {
            return await FileAccess.LoadSettings();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Settings value)
        {
            MasterController.Instance.Settings = value;
            FileAccess.SaveSettings(value);
            Transmitter[] oldTransmitters = new Transmitter[MasterController.Instance.Transmitters.Count];
            MasterController.Instance.Transmitters.CopyTo(oldTransmitters);
            MasterController.Instance.Transmitters.Clear();
            foreach (var transmitter in oldTransmitters)
            {
                transmitter.Dispose();
            }
            MasterController.Instance.Transmitters.Add(SACNTransmitter.Load(value.SacnTransmitter));
            MasterController.Instance.Transmitters.Add(EnttecProTransmitter.Load(value.EnttecProTransmitter));
        }
    }
}
