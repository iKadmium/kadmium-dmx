using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SolversLiveController : Controller
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