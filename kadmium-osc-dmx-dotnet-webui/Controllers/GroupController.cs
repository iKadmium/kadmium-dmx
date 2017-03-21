using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{

    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        // GET: /<controller>/
        [HttpGet]
        public async Task<IEnumerable<Group>> Get()
        {
            IEnumerable<Group> returnVal;
            using (DatabaseContext context = new DatabaseContext())
            {
                returnVal = await context.Groups.OrderBy(x => x.Order).ToListAsync();
            }
            return returnVal;
        }

        [HttpPut]
        public async Task Put([FromBody]IEnumerable<Group> groups)
        {
            using (DatabaseContext context = new DatabaseContext())
            {
                await context.UpdateCollection(context.Groups, groups, (x => x.Id));
                await context.SaveChangesAsync();
                await MasterController.Instance.SetGroups(groups, context);
            }
        }

        [HttpGet]
        [Route("[action]/{group}/{attribute}/{value}")]
        public void Set(string group, string attribute, float value)
        {
            MasterController.Instance.Groups[group].Set(attribute, value);
        }
    }
}
