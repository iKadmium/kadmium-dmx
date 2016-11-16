using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class SettingsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Load()
        {
            return Content(FileAccess.LoadSettings().ToString());
        }

        public IActionResult Save(string jsonString)
        {
            JObject obj = JObject.Parse(jsonString);
            FileAccess.SaveSettings(obj);
            return new EmptyResult();
        }
    }
}
