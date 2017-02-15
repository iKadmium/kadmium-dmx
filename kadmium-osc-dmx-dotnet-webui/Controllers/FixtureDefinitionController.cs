using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : Controller
    {
        [HttpGet]
        public IEnumerable<FixtureDefinitionSkeleton> Get()
        {
            return FileAccess.GetAllFixtures().Select(x => new FixtureDefinitionSkeleton { Manufacturer = x.Item1, Model = x.Item2 });
        }

        [HttpGet]
        [Route("{manufacturer}/{model}")]
        public async Task<Definition> Get(string manufacturer, string model)
        {
            JObject obj = await FileAccess.LoadFixtureDefinition(manufacturer, model);
            Definition definition = Definition.Load(obj);
            return definition;
        }

        [HttpDelete]
        [Route("{manufacturer}/{model}")]
        public async void Delete(string manufacturer, string model)
        {
            await FileAccess.DeleteFixtureDefinition(manufacturer, model);
        }
    }
    public class FixtureDefinitionSkeleton
    {
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
