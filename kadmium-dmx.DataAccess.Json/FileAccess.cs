using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Newtonsoft.Json.Serialization;

namespace kadmium_dmx.DataAccess.Json
{
    public class FileAccess : IFileAccess
    {
        private static readonly string HomeFolder = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
        private string DataFolder { get; }

        public FileAccess(string dataFolder)
        {
            DataFolder = dataFolder;
        }

        public string GetFullPath(string path)
        {
            return Path.Combine(HomeFolder, DataFolder, path);
        }

        public async Task Save<T>(T obj, string path)
        {
            var serializer = new JsonSerializer()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var json = JObject.FromObject(obj, serializer);
            FileInfo file = new FileInfo(GetFullPath(path));
            Directory.CreateDirectory(Path.GetDirectoryName(file.FullName));
            using (var writer = file.Create())
            {
                var bytes = System.Text.Encoding.UTF8.GetBytes(json.ToString());
                await writer.WriteAsync(bytes, 0, bytes.Length);
            }
        }

        public async Task<JToken> Load(string path)
        {
            string fullPath = GetFullPath(path);
            return await Task.Factory.StartNew(() =>
            {
                string jsonString = File.ReadAllText(fullPath);
                JToken obj = JToken.Parse(jsonString);
                return obj;
            });
        }

        public async Task<IEnumerable<string>> List(string path)
        {
            string fullPath = GetFullPath(path);
            return await Task.Factory.StartNew(() =>
            {
                if(!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }
                return Directory.EnumerateFiles(fullPath, "*.json", SearchOption.AllDirectories);
            });
        }

        public async Task Delete(string path)
        {
            string fullPath = GetFullPath(path);
            await Task.Factory.StartNew(() =>
            {
                File.Delete(fullPath);
            });
        }

        public async Task<bool> Exists(string path)
        {
            string fullPath = GetFullPath(path);
            return await Task.Factory.StartNew(() =>
            {
                return File.Exists(fullPath);
            });
        }

        public async Task Move(string oldPath, string newPath)
        {
            string fullPath = GetFullPath(newPath);
            await Task.Factory.StartNew(() =>
            {
                File.Move(oldPath, fullPath);
            });
        }
    }
}
