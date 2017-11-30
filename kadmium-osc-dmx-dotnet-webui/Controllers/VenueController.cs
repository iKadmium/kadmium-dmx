using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System;
using Swashbuckle.AspNetCore.SwaggerGen;

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
        /// <summary>
        /// Get a list of the Venues in the database
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [SwaggerOperation("getVenues")]
        public async Task<IEnumerable<VenueSkeleton>> Get()
        {
            var skeletons = from venue in _context.Venues
                            select venue.GetSkeleton();
            var list = await skeletons.ToListAsync();
            return list;
        }

        /// <summary>
        /// Get a single venue by its ID
        /// </summary>
        /// <param name="id">The Venue ID</param>
        /// <returns>A venue object</returns>
        [HttpGet("{id}")]
        [SwaggerOperation("getVenueById")]
        public async Task<Venue> Get(int id)
        {
            var venue = await _context.LoadVenue(id);
            return venue;
        }

        [HttpGet("[action]")]
        [SwaggerOperation("getActiveVenue")]
        public ActiveVenue GetActive()
        {
            ActiveVenue response = new ActiveVenue
            {
                Name = MasterController.Instance.Venue?.Name,
                Id = MasterController.Instance.Venue?.Id ?? 0,
                Universes = from universe in MasterController.Instance.Venue?.Universes ?? Enumerable.Empty<Universe>()
                            select UniverseController.GetActiveUniverse(universe)
            };
            return response;
        }



        [HttpGet("[action]/{id}")]
        [SwaggerOperation("activateVenueById")]
        public async Task Activate(int id)
        {
            var venue = await _context.LoadVenue(id);
            await MasterController.Instance.Initialise(_context);
            await venue.Initialize(_context);
            MasterController.Instance.LoadVenue(venue, _context);

        }

        [HttpGet("[action]/{name}")]
        [SwaggerOperation("activateVenueByName")]
        public async Task Activate(string name)
        {
            int id = (await _context.Venues.FirstAsync(x => x.Name.Contains(name))).Id;
            await this.Activate(id);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [SwaggerOperation("deleteVenue")]
        public async Task Delete(int id)
        {
            Venue venue = await _context.Venues.FindAsync(id);
            _context.Venues.Remove(venue);
            await _context.SaveChangesAsync();

        }

        [HttpPost]
        [SwaggerOperation("postVenue")]
        public async Task<int> Post([FromBody]Venue venue)
        {
            await venue.Initialize(_context);
            await _context.Venues.AddAsync(venue);
            await _context.SaveChangesAsync();
            return venue.Id;
        }

        [HttpPut("{id}")]
        [SwaggerOperation("putVenue")]
        public async Task Put(int id, [FromBody]Venue venue)
        {
            await venue.Initialize(_context);
            var oldVenue = await _context.LoadVenue(id);
            await UpdateVenue(oldVenue, venue);
            await _context.SaveChangesAsync();
        }

        [HttpGet("[action]/{id}")]
        [SwaggerOperation("downloadVenue")]
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

        private async Task UpdateVenue(Venue oldVenue, Venue newVenue)
        {
            var removals = from universe in oldVenue.Universes
                           where !newVenue.Universes.Any(x => x.Id == universe.Id)
                           select universe;
            _context.RemoveRange(removals);
            _context.Entry(oldVenue).CurrentValues.SetValues(newVenue);

            foreach (var universe in newVenue.Universes)
            {
                if (universe.Id == 0)
                {
                    oldVenue.Universes.Add(universe);
                }
                else
                {
                    var oldUniverse = oldVenue.Universes.Single(x => x.Id == universe.Id);
                    await UpdateUniverse(oldUniverse, universe);
                }
            }
        }

        private async Task UpdateUniverse(Universe oldUniverse, Universe newUniverse)
        {
            var removals = from fixture in oldUniverse.Fixtures
                           where !newUniverse.Fixtures.Any(x => x.Id == fixture.Id)
                           select fixture;
            _context.RemoveRange(removals);
            _context.Entry(oldUniverse).CurrentValues.SetValues(newUniverse);

            foreach (var fixture in newUniverse.Fixtures)
            {
                if (fixture.Id == 0)
                {
                    oldUniverse.Fixtures.Add(fixture);
                }
                else
                {
                    var oldFixture = oldUniverse.Fixtures.Single(x => x.Id == fixture.Id);
                    await UpdateFixture(oldFixture, fixture);

                }
            }
        }

        private async Task UpdateFixture(Fixture oldFixture, Fixture newFixture)
        {
            _context.Entry(oldFixture).CurrentValues.SetValues(newFixture);
            oldFixture.GroupString = newFixture.GroupString;
            oldFixture.Skeleton = newFixture.Skeleton;
            await oldFixture.Initialize(_context);
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

    public class ActiveVenue
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public IEnumerable<ActiveUniverse> Universes { get; set; }
    }


}
