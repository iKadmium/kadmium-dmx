using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public class VenueChunksController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("Venue Chunk", FileAccess.GetVenueChunkNames()));
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                return Content(new VenueChunk().Serialize().ToString() );
            }
            else
            {
                if(FileAccess.HasVenueChunk(id))
                {
                    return Content(FileAccess.LoadVenueChunk(id).ToString());
                }
                else
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
            VenueChunk chunk;
            if(FileAccess.HasVenueChunk(id))
            {
                FileAccess.DeleteVenueChunk(id);
            }
            
            chunk = VenueChunk.Load(obj);
            FileAccess.SaveVenueChunk(chunk.Serialize());

            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if(FileAccess.HasVenueChunk(id))
            {
                FileAccess.DeleteVenueChunk(id);
                Response.StatusCode = 200;
            }
            else
            {
                Response.StatusCode = 404;
            }
            return new EmptyResult();
        }
    }
}
