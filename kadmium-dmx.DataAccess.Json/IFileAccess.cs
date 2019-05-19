using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx.DataAccess.Json
{
    public interface IFileAccess
    {
        Task<JToken> Load(string path);
        Task Save<T>(T obj, string path);
        Task<IEnumerable<string>> List(string path);
        Task Delete(string path);
        string GetFullPath(string path);
        Task<bool> Exists(string path);
    }
}