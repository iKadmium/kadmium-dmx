using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using kadmium_osc_dmx_dotnet_core;

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class EnttecProTransmitterController : Controller
    {
        [HttpGet("[action]")]
        public string[] GetPorts()
        {
            return EnttecProTransmitter.GetPortNames();
        }

        [HttpGet]
        [Route("[action]")]
        public bool Enabled()
        {
            return MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter).Enabled;
        }

        [HttpGet]
        [Route("[action]/{value}")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter).Enabled = value;
        }
    }
}
