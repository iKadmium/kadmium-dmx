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
        private string KeyName { get; }

        public MongoStore(IMongoDatabase database, string keyName)
        {
            Collection = database.GetCollection<TItem>(typeof(TItem).Name);
            KeyName = keyName;
        }

        public async Task Add(TItem entity)
        {
            await Collection.InsertOneAsync(entity);
        }

        public async Task<TItem> Get(TKey id)
        {
            var filter = Builders<TItem>.Filter.Eq(KeyName, id);
            var results = await Collection.FindAsync(filter);
            return await results.SingleAsync();
        }

        public async Task<IEnumerable<TItem>> GetAll()
        {
            var results = await Collection.FindAsync(x => true);
            return results.ToEnumerable();
        }

        public async Task Update(TKey id, TItem entity)
        {
            var filter = Builders<TItem>.Filter.Eq(KeyName, id);
            await Collection.FindOneAndReplaceAsync(filter, entity);
        }

        public async Task Remove(TKey id)
        {
            var filter = Builders<TItem>.Filter.Eq(KeyName, id);
            await Collection.FindOneAndDeleteAsync(filter);
        }

        public async Task RemoveAll()
        {
            await Collection.DeleteManyAsync(x => true);
        }

        
    }
}
