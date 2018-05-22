using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Collections.Generic;
using kadmium_dmx_core.Fixtures;
using Swashbuckle.AspNetCore.SwaggerGen;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class PreviewController : Controller
    {
        // GET: /<controller>/
        [HttpGet]
        [SwaggerOperation("getPreview")]
        public PreviewResult Get()
        {
            PreviewResult result = new PreviewResult
            {
                Groups = from grp in MasterController.Instance.Groups.Values
                         orderby grp.Order
                         select grp.Name,
                Universes = from universe in MasterController.Instance.Venue.Universes
                            select new PreviewUniverse
                            {
                                Name = universe.Name,
                                UniverseID = universe.UniverseNumber,
                                Fixtures = from fixture in universe.Fixtures
                                           select new PreviewFixture
                                           {
                                               Address = fixture.StartChannel,
                                               Group = fixture.Group.Name,
                                               Definition = fixture.FixtureDefinition
                                           }
                            }
            };
            return result;
        }
    }

    public class PreviewResult
    {
        public IEnumerable<string> Groups { get; set; }
        public IEnumerable<PreviewUniverse> Universes { get; set; }
    }

    public class PreviewUniverse
    {
        public string Name { get; set; }
        public int UniverseID { get; set; }
        public IEnumerable<PreviewFixture> Fixtures { get; set; }
    }

    public class PreviewFixture
    {
        public int Address { get; set; }
        public string Group { get; set; }
        public FixtureDefinition Definition { get; set; }
    }
}
