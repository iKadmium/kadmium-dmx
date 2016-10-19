using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class EnttecProTransmittersController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("EntTec Transmitter", MasterController.Instance.Transmitters.Where(x => x is EnttecProTransmitter).Select(x => x.Name)));
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new EnttecProTransmitter("", "", 0).Serialize().ToString());
            }
            else
            {
                try
                {
                    EnttecProTransmitter transmitter = MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter && x.Name == id) as EnttecProTransmitter;
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
            try
            {
                EnttecProTransmitter transmitter = MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter && x.Name == id) as EnttecProTransmitter;
                transmitter.Name = newID;
                transmitter.Address = obj["address"].Value<string>();

            }
            catch (Exception)
            {
                EnttecProTransmitter transmitter = new EnttecProTransmitter(newID, obj["address"].Value<string>(), obj["delay"].Value<int>());
                MasterController.Instance.Transmitters.Add(transmitter);
            }
            FileAccess.SaveTransmitters();
            
            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id, string jsonString)
        {
            try
            {
                EnttecProTransmitter transmitter = MasterController.Instance.Transmitters.Single(x => x is EnttecProTransmitter && x.Name == id) as EnttecProTransmitter;
                MasterController.Instance.Transmitters.Remove(transmitter);

                Response.StatusCode = 200;
                return new EmptyResult();
            }
            catch (Exception)
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
