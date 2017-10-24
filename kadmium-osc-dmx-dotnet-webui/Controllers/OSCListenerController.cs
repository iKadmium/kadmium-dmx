using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using Swashbuckle.AspNetCore.SwaggerGen;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class OSCListenerController : Controller
    {
        [HttpGet("[action]")]
        [SwaggerOperation("getOSCListenerEnabled")]
        public bool Enabled()
        {
            return MasterController.Instance.Listener.Enabled;
        }

        [HttpGet("[action]/{value}")]
        [SwaggerOperation("setOSCListenerEnabled")]
        public void Enabled(bool value)
        {
            MasterController.Instance.Listener.Enabled = value;
        }
    }
}
