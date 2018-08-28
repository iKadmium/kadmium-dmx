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
    public abstract class CrudController<TStore, TKey, TItem, TConcrete> : Controller
        where TStore : IStore<TKey, TItem>
        where TKey : IEquatable<TKey>
        where TConcrete : TItem
    {
        protected TStore Store { get; set; }
        protected Func<TItem, TKey> KeyAccessor { get; set; }

        protected CrudController(TStore store, Func<TItem, TKey> keyAccessor)
        {
            Store = store;
            KeyAccessor = keyAccessor;
        }

        public virtual async Task<IEnumerable<TKey>> Get()
        {
            var items = await Store.GetAll();
            return items.Select(x => KeyAccessor(x));
        }

        public virtual Task<TItem> Get(TKey key)
        {
            return Store.Get(key);
        }

        public virtual async Task Post([FromBody]TConcrete value)
        {
            await Store.Add(value);
        }

        public virtual async Task Put(TKey originalKey, [FromBody]TConcrete value)
        {
            await Store.Update(originalKey, value);
        }

        public virtual Task Delete(TKey key)
        {
            return Store.Remove(key);
        }
    }
}
