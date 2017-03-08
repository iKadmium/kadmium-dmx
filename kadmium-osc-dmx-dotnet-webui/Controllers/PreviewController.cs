using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class PreviewController : Controller
    {
        // GET: /<controller>/
        [HttpGet]
        public JObject Get()
        {
            JObject obj;
            if (MasterController.Instance.Venue != null)
            {

                obj = new JObject(
                    new JProperty("groups",
                        new JArray(from grp in MasterController.Instance.Groups.Values
                                   orderby grp.Order
                                   select new JValue(grp.Name)
                        )
                    ),
                    new JProperty("universes",
                        new JArray(
                            from universe in MasterController.Instance.Venue.Universes
                            select new JObject(
                                new JProperty("name", universe.Name),
                                new JProperty("universeID", universe.UniverseNumber),
                                new JProperty("fixtures",
                                    from fixture in universe.Fixtures
                                    select new JObject(
                                        new JProperty("address", fixture.StartChannel),
                                        new JProperty("group", fixture.Group.Name),
                                        new JProperty("definition", fixture.Definition.Serialize())
                                    )
                                )
                            )
                        )
                    )
                );
            }
            else
            {
                obj = new JObject();
            }
            return obj;
        }
    }
}
