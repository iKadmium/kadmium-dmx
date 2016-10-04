using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class VenuesController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("Venue", FileAccess.GetVenueNames()));
        }

        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetVenuesSchema();
            return Content(obj.ToString());
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new Venue().Serialize().ToString());
            }
            else
            {
                if (FileAccess.HasVenue(id))
                {
                    return Content(FileAccess.LoadVenue(id).ToString());
                }
                else
                {
                    Response.StatusCode = 404;
                    return new EmptyResult();
                }
            }
        }

        public IActionResult Save(string id, string jsonString)
        {
            JObject obj = JObject.Parse(jsonString);
            string newID = obj["name"].Value<string>();
            Venue venue;
            if (FileAccess.HasVenue(id))
            {
                FileAccess.DeleteVenue(id);
            }

            venue = Venue.Load(obj);
            FileAccess.SaveVenue(venue.Serialize());

            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if (FileAccess.HasVenue(id))
            {
                FileAccess.DeleteVenue(id);
                Response.StatusCode = 200;
            }
            else
            {
                Response.StatusCode = 404;
            }
            return new EmptyResult();
        }

        public IActionResult Activate(string id)
        {
            if(FileAccess.HasVenue(id))
            {
                MasterController.Instance.LoadVenue(id);
                Response.StatusCode = 200;
                return new EmptyResult();
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
