using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SolversController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public bool Enabled()
        {
            return MasterController.Instance.UpdatesEnabled;
        }

        [HttpGet]
        [Route("[action]/{value}")]
        public void Enabled(bool value)
        {
            MasterController.Instance.UpdatesEnabled = value;
        }
    }
}
