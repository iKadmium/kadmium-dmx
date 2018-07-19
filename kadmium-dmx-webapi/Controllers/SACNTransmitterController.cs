using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Linq;
using kadmium_dmx_core.Transmitters;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class SACNTransmitterController : Controller
    {
        [HttpGet("[action]")]
        [SwaggerOperation("getTransmitterEnabled")]
        public bool Enabled()
        {
            return MasterController.Instance.Transmitters.SingleOrDefault(x => x is SACNTransmitter)?.Enabled ?? false;
        }

        [HttpGet("[action]/{value}")]
        [SwaggerOperation("setTransmitterEnabled")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Transmitters.Single(x => x is SACNTransmitter).Enabled = value;
        }

        [HttpGet("[action]")]
        [SwaggerOperation("getTransmitterStatus")]
        public Status Status()
        {
            return MasterController.Instance.Transmitters.SingleOrDefault(x => x is SACNTransmitter)?.Status ?? new Status();
        }
        
    }
}
