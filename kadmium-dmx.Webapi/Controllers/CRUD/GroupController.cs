using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.Annotations;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types;
using kadmium_dmx_core;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{

    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        private IGroupStore Store { get; set; }
        private IMasterController MasterController { get; set; }

        public GroupController(IGroupStore store, IMasterController masterController)
        {
            Store = store;
            MasterController = masterController;
        }

        // GET: /<controller>/
        [HttpGet]
        [SwaggerOperation("getGroups")]
        public async Task<IEnumerable<IGroupData>> Get()
        {
            IEnumerable<IGroupData> returnVal;
            returnVal = (await Store.GetAll()).OrderBy(x => x.Order);
            return returnVal;
        }

        [HttpPut]
        [SwaggerOperation("putGroup")]
        public async Task Put([FromBody]IEnumerable<IGroupData> groups)
        {
            await Store.RemoveAll();
            var putTasks = groups.Select(group => Store.Update(group.Name, group));
            await Task.WhenAll(putTasks);
            MasterController.SetGroups(groups);
        }

        [HttpGet("[action]/{group}/{attribute}/{value}")]
        [SwaggerOperation("setAttribute")]
        public void Set(string group, string attribute, float value)
        {
            MasterController.Groups[group].Set(attribute, value);
        }
    }
}
