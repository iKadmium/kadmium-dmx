using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core.Solvers;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class SolversLiveController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public bool Enabled()
        {
            return MasterController.Instance.UpdatesEnabled;
        }

        [HttpGet]
        [Route("[action]/{value}")]
        public void Enabled(bool value)
        {
            MasterController.Instance.UpdatesEnabled = value;
        }

        [HttpGet]
        public JObject Get()
        {
            JObject obj = new JObject(
                new JProperty("messageType", "init"),
                new JProperty("universes",
                    new JArray(
                        from universe in MasterController.Instance.Venue?.Universes.Values ?? Enumerable.Empty<Universe>()
                        select new JObject(
                            new JProperty("universeID", universe.UniverseID),
                            new JProperty("name", universe.Name),
                            new JProperty("fixtures",
                                new JArray(
                                    from fixture in universe.Fixtures
                                    select new JObject(
                                        new JProperty("type", fixture.Definition.Model),
                                        new JProperty("channel", fixture.StartChannel),
                                        new JProperty("attributes",
                                            new JArray(
                                                from attribute in fixture.Settables.Values
                                                where (attribute is DMXChannel || attribute is FixtureSolverAttribute)
                                                select new JObject(
                                                    new JProperty("name", attribute.Name),
                                                    new JProperty("value", attribute.Value),
                                                    new JProperty("dmxMin", (attribute as DMXChannel)?.Min ?? 0),
                                                    new JProperty("dmxMax", (attribute as DMXChannel)?.Max ?? 0),
                                                    new JProperty("controlled", (attribute as DMXChannel)?.Controlled ?? false),
                                                    new JProperty("dmx", attribute is DMXChannel)
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );

            return obj;
        }
    }
}