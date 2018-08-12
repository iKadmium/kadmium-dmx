using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class OSCListenerController : Controller
    {
        private IMasterController MasterController { get; }

        public OSCListenerController(IMasterController masterController)
        {
            MasterController = masterController;
        }

        [HttpGet("[action]")]
        public bool Enabled()
        {
            return MasterController.Listener.Enabled;
        }

        [HttpPost("[action]/{value}")]
        public void SetEnabled(bool value)
        {
            MasterController.Listener.Enabled = value;
        }
    }
}
