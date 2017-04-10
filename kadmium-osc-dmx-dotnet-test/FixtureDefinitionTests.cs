using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_webui.Controllers;
using Microsoft.EntityFrameworkCore;
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
        [InlineData("Generic", "Chinese Moving Wash")]
        [Theory]
        public async Task TestGet(string manufacturer, string model)
        {
            int id;
            FixtureDefinition realDefinition = await GetDeserializedJSONFixture(manufacturer, model);
            string testName = GetType() + nameof(TestGet);
            using (var context = DatabaseTests.GetContext(testName))
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();

                id = (await context.FixtureDefinitions.SingleAsync(x => x.Manufacturer == manufacturer && x.Model == model)).Id;
            }

            using (var context = DatabaseTests.GetContext(testName))
            {
                FixtureDefinition retrievedDefinition = await new FixtureDefinitionController(context).Get(id);
                Assert.Equal(realDefinition, retrievedDefinition);
            }
        }

        [Fact]
        public async Task TestPost()
        {
            int id;
            string testName = GetType() + nameof(TestPost);
            using (var context = DatabaseTests.GetContext(testName))
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
            }

            FixtureDefinition expectedDefinition = GetRGBFixtureDefinition();
            using (var context = DatabaseTests.GetContext(testName))
            {
                id = await new FixtureDefinitionController(context).Post(expectedDefinition);
            }

            using (var context = DatabaseTests.GetContext(testName))
            {
                FixtureDefinition definition = await context.LoadFixtureDefinition(id);
                Assert.Equal(definition, expectedDefinition);
            }
        }

        public static FixtureDefinition GetMovingFixtureDefinition(string axisName, int min, int max)
        {
            FixtureDefinition definition = new FixtureDefinition()
            {
                Model = "Moving Fixture",
                Manufacturer = "Generic"
            };
            definition.Channels.Add(new DMXChannel(axisName, definition.Channels.Count + 1));
            definition.Movements.Add(new MovementAxis(axisName, min, max));

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
            var result = await DatabaseTests.GetDeserializedJSONFiles<FixtureDefinition>("fixtures");
            return result;
        }

        public static async Task<FixtureDefinition> GetDeserializedJSONFixture(string manufacturer, string model)
        {
            string dataPath = Path.Combine(AppContext.BaseDirectory, "data", "fixtures", manufacturer, model + ".json");
            FixtureDefinition definition = await Task.Factory.StartNew(() =>
            {
                string content = File.ReadAllText(dataPath);
                FixtureDefinition def = JsonConvert.DeserializeObject<FixtureDefinition>(content);
                return def;
            });
            return definition;
        }
    }
}
