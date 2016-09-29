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
            return View(new ListData("sACN Transmitter", MasterController.Instance.Transmitters.Where(x => x is SACNTransmitter).Select(x => x.Name)));
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new SACNTransmitter(Guid.NewGuid(), 1, "", false, 6454).Serialize().ToString());
            }
            else
            {
                try
                {
                    SACNTransmitter transmitter = MasterController.Instance.Transmitters.Single(x => x.Name == id && x is SACNTransmitter) as SACNTransmitter;
                    return Content(transmitter.Serialize().ToString());
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
            SACNTransmitter transmitter;
            try
            {
                transmitter = MasterController.Instance.Transmitters.Single(x => x is SACNTransmitter && x.Name == id) as SACNTransmitter;
                MasterController.Instance.Transmitters.Remove(transmitter);
            }
            catch (Exception)
            {
                
            }

            transmitter = SACNTransmitter.Load(obj);
            MasterController.Instance.Transmitters.Add(transmitter);

            FileAccess.SaveListeners();

            Response.StatusCode = 200;
            return new EmptyResult();
        }
        
        public IActionResult Delete(string id)
        {
            try
            {
                SACNTransmitter transmitter = MasterController.Instance.Transmitters.Single(x => x.Name == id && x is SACNTransmitter) as SACNTransmitter;
                MasterController.Instance.Transmitters.Remove(transmitter);
                FileAccess.SaveTransmitters();
                Response.StatusCode = 200;
                return new EmptyResult();
            }
            catch(Exception)
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
