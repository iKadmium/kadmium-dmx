using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : Controller
    {
        [HttpGet]
        public IEnumerable<FixtureDefinitionSkeleton> Get()
        {
            using (var context = new DatabaseContext())
            {
                List<FixtureDefinitionSkeleton> skeletons = new List<FixtureDefinitionSkeleton>();
                context.FixtureDefinitions.ForEachAsync(definition =>
                {
                    skeletons.Add(new FixtureDefinitionSkeleton { Id = definition.Id, Manufacturer = definition.Manufacturer, Model = definition.Model });
                }); 
                return skeletons;
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<FixtureDefinition> Get(int id)
        {
            using (var context = new DatabaseContext())
            {
                var result = await context.FixtureDefinitions.FindAsync(id);
                foreach(var collection in context.Entry(result).Collections)
                {
                    await collection.LoadAsync();
                }
                return result;
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task Delete(int id)
        {
            using (var context = new DatabaseContext())
            {
                FixtureDefinition definition = await context.FixtureDefinitions.FindAsync(id);
                context.FixtureDefinitions.Remove(definition);
                await context.SaveChangesAsync();
            }
        }

        [HttpPost]
        public async void Post([FromBody]JObject definitionJson)
        {
            using (var context = new DatabaseContext())
            {
                FixtureDefinition definition = FixtureDefinition.Load(definitionJson);
                await context.FixtureDefinitions.AddAsync(definition);
                await context.SaveChangesAsync();
            }
        }

        [HttpPut]
        [Route("{id}")]
        public async Task Put(int id, [FromBody]JObject definitionJson)
        {
            using (var context = new DatabaseContext())
            {
                FixtureDefinition definition = FixtureDefinition.Load(definitionJson);
                FixtureDefinition originalDefinition = await context.FixtureDefinitions.FindAsync(id);
                foreach (var collection in context.Entry(originalDefinition).Collections)
                {
                    await collection.LoadAsync();    
                }
                context.UpdateCollection(originalDefinition.Channels, definition.Channels);
                context.UpdateCollection(originalDefinition.Movements, definition.Movements);
                context.UpdateCollection(originalDefinition.ColorWheel, definition.ColorWheel);
                context.Entry(originalDefinition).CurrentValues.SetValues(definition);
                await context.SaveChangesAsync();
            }
        }
    }
    public class FixtureDefinitionSkeleton
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
