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

namespace kadmium_dmx.DataAccess.Json
{
    public class JsonSettingsStore : ISettingsStore
    {
        private static readonly string SettingsFilename = "settings.json";
        private IFileAccess FileAccess { get; }

        public JsonSettingsStore(IFileAccess fileAccess)
        {
            FileAccess = fileAccess;
        }

        public async Task<Settings> GetSettings()
        {
            string fullPath = FileAccess.GetFullPath(SettingsFilename);
            Console.WriteLine("Searching for settings in " + fullPath);
            if (!File.Exists(fullPath))
            {
                Console.WriteLine("Not found, using defaults");
                var settings = new Settings();
                await SaveSettings(settings);
                return settings;
            }
            else
            {
                Console.WriteLine("Settings found, loading");
                JObject obj = await FileAccess.Load(SettingsFilename) as JObject;
                var settings = obj.ToObject<Settings>();
                return settings;
            }
        }

        public async Task SaveSettings(Settings settings)
        {
            await FileAccess.Save(settings, SettingsFilename);
        }
    }
}
