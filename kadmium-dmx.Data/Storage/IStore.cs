using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_dmx_data.Storage
{
    public interface IStore<TKey, TItem>
    {
        Task Add(TItem entity);
        Task Update(TKey id, TItem entity);

        Task<TItem> Get(TKey id);
        Task<IEnumerable<TItem>> GetAll();
        Task<IEnumerable<TKey>> GetKeys();

        Task Remove(TKey id);
        Task RemoveAll();
    }
}
