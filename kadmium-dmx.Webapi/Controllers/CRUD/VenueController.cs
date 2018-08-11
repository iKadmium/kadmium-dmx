using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_dmx_core;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.Annotations;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_data.Types;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : CrudController<IVenueStore, string, IVenueData>
    {
        private IMasterController MasterController { get; }
        private IFixtureDefinitionStore FixtureDefinitionStore { get; }

        public VenueController(IVenueStore store, IFixtureDefinitionStore fixtureDefinitionStore, IMasterController controller) : base(store, (x => x.Name))
        {
            MasterController = controller;
            FixtureDefinitionStore = fixtureDefinitionStore;
        }

        [HttpGet("[action]")]
        [SwaggerOperation("getActiveVenue")]
        public ActiveVenue GetActive()
        {
            ActiveVenue response = new ActiveVenue
            {
                Name = MasterController.Venue?.Name,
                Universes = from universe in MasterController.Venue?.Universes ?? Enumerable.Empty<Universe>()
                            select UniverseController.GetActiveUniverse(universe)
            };
            return response;
        }

        [HttpGet("[action]/{id}")]
        [SwaggerOperation("activateVenueByName")]
        public async Task Activate(string name)
        {
            var venue = await Store.Get(name);
            var definitionsNeeded = from universe in venue.Universes
                                    from fixture in universe.Fixtures
                                    select fixture.Type;
            var definitionTasks = from skeleton in definitionsNeeded.Distinct()
                                  select FixtureDefinitionStore.Get(skeleton);
            var definitions = (await Task.WhenAll(definitionTasks)).ToDictionary(x => x.Skeleton);
            MasterController.LoadVenue(venue, definitions);
        }

        [HttpGet("[action]/{id}")]
        [SwaggerOperation("downloadVenue")]
        public async Task<IVenueData> Download(string name)
        {
            var venue = await Store.Get(name);
            return venue;
        }
    }

    public class ActiveVenue
    {
        public string Name { get; set; }
        public IEnumerable<ActiveUniverse> Universes { get; set; }
    }
}
