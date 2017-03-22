using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class FixtureDefinitionTests
    {


        public static FixtureDefinition GetMovingFixtureDefinition(string axisName, int min, int max)
        {
            FixtureDefinition definition = new FixtureDefinition();
            definition.Channels.Add(new DMXChannel(axisName, definition.Channels.Count + 1));
            definition.Movements.Add(new MovementAxis(axisName, min, max));
            definition.Model = "Moving Fixture";
            definition.Manufacturer = "Generic";
            return definition;
        }

        public static FixtureDefinition GetRGBFixtureDefinition()
        {
            var definition = new FixtureDefinition()
            {
                Manufacturer = "Generic",
                Model = "RGB Fixture"
            };
            definition.Channels.Add(new DMXChannel("Red", definition.Channels.Count + 1));
            definition.Channels.Add(new DMXChannel("Green", definition.Channels.Count + 1));
            definition.Channels.Add(new DMXChannel("Blue", definition.Channels.Count + 1));
            return definition;
        }

        public static async Task<IEnumerable<string>> GetFixtureDefinitionJSONPaths()
        {
            string dataPath = Path.Combine(AppContext.BaseDirectory, "data", "fixtures");
            var result = await Task.Factory.StartNew(() =>
            {
                List<string> paths = new List<string>();
                foreach (var folder in Directory.GetDirectories(dataPath))
                {
                    foreach (var file in Directory.GetFiles(folder, "*.json"))
                    {
                        paths.Add(file);
                    }
                }
                return paths;
            });
            
            return result;
        }

        public static async Task<IEnumerable<FixtureDefinition>> GetDeserializedJSONFixtures()
        {
            List<FixtureDefinition> definitions = new List<FixtureDefinition>();
            foreach(var path in await GetFixtureDefinitionJSONPaths())
            {
                FixtureDefinition definition = await Task.Factory.StartNew(() =>
                {
                    string contents = File.ReadAllText(path);
                    FixtureDefinition def = JsonConvert.DeserializeObject<FixtureDefinition>(contents);
                    return def;
                });
                definitions.Add(definition);
            }
            return definitions;
        }
    }
}
