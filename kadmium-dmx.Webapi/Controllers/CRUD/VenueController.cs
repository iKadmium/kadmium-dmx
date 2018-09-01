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
using kadmium_dmx_data.Types.Fixtures;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : CrudController<IVenueStore, string, IVenueData, VenueData>
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
        [SwaggerOperation(OperationId = "GetActiveVenue")]
        public async Task<IVenueData> GetActive()
        {
            var venueName = MasterController.Venue.Name;
            return await Get(venueName);
        }

        [HttpPost("[action]/{name}")]
        [SwaggerOperation(OperationId = "ActivateVenue")]
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
        [SwaggerOperation(OperationId = "DownloadVenue")]
        public async Task<IVenueData> Download(string name)
        {
            var venue = await Store.Get(name);
            return venue;
        }

        [HttpGet]
        [SwaggerOperation(OperationId = "GetVenues")]
        public override Task<IEnumerable<string>> Get()
        {
            return base.Get();
        }

        [HttpGet("{name}")]
        [SwaggerOperation(OperationId = "GetVenue")]
        public override Task<IVenueData> Get(string name)
        {
            return base.Get(name);
        }

        [HttpPut("{originalName}")]
        [SwaggerOperation(OperationId = "PutVenue")]
        public override Task Put(string originalName, [FromBody]VenueData value)
        {
            return base.Put(originalName, value);
        }

        [HttpPost]
        [SwaggerOperation(OperationId = "PostVenue")]
        public override Task Post([FromBody]VenueData value)
        {
            return base.Post(value);
        }

        [HttpDelete("{name}")]
        [SwaggerOperation(OperationId = "DeleteVenue")]
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
