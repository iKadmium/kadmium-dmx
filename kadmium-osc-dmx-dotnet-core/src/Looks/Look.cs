using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Looks
{
    public class Look
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<AttributeLookSetting> AttributeLookSettings { get; set; }
        public List<ColorLookSetting> ColorLookSettings { get; set; }

        public Look()
        {
            AttributeLookSettings = new List<AttributeLookSetting>();
            ColorLookSettings = new List<ColorLookSetting>();
        }

        public void Activate(float amount)
        {
            foreach(var setting in AttributeLookSettings)
            {
                setting.Activate(amount);
            }
            foreach(var setting in ColorLookSettings)
            {
                setting.Activate(amount);
            }
        }

        public async Task Initialize(DatabaseContext context)
        {
            List<Task> tasks = new List<Task>();
            foreach (var setting in AttributeLookSettings)
            {
                tasks.Add(setting.Initialize(context));
            }
            foreach(var setting in ColorLookSettings)
            {
                tasks.Add(setting.Initialize(context));
            }
            await Task.WhenAll(tasks);
        }

        public static Look Deserialize(JObject obj)
        {
            JArray arr = obj["lookSettings"].Value<JArray>();
            Look look = new Look()
            {
                Id = obj["id"].Value<int>(),
                Name = obj["name"].Value<string>()
            };

            foreach(var settingJson in arr.Values<JObject>())
            {
                if(settingJson["attributeName"] != null)
                {
                    AttributeLookSetting setting = settingJson.ToObject<AttributeLookSetting>();
                    look.AttributeLookSettings.Add(setting);
                }
                else if(settingJson["color"] != null)
                {
                    ColorLookSetting setting = settingJson.ToObject<ColorLookSetting>();
                    look.ColorLookSettings.Add(setting);
                }
            }
            return look;
        }
    }
}