using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.Annotations;

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
        [SwaggerOperation("getOSCListenerEnabled")]
        public bool Enabled()
        {
            return MasterController.Listener.Enabled;
        }

        [HttpGet("[action]/{value}")]
        [SwaggerOperation("setOSCListenerEnabled")]
        public void Enabled(bool value)
        {
            MasterController.Listener.Enabled = value;
        }
    }
}
