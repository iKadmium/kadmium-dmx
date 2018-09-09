using Microsoft.AspNetCore.Mvc;

namespace kadmium_dmx_webapi.Controllers
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
