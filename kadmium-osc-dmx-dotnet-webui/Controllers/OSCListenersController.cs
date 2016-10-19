using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class OSCListenersController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("OSC Listener", MasterController.Instance.Listeners.Select(x => x.Name)));
        }

        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetListenerSchema();
            Response.StatusCode = 200;
            return Content(obj.ToString());
        }

        public IActionResult List()
        {
            JArray arr = new JArray(
                from listener in MasterController.Instance.Listeners
                select new JValue(listener.Name)
            );
            return Content(arr.ToString());
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new OSCListener(9000, "").Serialize().ToString());
            }
            else
            {
                try
                {
                    OSCListener listener = MasterController.Instance.Listeners.Single(x => x.Name == id && x is OSCListener) as OSCListener;
                    return Content(listener.Serialize().ToString());
                }
                catch (Exception)
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
            OSCListener listener;
            try
            {
                listener = MasterController.Instance.Listeners.Single(x => x is OSCListener && x.Name == newID) as OSCListener;
                listener.Close();
                MasterController.Instance.Listeners.Remove(listener);
            }
            catch (Exception)
            {    
            }

            listener = OSCListener.Load(obj);
            MasterController.Instance.Listeners.Add(listener);

            FileAccess.SaveListeners();

            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if (MasterController.Instance.Listeners.Any(x => x.Name == id))
            {
                OSCListener listener = MasterController.Instance.Listeners.Single(x => x.Name == id) as OSCListener;
                MasterController.Instance.Listeners.Remove(listener);
                FileAccess.SaveListeners();
                Response.StatusCode = 200;
                return new EmptyResult();
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult Status(string id)
        {
            if(MasterController.Instance.Listeners.Any(x => x.Name == id))
            {
                OSCListener listener = MasterController.Instance.Listeners.Single(x => x.Name == id) as OSCListener;
                JObject obj = listener.Status.Serialize();
                obj.Add(new JProperty("name", id));
                obj.Add(new JProperty("controller", ControllerContext.RouteData.Values["controller"].ToString()));
                return Content(obj.ToString());
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult Live(string id)
        {
            if (MasterController.Instance.Listeners.Any(x => x.Name == id))
            {
                OSCListener listener = MasterController.Instance.Listeners.Single(x => x.Name == id) as OSCListener;
                return View(listener);
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
