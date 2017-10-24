using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Swashbuckle.AspNetCore.SwaggerGen;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SACNTransmitterController : Controller
    {
        [HttpGet("[action]")]
        [SwaggerOperation("getTransmitterEnabled")]
        public bool Enabled()
        {
            return MasterController.Instance.Transmitters.Single(x => x is SACNTransmitter).Enabled;
        }

        [HttpGet("[action]/{value}")]
        [SwaggerOperation("setTransmitterEnabled")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Transmitters.Single(x => x is SACNTransmitter).Enabled = value;
        }

        
    }
}
