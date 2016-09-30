using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class UniversesController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("Universe", MasterController.Instance.Universes.Keys));
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new Universe().Serialize().ToString());
            }
            else if (MasterController.Instance.Universes.ContainsKey(id))
            {
                JObject obj = new JObject(
                    new JProperty("name", id)
                );
                return Content(obj.ToString());
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult Save(string id, string jsonString)
        {
            JObject obj = JObject.Parse(jsonString);
            string newID = obj["name"].Value<string>();
            Universe universe;
            if (id == null)
            {
                universe = Universe.Load(obj);
            }
            else if (MasterController.Instance.Universes.ContainsKey(id))
            {
                universe = MasterController.Instance.Universes[id];
                MasterController.Instance.Universes.Remove(id);
                universe = Universe.Load(obj);
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }

            MasterController.Instance.Universes.Add(newID, universe);
            FileAccess.SaveUniverses();

            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if (MasterController.Instance.Universes.ContainsKey(id))
            {
                MasterController.Instance.Universes.Remove(id);
                FileAccess.SaveUniverses();
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
