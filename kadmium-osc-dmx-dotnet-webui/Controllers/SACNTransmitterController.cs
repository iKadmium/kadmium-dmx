using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SACNTransmitterController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public bool Enabled()
        {
            return MasterController.Instance.Transmitter.Enabled;
        }

        [HttpGet]
        [Route("[action]/{value}")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Transmitter.Enabled = value;
        }

        [HttpGet]
        [Route("[action]/{universeID}/{channel}/{value}")]
        public void Set(int universeID, int channel, byte value)
        {
            MasterController.Instance.Venue.Universes
                .Single(x => x.UniverseNumber == universeID)
                .DMX[channel] = value;
        }
    }
}
