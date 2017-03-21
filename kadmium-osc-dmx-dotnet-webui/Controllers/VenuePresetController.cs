using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;
using System.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class VenuePresetController : Controller
    {
        private DatabaseContext _context;

        public VenuePresetController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<VenuePreset> Get()
        {
            var list = _context.VenuePresets.ToList();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<VenuePreset> Get(int id)
        {
            VenuePreset preset = await _context.LoadVenuePreset(id);
            return preset;
        }

        [HttpPost]
        public async Task Post([FromBody]JObject value)
        {
            VenuePreset preset = value.ToObject<VenuePreset>();
            foreach(var fixture in preset.Fixtures)
            {
                fixture.Id = 0;
            }
            await preset.Initialize(_context);
            await _context.VenuePresets.AddAsync(preset);
            await _context.SaveChangesAsync();
        }
        
        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody]JObject value)
        {
            VenuePreset preset = value.ToObject<VenuePreset>();
            preset.Id = id;
            VenuePreset originalPreset = await _context.LoadVenuePreset(id);
            _context.UpdateCollection(originalPreset.Fixtures, preset.Fixtures, (x => x.Id));
            _context.Entry(originalPreset).CurrentValues.SetValues(preset);
            await _context.SaveChangesAsync();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            VenuePreset preset = await _context.VenuePresets.FindAsync(id);
            _context.VenuePresets.Remove(preset);
            await _context.SaveChangesAsync();
        }
    }
}
