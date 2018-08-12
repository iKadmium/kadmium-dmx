using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Collections.Generic;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Storage;
using System.Threading.Tasks;
using kadmium_dmx_data.Types;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class PreviewController : Controller
    {
        private IFixtureDefinitionStore Store { get; set; }
        private IMasterController MasterController { get; set; }

        public PreviewController(IFixtureDefinitionStore store, IMasterController masterController)
        {
            Store = store;
            MasterController = masterController;
        }

        // GET: /<controller>/
        [HttpGet]
        public async Task<PreviewResult> Get()
        {
            var fixtureDefinitionTasks = from grp in MasterController.Groups.Values
                                         from fixture in grp.Fixtures
                                         select Store.Get(fixture.FixtureDefinitionSkeleton);
            var fixtureDefinitions = (await Task.WhenAll(fixtureDefinitionTasks)).ToDictionary(x => x.Skeleton);

            PreviewResult result = new PreviewResult
            {
                Groups = from grp in MasterController.Groups.Values
                         orderby grp.Order
                         select grp.Name,
                Universes = from universe in MasterController.Venue.Universes
                            select new PreviewUniverse
                            {
                                Name = universe.Name,
                                UniverseID = universe.UniverseID,
                                Fixtures = from fixture in universe.Fixtures
                                           select new PreviewFixture
                                           {
                                               Address = fixture.Address,
                                               Group = fixture.Group,
                                               Definition = fixtureDefinitions[fixture.FixtureDefinitionSkeleton]
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
        public IFixtureDefinition Definition { get; set; }
    }
}
