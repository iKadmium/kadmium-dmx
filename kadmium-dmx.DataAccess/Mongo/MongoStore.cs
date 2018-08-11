using kadmium_dmx_data.Storage;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_dmx_data.Mongo
{
    public abstract class MongoStore<TKey, TItem> : IStore<TKey, TItem> where TKey  : IEquatable<TKey>
    {
        protected IMongoCollection<TItem> Collection { get; set; }
        protected Func<TItem, TKey> KeyAccessor { get; set; }

        public MongoStore(IMongoDatabase database, Func<TItem, TKey> keyAccessor)
        {
            Collection = database.GetCollection<TItem>(typeof(TItem).Name);
            KeyAccessor = keyAccessor;
        }

        public async Task Add(TItem entity)
        {
            await Collection.InsertOneAsync(entity);
        }

        public async Task<TItem> Get(TKey id)
        {
            var results = await Collection.FindAsync(x => KeyAccessor(x).Equals(id));
            return await results.SingleAsync();
        }

        public async Task<IEnumerable<TItem>> GetAll()
        {
            var results = await Collection.FindAsync(x => true);
            return results.ToEnumerable();
        }

        public async Task<IEnumerable<TKey>> GetKeys()
        {
            var items = await GetAll();
            return items.Select(item => KeyAccessor(item));
        }

        public async Task Update(TKey id, TItem entity)
        {
            await Collection.FindOneAndReplaceAsync(x => KeyAccessor(x).Equals(id), entity);
        }

        public async Task Remove(TKey id)
        {
            await Collection.FindOneAndDeleteAsync(item => KeyAccessor(item).Equals(id));
        }

        public async Task RemoveAll()
        {
            await Collection.DeleteManyAsync(x => true);
        }

        
    }
}
