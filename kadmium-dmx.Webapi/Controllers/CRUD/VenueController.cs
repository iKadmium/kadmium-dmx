using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_dmx_core;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_data.Types;
using NSwag.Annotations;
using kadmium_dmx_data.Types.Fixtures;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : CrudController<IVenueStore, string, VenueData>
    {
        private IMasterController MasterController { get; }
        private IFixtureDefinitionStore FixtureDefinitionStore { get; }
        private IGroupStore GroupStore { get; }

        public VenueController(IVenueStore store,
            IFixtureDefinitionStore fixtureDefinitionStore,
            IMasterController controller,
            IGroupStore groupStore) : base(store, (x => x.Name))
        {
            MasterController = controller;
            FixtureDefinitionStore = fixtureDefinitionStore;
            GroupStore = groupStore;
        }

        [HttpGet("[action]")]
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

        [HttpPost("[action]/{name}")]
        public async Task Activate(string name)
        {
            var venue = await Store.Get(name);
            var groupsTask = GroupStore.GetAll();
            var definitionsNeeded = from universe in venue.Universes
                                    from fixture in universe.Fixtures
                                    select fixture.Type;
            var definitionTasks = from skeleton in definitionsNeeded.Distinct()
                                  select FixtureDefinitionStore.Get(skeleton);
            var definitions = await Task.WhenAll(definitionTasks);
            var definitionsDictionary = definitions.ToDictionary(definition => definition.Skeleton, definition => definition as IFixtureDefinition);
            await MasterController.LoadVenue(venue, definitionsDictionary, await groupsTask);
        }

        [HttpGet("[action]/{name}")]
        public async Task<IVenueData> Download(string name)
        {
            var venue = await Store.Get(name);
            return venue;
        }

        [HttpGet]
        public override Task<IEnumerable<string>> Get()
        {
            return base.Get();
        }

        [HttpGet("{name}")]
        public override Task<VenueData> Get(string name)
        {
            return base.Get(name);
        }

        [HttpPut("{originalName}")]
        public override Task Put(string originalName, [FromBody] VenueData value)
        {
            return base.Put(originalName, value);
        }

        [HttpPost]
        public override Task Post([FromBody] VenueData value)
        {
            return base.Post(value);
        }

        [HttpDelete("{name}")]
        public override Task Delete(string name)
        {
            return base.Delete(name);
        }
    }

    public class ActiveVenue
    {
        public string Name { get; set; }
        public IEnumerable<ActiveUniverse> Universes { get; set; }
    }
}
