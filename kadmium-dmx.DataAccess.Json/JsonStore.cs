using kadmium_dmx_data.Storage;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx.DataAccess.Json
{
    public abstract class JsonStore<TKey, TItem> : IStore<TKey, TItem> where TKey : class
    {
        protected Func<TItem, TKey> ItemKeyAccessor { get; }
        protected Func<TKey, string> KeyPathAccessor { get; }
        protected Func<string, TKey> PathKeyAccessor { get; }
        protected IFileAccess FileAccess { get; }
        protected string Directory { get; }

        public JsonStore(IFileAccess fileAccess, Func<TItem, TKey> keyAccessor, string subDirecory) : 
            this(fileAccess, 
                keyAccessor, 
                (key) => key + ".json",
                (path) => (Path.GetFileNameWithoutExtension(path) as TKey),
                subDirecory)
        {
        }

        public JsonStore(IFileAccess fileAccess, Func<TItem, TKey> itemKeyAccessor, Func<TKey, string> keyPathAccessor, Func<string, TKey> pathKeyAccessor, string path)
        {
            FileAccess = fileAccess;
            ItemKeyAccessor = itemKeyAccessor;
            KeyPathAccessor = keyPathAccessor;
            PathKeyAccessor = pathKeyAccessor;
            Directory = path;
        }

        public async Task Add(TItem entity)
        {
            string filename = KeyPathAccessor(ItemKeyAccessor(entity));
            string path = GetPath(filename);
            JToken token = JToken.FromObject(entity);
            await FileAccess.Save(token, path);
        }

        public async Task Update(TKey id, TItem entity)
        {
            await Remove(id);
            await Add(entity);
        }

        public async Task<TItem> Get(TKey id)
        {
            string filename = KeyPathAccessor(id);
            string path = GetPath(filename);
            JToken token = await FileAccess.Load(path);
            return token.ToObject<TItem>();
        }

        public async Task<IEnumerable<TKey>> List()
        {
            var files = await FileAccess.List(Directory);
            return files.Select(x => PathKeyAccessor(x));
        }

        public async Task<IEnumerable<TItem>> GetAll()
        {
            var ids = await List();
            List<TItem> items = new List<TItem>();
            foreach(var id in ids)
            {
                items.Add(await Get(id));
            }
            return items;
        }

        public async Task Remove(TKey id)
        {
            string filename = KeyPathAccessor(id);
            string path = GetPath(filename);
            await FileAccess.Delete(path);
        }

        public async Task RemoveAll()
        {
            var ids = await List();
            foreach (var id in ids)
            {
                await Remove(id);
            }
        }

        private string GetPath(string filename)
        {
            return Path.Combine(Directory, filename);
        }
    }
}
