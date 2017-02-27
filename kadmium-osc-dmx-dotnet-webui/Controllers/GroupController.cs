using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{

    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        // GET: /<controller>/
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return MasterController.Instance.Groups.Values.OrderBy(x => x.Order).Select(x => x.Name);
        }

        [HttpPut]
        public void Put([FromBody]string[] groups)
        {
            MasterController.Instance.Groups.Clear();
            for (int i = 0; i < groups.Length; i++)
            {
                string groupName = groups[i];
                Group group = new Group(groupName, i);
                MasterController.Instance.Groups.TryAdd(groupName, group);
            }
            FileAccess.SaveGroups();
        }

        [HttpGet]
        [Route("[action]/{group}/{attribute}/{value}")]
        public void Set(string group, string attribute, float value)
        {
            MasterController.Instance.Groups[group].Set(attribute, value);
        }
    }
}
