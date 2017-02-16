using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class VenueController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return FileAccess.GetVenueNames();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<JObject> Get(string id)
        {
            return await FileAccess.LoadVenue(id);
        }

        [HttpGet]
        [RouteAttribute("[action]/{id}")]
        public async void Activate(string id)
        {
            await MasterController.Instance.LoadVenue(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]JObject value)
        {

        }
    }


}
