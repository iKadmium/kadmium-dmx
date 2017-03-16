using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Venue> Get()
        {
            List<Venue> returnVal;
            using (var context = new DatabaseContext())
            {
                returnVal = context.Venues.ToList();
            }
            return returnVal;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<Venue> Get(int id)
        {
            using (var context = new DatabaseContext())
            {
                var venue = await context.Venues.FindAsync(id);

                if(venue == null)
                {
                    throw new ArgumentException("No such venue Id: " + id);
                }

                await context.Entry(venue).Collection(x => x.Universes).LoadAsync();
                foreach(Universe universe in venue.Universes)
                {
                    await context.Entry(universe).Collection(x => x.Fixtures).LoadAsync();
                    foreach(Fixture fixture in universe.Fixtures)
                    {
                        await context.Entry(fixture).Reference(x => x.Group).LoadAsync();
                        await context.Entry(fixture).Reference(x => x.FixtureDefinition).LoadAsync();
                    }
                }
                
                return venue;
            }
        }

        [HttpGet]
        [Route("[action]")]
        public Venue GetActive()
        {
            using (var context = new DatabaseContext())
            {
                return MasterController.Instance.Venue;
            }
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async void Activate(int id)
        {
            using (var context = new DatabaseContext())
            {
                var venue = await context.LoadVenue(id);
                MasterController.Instance.LoadVenue(venue);
            }
        }
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            FileAccess.DeleteVenue(id);
        }

        [HttpPost]
        public async void Post([FromBody]JObject definitionJson)
        {
            using (var context = new DatabaseContext())
            {
                Venue venue = Venue.Load(definitionJson);
                await context.Venues.AddAsync(venue);
                await context.SaveChangesAsync();
            }
        }

        [HttpPut]
        [Route("{id}")]
        public async Task Put(int id, [FromBody]JObject venueJson)
        {
            using (var context = new DatabaseContext())
            {
                Venue definition = Venue.Load(venueJson);
                definition.Id = id;
                Venue originalVenue = await context.LoadVenue(id);
                context.UpdateCollection(originalVenue.Universes, definition.Universes);
                context.Entry(originalVenue).CurrentValues.SetValues(definition);
                await context.SaveChangesAsync();
            }
        }
    }
}
