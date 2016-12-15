using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{

    public class GroupsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Schema()
        {
            JObject obj = FileAccess.GetGroupsSchema();
            Response.StatusCode = 200;
            return Content(obj.ToString());
        }

        public IActionResult List()
        {
            JArray arr = new JArray(
                from grp in MasterController.Instance.Groups.Values
                orderby grp.Order
                select new JValue(grp.Name)
            );
            return Content(arr.ToString());
        }

        public IActionResult Load(string id)
        {
            if (id == null)
            {
                JObject obj = new JObject(
                    new JProperty("name", "")
                );
                return Content(new Group().Serialize().ToString());
            }
            else if (MasterController.Instance.Groups.ContainsKey(id))
            {
                Group group = MasterController.Instance.Groups[id];
                return Content(group.Serialize().ToString());
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
            Group group;
            if (id == null)
            {
                group = new Group(newID, MasterController.Instance.Groups.Count + 1);
            }
            else if (MasterController.Instance.Groups.ContainsKey(id))
            {
                MasterController.Instance.Groups.TryRemove(id, out group);
                group.Name = newID;
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }

            if (MasterController.Instance.Groups.TryAdd(newID, group))
            {
                FileAccess.SaveGroups();
                if (MasterController.Instance.Venue != null)
                {
                    FileAccess.SaveVenue(MasterController.Instance.Venue.Serialize());
                }
                FileAccess.RenameGroup(id, newID);

                Response.StatusCode = 200;
                return new EmptyResult();
            }
            else
            {
                Response.StatusCode = 500;
                return new EmptyResult();
            }
        }

        public IActionResult SaveOrder(string jsonString)
        {
            JObject obj = JObject.Parse(jsonString);
            var names = obj["names"].Values<string>().ToList();
            foreach (Group group in MasterController.Instance.Groups.Values)
            {
                group.Order = names.IndexOf(group.Name);
            }
            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            Group group;
            if (MasterController.Instance.Groups.TryRemove(id, out group))
            {
                if (MasterController.Instance.Groups.Count == 0)
                {
                    MasterController.Instance.Groups.TryAdd("Default Group", new Group("Default Group", 1));
                }
                MasterController.Instance.Groups.Values.First().Fixtures.AddRange(group.Fixtures);
                FileAccess.SaveGroups();
                Response.StatusCode = 200;
                return new EmptyResult();
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
