using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : Controller
    {
        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Venue>> Get()
        {
            using (var context = new DatabaseContext())
            {
                var list = await context.Venues.ToListAsync();
                return list;
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<Venue> Get(int id)
        {
            using (var context = new DatabaseContext())
            {
                var venue = await context.LoadVenue(id);
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
                await venue.Initialize(context);
                MasterController.Instance.LoadVenue(venue, context);
            }
        }
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            using (var context = new DatabaseContext())
            {
                Venue venue = await context.Venues.FindAsync(id);
                context.Venues.Remove(venue);
                await context.SaveChangesAsync();
            }
        }

        [HttpPost]
        public async Task<int> Post([FromBody]JObject definitionJson)
        {
            using (var context = new DatabaseContext())
            {
                Venue venue = definitionJson.ToObject<Venue>();
                await venue.Initialize(context);
                await context.Venues.AddAsync(venue);
                await context.SaveChangesAsync();
                return venue.Id;
            }
        }

        [HttpPut]
        [Route("{id}")]
        public async Task Put(int id, [FromBody]JObject venueJson)
        {
            using (var context = new DatabaseContext())
            {
                Venue venue = venueJson.ToObject<Venue>();
                await venue.Initialize(context);
                venue.Id = id;
                context.Update(venue);
                await context.SaveChangesAsync();
            }
        }

        [Route("[action]/{id}")]
        public async Task<VenueDownload> Download(int id)
        {
            using (var context = new DatabaseContext())
            {
                Venue venue = await context.LoadVenue(id);
                VenueDownload download = new VenueDownload()
                {
                    Name = venue.Name,
                    Universes = venue.Universes.Select(universe => new UniverseDownload
                    {
                        Name = universe.Name,
                        UniverseID = universe.UniverseNumber,
                        Fixtures = universe.Fixtures.Select(fixture => new FixtureDownload
                        {
                            Address = fixture.StartChannel,
                            Group = fixture.Group.Name,
                            Options = fixture.Options,
                            Skeleton = new FixtureDefinitionDownloadSkeleton
                            {
                                Manufacturer = fixture.FixtureDefinition.Manufacturer,
                                Model = fixture.FixtureDefinition.Model
                            }
                        })
                    })
                };
                return download;
            }
        }
    }

    public class VenueDownload
    {
        public string Name { get; set; }
        public IEnumerable<UniverseDownload> Universes { get; set; }
    }

    public class UniverseDownload
    {
        public string Name { get; set; }
        public int UniverseID { get; set; }
        public IEnumerable<FixtureDownload> Fixtures { get; set; }
    }

    public class FixtureDownload
    {
        public int Address { get; set; }
        public FixtureDefinitionDownloadSkeleton Skeleton { get; set; }
        public JObject Options { get; set; }
        public string Group { get; set; }
    }

    public class FixtureDefinitionDownloadSkeleton
    {
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
