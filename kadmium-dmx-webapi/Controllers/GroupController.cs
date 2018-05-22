using System.Linq;
using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Swashbuckle.AspNetCore.SwaggerGen;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{

    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        private DatabaseContext _context;

        public GroupController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: /<controller>/
        [HttpGet]
        [SwaggerOperation("getGroups")]
        public async Task<IEnumerable<Group>> Get()
        {
            IEnumerable<Group> returnVal;
            returnVal = await _context.Groups.OrderBy(x => x.Order).ToListAsync();
            return returnVal;
        }

        [HttpPut]
        [SwaggerOperation("putGroup")]
        public async Task Put([FromBody]IEnumerable<Group> groups)
        {
            await _context.UpdateCollection(_context.Groups, groups, (x => x.Id));
            await _context.SaveChangesAsync();
            await MasterController.Instance.SetGroups(groups, _context);
        }

        [HttpGet("[action]/{group}/{attribute}/{value}")]
        [SwaggerOperation("setAttribute")]
        public void Set(string group, string attribute, float value)
        {
            MasterController.Instance.Groups[group].Set(attribute, value);
        }
    }
}
