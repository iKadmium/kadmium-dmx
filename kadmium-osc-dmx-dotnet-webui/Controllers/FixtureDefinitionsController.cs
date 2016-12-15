using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class FixtureDefinitionsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetFixtureDefinitionSchema();
            Response.StatusCode = 200;
            return Content(obj.ToString());
        }

        public IActionResult Load(string manufacturer, string model)
        {
            if (model == null)
            {
                return Content(new Definition().Serialize().ToString());
            }
            else if (FileAccess.HasFixtureDefinition(manufacturer, model))
            {
                return Content(FileAccess.LoadFixtureDefinition(manufacturer, model).ToString());
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
                from fixture in FileAccess.GetAllFixtures()
                select new JObject(
                    new JProperty("manufacturer", fixture.Item1),
                    new JProperty("name", fixture.Item2)
                )
            );
            return Content(arr.ToString());
        }

        public IActionResult Save(string manufacturer, string model, string jsonString)
        {
            JObject fixtureObj = JObject.Parse(jsonString);
            Definition definition = Definition.Load(fixtureObj);
            if (FileAccess.HasFixtureDefinition(manufacturer, model))
            {
                FileAccess.DeleteFixtureDefinition(manufacturer, model);
            }
            FileAccess.SaveFixtureDefinition(definition.Serialize());
            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string manufacturer, string model)
        {
            if (FileAccess.HasFixtureDefinition(manufacturer, model))
            {
                FileAccess.DeleteFixtureDefinition(manufacturer, model);
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
