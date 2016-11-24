using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using Newtonsoft.Json.Linq;
using System.Net;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class FixtureDefinitionsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("fixture", FileAccess.GetFixtureNames()));
        }
        
        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetFixtureDefinitionSchema();
            Response.StatusCode = 200;
            return Content(obj.ToString());
        }
    
        public IActionResult Load(string id)
        {
            if(id == null)
            {
                return Content(new Definition().Serialize().ToString());
            }
            else if (FileAccess.HasFixtureDefinition(id))
            {
                return Content(FileAccess.LoadFixtureDefinition(id).ToString());
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult List()
        {
            JArray arr = new JArray(
                from name in FileAccess.GetFixtureNames()
                select new JValue(name)
            );
            return Content(arr.ToString());
        }

        public IActionResult Save(string id, string jsonString)
        {
            JObject fixtureObj = JObject.Parse(jsonString);
            Definition definition = Definition.Load(fixtureObj);
            if(FileAccess.HasFixtureDefinition(id))
            {
                FileAccess.DeleteFixtureDefinition(id);
            }
            FileAccess.SaveFixtureDefinition(definition.Serialize());
            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if(FileAccess.HasFixtureDefinition(id))
            {
                FileAccess.DeleteFixtureDefinition(id);
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
