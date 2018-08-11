using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kadmium_dmx_data;
using kadmium_dmx_data.Storage;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_dmx_webapi.Controllers
{
    public abstract class CrudController<TStore, TKey, TItem> : Controller
        where TStore : IStore<TKey, TItem>
        where TKey : IEquatable<TKey>
    {
        protected TStore Store { get; set; }
        protected Func<TItem, TKey> KeyAccessor { get; set; }

        protected CrudController(TStore store, Func<TItem, TKey> keyAccessor)
        {
            Store = store;
            KeyAccessor = keyAccessor;
        }

        // GET: api/<controller>
        [HttpGet]
        public virtual async Task<IEnumerable<TKey>> Get()
        {
            var items = await Store.GetAll();
            return items.Select(x => KeyAccessor(x));
        }

        // GET api/<controller>/5
        [HttpGet("{key}")]
        public virtual Task<TItem> Get(TKey key)
        {
            return Store.Get(key);
        }

        // POST api/<controller>/5
        [HttpPost]
        public virtual async Task Post([FromBody]TItem value)
        {
            await Store.Add(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{originalKey}")]
        public virtual async Task Put(TKey originalKey, [FromBody]TItem value)
        {
            await Store.Update(originalKey, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{key}")]
        public virtual Task Delete(TKey key)
        {
            return Store.Remove(key);
        }
    }
}
