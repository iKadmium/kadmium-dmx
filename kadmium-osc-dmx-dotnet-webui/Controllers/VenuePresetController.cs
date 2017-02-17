using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class VenuePresetController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return FileAccess.GetVenuePresetNames();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<JObject> Get(string id)
        {
            return await FileAccess.LoadVenuePreset(id);
        }
        
        // PUT api/values/5
        [HttpPut("{id}")]
        public async void Put(string id, [FromBody]JObject value)
        {
            string newName = value.Value<string>("name");
            if(id != newName && FileAccess.HasVenuePreset(id))
            {
                FileAccess.RenameVenuePreset(id, newName);
            }
            await FileAccess.SaveVenuePreset(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            FileAccess.DeleteVenuePreset(id);
        }
    }
}
