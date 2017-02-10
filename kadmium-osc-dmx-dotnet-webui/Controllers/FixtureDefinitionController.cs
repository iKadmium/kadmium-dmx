using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : Controller
    {
        [HttpGet]
        public IEnumerable<FixtureDefinitionSkeleton> Get()
        {
            return FileAccess.GetAllFixtures().Select(x => new FixtureDefinitionSkeleton { Manufacturer = x.Item1, Model = x.Item2 });
        }
    }
    public class FixtureDefinitionSkeleton
    {
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
