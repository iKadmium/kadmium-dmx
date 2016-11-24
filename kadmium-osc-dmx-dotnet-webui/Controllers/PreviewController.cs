using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class PreviewController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return Preview2D();
        }

        public IActionResult Preview2D()
        {
            return View();
        }
        
        public IActionResult Fixtures()
        {
            JObject obj;
            if(MasterController.Instance.Venue != null)
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
                            from universe in MasterController.Instance.Venue.Universes.Values
                            select new JObject(
                                new JProperty("name", universe.Name),
                                new JProperty("fixtures",
                                    from fixture in universe.Fixtures
                                    select new JObject(
                                        new JProperty("name", fixture.Definition.Name),
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

            return Content(obj.ToString());
        }
    }
}
