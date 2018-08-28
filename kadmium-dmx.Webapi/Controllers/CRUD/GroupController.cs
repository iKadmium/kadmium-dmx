using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types;
using kadmium_dmx_core;
using Swashbuckle.AspNetCore.Annotations;
using Newtonsoft.Json.Linq;

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
        [SwaggerOperation(OperationId = "GetGroups")]
        public async Task<IEnumerable<IGroupData>> Get()
        {
            IEnumerable<IGroupData> returnVal;
            returnVal = (await Store.GetAll()).OrderBy(x => x.Order);
            return returnVal;
        }

        [HttpPut]
        [SwaggerOperation(OperationId = "PutGroups")]
        public async Task Put([FromBody]IEnumerable<GroupData> groups)
        {
            await Store.RemoveAll();
            var putTasks = groups.Select(group => Store.Add(group));
            await Task.WhenAll(putTasks);
        }

        [HttpGet("[action]/{group}/{attribute}/{value}")]
        [SwaggerOperation(OperationId = "SetGroupAttribute")]
        public void SetAttribute(string group, string attribute, float value)
        {
            MasterController.Groups[group].Set(attribute, value);
        }
    }
}
