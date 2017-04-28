using Microsoft.AspNetCore.Mvc;

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return File("/index.html", "text/html");
        }
        
        public IActionResult Error()
        {
            return View();
        }
    }
}
