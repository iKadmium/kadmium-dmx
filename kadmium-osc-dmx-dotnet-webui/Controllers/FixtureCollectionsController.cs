using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class FixtureCollectionsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("Fixture Collection", FileAccess.GetFixtureCollectionNames()));
        }

        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetFixtureCollectionSchema();
            return Content(obj.ToString());
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new FixtureCollection().Serialize().ToString() );
            }
            else
            {
                if(FileAccess.HasFixtureCollection(id))
                {
                    return Content(FileAccess.LoadFixtureCollection(id).ToString());
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
            FixtureCollection collection;
            if(FileAccess.HasFixtureCollection(id))
            {
                FileAccess.DeleteFixtureCollection(id);
            }
            
            collection = FixtureCollection.Load(obj);
            FileAccess.SaveFixtureCollection(collection.Serialize());

            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if(FileAccess.HasFixtureCollection(id))
            {
                FileAccess.DeleteFixtureCollection(id);
                Response.StatusCode = 200;
            }
            else
            {
                Response.StatusCode = 404;
            }
            return new EmptyResult();
        }
    }
}
