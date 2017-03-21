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
        // GET: api/values
        [HttpGet]
        public IEnumerable<VenuePreset> Get()
        {
            using (var context = new DatabaseContext())
            {
                var list = context.VenuePresets.ToList();
                return list;
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<VenuePreset> Get(int id)
        {
            using (var context = new DatabaseContext())
            {

                VenuePreset preset = await context.LoadVenuePreset(id);
                return preset;
            }
        }

        [HttpPost]
        public async Task Post([FromBody]JObject value)
        {
            using (var context = new DatabaseContext())
            {
                VenuePreset preset = value.ToObject<VenuePreset>();
                foreach(var fixture in preset.Fixtures)
                {
                    fixture.Id = 0;
                }
                await preset.Initialize(context);
                await context.VenuePresets.AddAsync(preset);
                await context.SaveChangesAsync();
            }
        }
        
        // PUT api/values/5
        [HttpPut("{id}")]
        public async void Put(int id, [FromBody]JObject value)
        {
            using (var context = new DatabaseContext())
            {
                VenuePreset preset = value.ToObject<VenuePreset>();
                preset.Id = id;
                VenuePreset originalPreset = await context.LoadVenuePreset(id);
                context.UpdateCollection(originalPreset.Fixtures, preset.Fixtures, (x => x.Id));
                context.Entry(originalPreset).CurrentValues.SetValues(preset);
                await context.SaveChangesAsync();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            using (var context = new DatabaseContext())
            {
                VenuePreset preset = await context.VenuePresets.FindAsync(id);
                context.VenuePresets.Remove(preset);
                await context.SaveChangesAsync();
            }
        }
    }
}
