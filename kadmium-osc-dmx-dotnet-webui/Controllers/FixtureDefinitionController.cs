using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : Controller
    {
        private DatabaseContext _context;

        public FixtureDefinitionController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<FixtureDefinitionSkeleton> Get()
        {
            List<FixtureDefinitionSkeleton> skeletons = _context.FixtureDefinitions
                .Select(x => x.GetSkeleton())
                .OrderBy(x => x.Manufacturer)
                .ThenBy(x => x.Model)
                .ToList();
            return skeletons;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<FixtureDefinition> Get(int id)
        {
            var definition = await _context.LoadFixtureDefinition(id);
            return definition;
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task Delete(int id)
        {
            FixtureDefinition definition = await _context.FixtureDefinitions.FindAsync(id);
            _context.FixtureDefinitions.Remove(definition);
            await _context.SaveChangesAsync();
        }

        [HttpPost]
        public async Task<int> Post([FromBody]FixtureDefinition definition)
        {
            await _context.FixtureDefinitions.AddAsync(definition);
            await _context.SaveChangesAsync();
            return definition.Id;
            
        }

        [HttpPut]
        [Route("{id}")]
        public async Task Put(int id, [FromBody]FixtureDefinition definition)
        {
            _context.Update(definition);
            await _context.SaveChangesAsync();            
        }
    }
}
