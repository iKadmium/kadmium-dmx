using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class GroupsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("group", MasterController.Instance.Groups.Keys));
        }
    }
}
