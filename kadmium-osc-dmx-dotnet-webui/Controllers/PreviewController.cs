using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;

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
            JArray arr;
            if(MasterController.Instance.Venue != null)
            {
                arr = new JArray(
                    from universe in MasterController.Instance.Venue.Universes
                    from fixture in universe.Fixtures
                    select new JObject(
                        new JProperty("name", fixture.Definition.Name),
                        new JProperty("address", fixture.StartChannel)
                    )
                );
            }
            else
            {
                arr = new JArray();
            }

            return Content(arr.ToString());
        }
    }
}
