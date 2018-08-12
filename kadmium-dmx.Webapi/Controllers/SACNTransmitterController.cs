using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Linq;
using kadmium_dmx_core.Transmitters;

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
        public bool Enabled()
        {
            return MasterController.Transmitters.SingleOrDefault(x => x is SACNTransmitter)?.Enabled ?? false;
        }

        [HttpPost("[action]/{value}")]
        public void SetEnabled(bool value)
        {
            MasterController.Transmitters.Single(x => x is SACNTransmitter).Enabled = value;
        }

        [HttpGet("[action]")]
        public Status Status()
        {
            return MasterController.Transmitters.SingleOrDefault(x => x is SACNTransmitter)?.Status ?? new Status();
        }
        
    }
}
