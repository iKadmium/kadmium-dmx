using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System.Threading.Tasks;
using Swashbuckle.AspNetCore.SwaggerGen;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : Controller
    {
        private DatabaseContext _context;

        public FixtureDefinitionController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [SwaggerOperation("getFixtureDefinitionSkeletons")]
        public IEnumerable<FixtureDefinitionSkeleton> Get()
        {
            List<FixtureDefinitionSkeleton> skeletons = _context.FixtureDefinitions
                .Select(x => x.GetSkeleton())
                .OrderBy(x => x.Manufacturer)
                .ThenBy(x => x.Model)
                .ToList();
            return skeletons;
        }

        [HttpGet("{id}")]
        [SwaggerOperation("getFixtureDefinitionById")]
        public async Task<FixtureDefinition> Get(int id)
        {
            var definition = await _context.LoadFixtureDefinition(id);
            var filename = definition.Manufacturer + " " + definition.Model + ".json";
            Request.HttpContext.Response.Headers.Add("Content-Disposition", "filename=" + filename);
            return definition;
        }

        [HttpDelete("{id}")]
        [SwaggerOperation("deleteFixtureDefinitionById")]
        public async Task Delete(int id)
        {
            FixtureDefinition definition = await _context.FixtureDefinitions.FindAsync(id);
            _context.FixtureDefinitions.Remove(definition);
            await _context.SaveChangesAsync();
        }

        [HttpPost]
        [SwaggerOperation("postFixtureDefinitionById")]
        public async Task<int> Post([FromBody]FixtureDefinition definition)
        {
            await _context.FixtureDefinitions.AddAsync(definition);
            await _context.SaveChangesAsync();
            return definition.Id;

        }

        [HttpPut("{id}")]
        [SwaggerOperation("putFixtureDefinitionById")]
        public async Task Put(int id, [FromBody]FixtureDefinition definition)
        {
            var oldDefinition = await _context.LoadFixtureDefinition(id);
            UpdateDefinition(oldDefinition, definition);
            await _context.SaveChangesAsync();
        }

        private void UpdateDefinition(FixtureDefinition oldDefinition, FixtureDefinition newDefinition)
        {
            var removals = from channel in oldDefinition.Channels
                           where !newDefinition.Channels.Any(x => x.Id == channel.Id)
                           select channel;
            _context.RemoveRange(removals);
            _context.Entry(oldDefinition).CurrentValues.SetValues(newDefinition);

            foreach (var channel in newDefinition.Channels)
            {
                if (channel.Id == 0)
                {
                    oldDefinition.Channels.Add(channel);
                }
                else
                {
                    var oldChannel = oldDefinition.Channels.Single(x => x.Id == channel.Id);
                    channel.FixtureDefinitionId = newDefinition.Id;
                    _context.Entry(oldChannel).CurrentValues.SetValues(channel);

                }
            }

            foreach (var movement in newDefinition.Movements)
            {
                if (movement.Id == 0)
                {
                    oldDefinition.Movements.Add(movement);
                }
                else
                {
                    var oldMovement = oldDefinition.Movements.Single(x => x.Id == movement.Id);
                    _context.Entry(oldMovement).CurrentValues.SetValues(movement);
                }
            }

            foreach (var colorWheelEntry in newDefinition.ColorWheel)
            {
                if (colorWheelEntry.Id == 0)
                {
                    oldDefinition.ColorWheel.Add(colorWheelEntry);
                }
                else
                {
                    var oldEntry = oldDefinition.ColorWheel.Single(x => x.Id == colorWheelEntry.Id);
                    _context.Entry(oldEntry).CurrentValues.SetValues(colorWheelEntry);
                }
            }
        }
    }
}
