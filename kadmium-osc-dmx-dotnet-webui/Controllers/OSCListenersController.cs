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
            return View(new ListData("OSC Listener", MasterController.Instance.Listeners.Values.Where(x => x is OSCListener).Select(x => x.Name)));
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
                from listener in MasterController.Instance.Listeners.Values
                where listener is OSCListener
                select new JValue(listener.Name)
            );
            return Content(arr.ToString());
        }

        public IActionResult Load(string id)
        {
            if(id == null)
            {
                var tempListener = new OSCListener(9000, "");
                var content = tempListener.Serialize().ToString();
                tempListener.Close();
                return Content(content);
            }
            else if(MasterController.Instance.Listeners.ContainsKey(id) && MasterController.Instance.Listeners[id] is OSCListener)
            {
                OSCListener listener = MasterController.Instance.Listeners[id] as OSCListener;
                return Content(listener.Serialize().ToString());
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult Save(string id, string jsonString)
        {
            JObject obj = JObject.Parse(jsonString);
            string newID = obj["name"].Value<string>();
            Listener listener = OSCListener.Load(obj);
            
            if (id != null && MasterController.Instance.Listeners.ContainsKey(id) && MasterController.Instance.Listeners[id] is OSCListener)
            {
                Listener oldListener;
                if(MasterController.Instance.Listeners.TryRemove(id, out oldListener))
                {
                    oldListener.Close();
                }
                else
                {
                    Response.StatusCode = 500;
                    return new EmptyResult();
                }
            }
            
            if(MasterController.Instance.Listeners.TryAdd(listener.Name, listener))
            {
                FileAccess.SaveListeners();

                Response.StatusCode = 200;
                return new EmptyResult();
            }
            Response.StatusCode = 500;
            return new EmptyResult();

        }

        public IActionResult Delete(string id)
        {
            if (id != null && MasterController.Instance.Listeners.ContainsKey(id) && MasterController.Instance.Listeners[id] is OSCListener)
            {
                Listener listener;
                if(MasterController.Instance.Listeners.TryRemove(id, out listener))
                {
                    listener.Close();
                    FileAccess.SaveListeners();
                    Response.StatusCode = 200;
                    return new EmptyResult();
                }
            }
            Response.StatusCode = 404;
            return new EmptyResult();
        }

        public IActionResult Status(string id)
        {
            if (id != null && MasterController.Instance.Listeners.ContainsKey(id) && MasterController.Instance.Listeners[id] is OSCListener)
            {
                OSCListener listener = MasterController.Instance.Listeners[id] as OSCListener;
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
            if (id != null && MasterController.Instance.Listeners.ContainsKey(id) && MasterController.Instance.Listeners[id] is OSCListener)
            {
                OSCListener listener = MasterController.Instance.Listeners[id] as OSCListener;
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
