using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class SACNTransmittersController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("sACN Transmitter", MasterController.Instance.Transmitters.Values.Where(x => x is SACNTransmitter).Select(x => x.Name)));
        }

        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetTransmitterSchema();
            Response.StatusCode = 200;
            return Content(obj.ToString());
        }

        public IActionResult List()
        {
            JArray arr = new JArray(
                from transmitter in MasterController.Instance.Transmitters.Values
                where transmitter is SACNTransmitter
                select new JValue(transmitter.Name)
            );
            return Content(arr.ToString());
        }

        public IActionResult Load(string id)
        {
            if(id == null)
            {
                SACNTransmitter tempTransmitter = new SACNTransmitter(Guid.NewGuid(), "", 6454, 0, false, Enumerable.Empty<string>());
                var content = tempTransmitter.Serialize().ToString();
                return Content(content);
            }
            else if(MasterController.Instance.Transmitters.ContainsKey(id) && MasterController.Instance.Transmitters[id] is SACNTransmitter)
            {
                SACNTransmitter transmitter = MasterController.Instance.Transmitters[id] as SACNTransmitter;
                return Content(transmitter.Serialize().ToString());   
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
            Transmitter transmitter;
            if (id != null && MasterController.Instance.Transmitters.ContainsKey(id) && MasterController.Instance.Transmitters[id] is SACNTransmitter)
            {

                if(MasterController.Instance.Transmitters.TryRemove(id, out transmitter))
                {
                    transmitter.Close();
                    if (MasterController.Instance.Venue != null)
                    {
                        var transmitterTargets = MasterController.Instance.Venue.Universes.SelectMany(x => x.TransmitterTargets);
                        foreach (var target in transmitterTargets)
                        {
                            target.TransmitterName = newID;
                        }
                        FileAccess.SaveVenue(MasterController.Instance.Venue.Serialize());
                    }

                    FileAccess.RenameTransmitter(id, newID);
                }
                else
                {
                    Response.StatusCode = 500;
                    return new EmptyResult();
                }
            }
            
            transmitter = SACNTransmitter.Load(obj);
            if (MasterController.Instance.Transmitters.TryAdd(newID, transmitter))
            {
                FileAccess.SaveListeners();

                Response.StatusCode = 200;
                return new EmptyResult();
            }
            else
            {
                Response.StatusCode = 500;
                return new EmptyResult();
            }
        }
        
        public IActionResult Delete(string id)
        {
            if (id != null && MasterController.Instance.Transmitters.ContainsKey(id) && MasterController.Instance.Transmitters[id] is SACNTransmitter)
            {
                Transmitter transmitter;

                if (MasterController.Instance.Transmitters.TryRemove(id, out transmitter))
                {
                    transmitter.Close();
                    FileAccess.SaveTransmitters();
                    Response.StatusCode = 200;
                    return new EmptyResult();
                }
                else
                {
                    Response.StatusCode = 500;
                    return new EmptyResult();
                }

            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult Status(string id)
        {
            if (id != null && MasterController.Instance.Transmitters.ContainsKey(id) && MasterController.Instance.Transmitters[id] is SACNTransmitter)
            {
                SACNTransmitter transmitter = MasterController.Instance.Transmitters[id] as SACNTransmitter;
                JObject obj = transmitter.Status.Serialize();
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
            if (id != null && MasterController.Instance.Transmitters.ContainsKey(id) && MasterController.Instance.Transmitters[id] is SACNTransmitter)
            {
                SACNTransmitter transmitter = MasterController.Instance.Transmitters[id] as SACNTransmitter;
                return View(transmitter);
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
