using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Settings;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;

namespace kadmium_dmx_data
{
    public class FileSettingsStore : ISettingsStore
    {
        private static readonly string SettingsLocation = Path.Combine(FileAccess.DataLocation, "settings.json");
        private static readonly FileInfo SettingsFile = new FileInfo(SettingsLocation);
        private static readonly string SettingsSchema = Path.Combine(AppContext.BaseDirectory, "settings.schema.json");

        public FileSettingsStore()
        { }

        public async Task<Settings> GetSettings()
        {
            Console.WriteLine("Searching for settings in " + SettingsLocation);
            if (!File.Exists(SettingsLocation))
            {
                Console.WriteLine("Not found, using defaults");
                var settings = new Settings();
                await SaveSettings(settings);
                return settings;
            }
            else
            {
                Console.WriteLine("Settings found, loading");
                JObject obj = await FileAccess.Load(SettingsLocation, SettingsSchema) as JObject;
                var settings = obj.ToObject<Settings>();
                return settings;
            }
        }

        public async Task SaveSettings(ISettings settings)
        {
            var serializer = new JsonSerializer()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var settingsJson = JObject.FromObject(settings, serializer);
            await FileAccess.Save(settingsJson, SettingsFile, SettingsSchema);
        }
    }
}
