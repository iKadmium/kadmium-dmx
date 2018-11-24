using Microsoft.AspNetCore.Mvc;
using kadmium_dmx_core;
using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using System.Threading.Tasks;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    [Route("api/[controller]")]
    public class FixtureDefinitionController : CrudController<IFixtureDefinitionStore, FixtureDefinitionSkeleton, FixtureDefinition>
    {
        public FixtureDefinitionController(IFixtureDefinitionStore store) : base(store, x => x.Skeleton) { }

        [HttpGet("{manufacturer}/{model}")]
        [SwaggerOperation(OperationId = "GetFixtureDefinition")]
        public Task<FixtureDefinition> Get(string manufacturer, string model)
        {
            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
            return base.Get(skeleton);
        }

        [HttpGet("{manufacturer}/{model}/download")]
        [SwaggerOperation(OperationId = "DownloadFixtureDefinition")]
        public async Task<FixtureDefinition> Download(string manufacturer, string model)
        {
            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
            var definition = await Store.Get(skeleton);
            var filename = definition.Skeleton.Manufacturer + " " + definition.Skeleton.Manufacturer + ".json";
            Request?.HttpContext.Response.Headers.Add("Content-Disposition", "filename=" + filename);
            return definition;
        }

        [NonAction]
        public override Task<FixtureDefinition> Get(FixtureDefinitionSkeleton key)
        {
            return base.Get(key);
        }

        // GET: api/<controller>
        [HttpGet]
        [SwaggerOperation(OperationId = "GetFixtureDefinitions")]
        public override Task<IEnumerable<FixtureDefinitionSkeleton>> Get()
        {
            return base.Get();
        }

        // POST api/<controller>/5
        [HttpPost]
        [SwaggerOperation(OperationId = "PostFixtureDefinition")]
        public override Task Post([FromBody]FixtureDefinition value)
        {
            return base.Post(value);
        }

        [NonAction]
        public override Task Put(FixtureDefinitionSkeleton originalKey, [FromBody]FixtureDefinition value)
        {
            return base.Put(originalKey, value);
        }

        [NonAction]
        public override Task Delete(FixtureDefinitionSkeleton key)
        {
            return base.Delete(key);
        }

        // PUT api/<controller>/5
        [HttpPut("{manufacturer}/{model}")]
        [SwaggerOperation(OperationId = "PutFixtureDefinition")]
        public Task Put(string manufacturer, string model, [FromBody] FixtureDefinition value)
        {
            FixtureDefinitionSkeleton originalKey = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
            return base.Put(originalKey, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{manufacturer}/{model}")]
        [SwaggerOperation(OperationId = "DeleteFixtureDefinition")]
        public Task Delete(string manufacturer, string model)
        {
            FixtureDefinitionSkeleton originalKey = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
            return base.Delete(originalKey);
        }
    }
}
