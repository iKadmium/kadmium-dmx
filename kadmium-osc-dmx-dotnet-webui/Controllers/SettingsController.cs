using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SettingsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public async Task<JObject> Get()
        {
            return await FileAccess.LoadSettings();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]JObject value)
        {
            FileAccess.SaveSettings(value);
        }
    }


}
