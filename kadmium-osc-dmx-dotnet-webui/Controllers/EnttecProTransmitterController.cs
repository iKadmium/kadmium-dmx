using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using kadmium_osc_dmx_dotnet_core;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class EnttecProTransmitterController : Controller
    {
        [HttpGet("[action]")]
        [SwaggerOperation("getEnttecPortNames")]
        public string[] Ports()
        {
            return EnttecProTransmitter.GetPortNames();
        }

        [HttpGet("[action]")]
        [SwaggerOperation("getEnttecEnabled")]
        public bool Enabled()
        {
            return MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter).Enabled;
        }

        [HttpGet("[action]/{value}")]
        [SwaggerOperation("setEnttecEnabled")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter).Enabled = value;
        }
    }
}
