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
        private DatabaseContext _context;

        public VenueController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Venue>> Get()
        {
            var list = await _context.Venues.ToListAsync();
            return list;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<Venue> Get(int id)
        {
            var venue = await _context.LoadVenue(id);
            return venue;
        }

        [HttpGet]
        [Route("[action]")]
        public Venue GetActive()
        {
            return MasterController.Instance.Venue;
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task Activate(int id)
        {
            var venue = await _context.LoadVenue(id);
            await MasterController.Instance.Initialise(_context);
            await venue.Initialize(_context);
            MasterController.Instance.LoadVenue(venue, _context);
            
        }
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            Venue venue = await _context.Venues.FindAsync(id);
            _context.Venues.Remove(venue);
            await _context.SaveChangesAsync();
            
        }

        [HttpPost]
        public async Task<int> Post([FromBody]Venue venue)
        {
            await venue.Initialize(_context);
            await _context.Venues.AddAsync(venue);
            await _context.SaveChangesAsync();
            return venue.Id;
        }

        [HttpPut]
        [Route("{id}")]
        public async Task Put(int id, [FromBody]Venue venue)
        {
            await venue.Initialize(_context);
            venue.Id = id;
            _context.Update(venue);
            await _context.SaveChangesAsync();
        }

        [Route("[action]/{id}")]
        public async Task<VenueDownload> Download(int id)
        {
            Venue venue = await _context.LoadVenue(id);
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
