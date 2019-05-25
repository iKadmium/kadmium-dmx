using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Linq;
using kadmium_dmx_core.Transmitters;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class SACNTransmitterController : Controller
    {
        IMasterController MasterController { get; }

        public SACNTransmitterController(IMasterController masterController)
        {
            MasterController = masterController;
        }

        [HttpGet("[action]")]
        [SwaggerOperation(OperationId = "GetSACNTransmitterEnabled")]
        public bool Enabled()
        {
            return MasterController.Transmitters.SingleOrDefault(x => x is SACNTransmitter)?.Enabled ?? false;
        }

        [HttpPost("[action]/{value}")]
        [SwaggerOperation(OperationId = "SetSACNTransmitterEnabled")]
        public void SetEnabled(bool value)
        {
            MasterController.Transmitters.Single(x => x is SACNTransmitter).Enabled = value;
        }

        
    }
}
