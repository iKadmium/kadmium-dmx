using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core.Looks;
using kadmium_osc_dmx_dotnet_core;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    [Route("api/[controller]")]
    public class LookController : Controller
    {
        private DatabaseContext _context;

        public LookController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Look>> Get()
        {
            return await _context.Looks.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Look> Get(int id)
        {
            var look = await _context.LoadLook(id);
            return look;
        }

        // POST api/values
        [HttpPost]
        public async Task Post([FromBody]Look look)
        {
            await look.Initialize(_context);
            await _context.Looks.AddAsync(look);
            await _context.SaveChangesAsync();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody]Look look)
        {
            await look.Initialize(_context);
            _context.Update(look);
            await _context.SaveChangesAsync();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            var look = await _context.LoadLook(id);
            _context.Looks.Remove(look);
            await _context.SaveChangesAsync();
        }

        [HttpGet("[action]/{id}/{amount}")]
        public async Task Activate(int id, float amount)
        {
            var look = await _context.LoadLook(id);
            look.Activate(amount);
        }

        [HttpPost("[action]/{amount}")]
        public async Task Activate([FromBody]Look look, float amount)
        {
            await look.Initialize(_context);
            look.Activate(amount);
        }
    }
}
