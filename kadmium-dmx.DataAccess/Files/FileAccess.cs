using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace kadmium_dmx_data
{
    internal static class FileAccess
    {
        private static readonly string HomeFolder = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
        internal static readonly string DataLocation = Path.Combine(HomeFolder, "kadmium-dmx/data");

        internal static async Task Save(JToken obj, FileInfo file, string schemaPath)
        {
            string schemaString = File.ReadAllText(schemaPath);
            Directory.CreateDirectory(Path.GetDirectoryName(file.FullName));
            using (var writer = file.Create())
            {
                var bytes = System.Text.Encoding.UTF8.GetBytes(obj.ToString());
                await writer.WriteAsync(bytes, 0, bytes.Length);
            }
        }

        internal static async Task<JToken> Load(string path, string schemaPath)
        {
            return await Task.Factory.StartNew(() =>
            {
                string jsonString = File.ReadAllText(path);
                JToken obj = JToken.Parse(jsonString);
                return obj;
            });
        }

        public static string GetRelativePath(string source, string destination)
        {
            var path = new Uri(source).MakeRelativeUri(new Uri(destination)).ToString();
            if (Path.GetDirectoryName(source) == Path.GetDirectoryName(destination))
            {
                path = "./" + path;
            }
            return path;
        }

        public static void CreateDataDirectory()
        {
            Directory.CreateDirectory(DataLocation);
        }
    }
}
