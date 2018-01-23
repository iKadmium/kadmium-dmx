using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Index()
        {
            return File("/index.html", "text/html");
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
