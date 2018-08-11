using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using System.Threading.Tasks;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.Annotations;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : CrudController<IFixtureDefinitionStore, FixtureDefinitionSkeleton, FixtureDefinition>
    {
        public FixtureDefinitionController(IFixtureDefinitionStore store) : base(store, x => x.Skeleton) { }

        [HttpGet("{manufacturer}/{model}")]
        public Task<FixtureDefinition> Get(string manufacturer, string model)
        {
            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
            return base.Get(skeleton);
        }

        [HttpGet("{id}/download")]
        [SwaggerOperation("getFixtureDefinitionById")]
        public async Task<FixtureDefinition> Download(FixtureDefinitionSkeleton skeleton)
        {
            var definition = await Store.Get(skeleton);
            var filename = definition.Skeleton.Manufacturer + " " + definition.Skeleton.Manufacturer + ".json";
            Request?.HttpContext.Response.Headers.Add("Content-Disposition", "filename=" + filename);
            return definition;
        }

    }
}
