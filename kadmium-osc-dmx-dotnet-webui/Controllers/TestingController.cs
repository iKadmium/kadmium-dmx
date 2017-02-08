using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class TestingController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("[controller]/[action]/{group}/{attribute}/{value}")]
        public void Set(string group, string attribute, float value)
        {
            MasterController.Instance.Groups[group].Set(attribute, value);
        }
    }
}
