using kadmium_osc_dmx_dotnet_core;
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
        [Fact]
        public async Task TestGet()
        {
            int id;
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();

                id = (await context.FixtureDefinitions.SingleAsync(x => x.Manufacturer == "Generic" && x.Model == "Chinese Moving Wash")).Id;
            }

            using (var context = DatabaseTests.GetContext())
            {
                FixtureDefinition definition = await new FixtureDefinitionController(context).Get(id);
                Assert.Equal("Generic", definition.Manufacturer);
                Assert.Equal("Chinese Moving Wash", definition.Model);
                Assert.Equal(FixtureType.LED, definition.Type);
                Assert.Equal(13, definition.Channels.Count);
                Assert.Contains(definition.Channels, x => x.Name == "PanCoarse" && x.Min == 0 && x.Max == 255 && x.Address == 1);
                Assert.Contains(definition.Channels, x => x.Name == "PanFine" && x.Min == 0 && x.Max == 255 && x.Address == 2);
                Assert.Contains(definition.Channels, x => x.Name == "TiltCoarse" && x.Min == 0 && x.Max == 255 && x.Address == 3);
                Assert.Contains(definition.Channels, x => x.Name == "TiltFine" && x.Min == 0 && x.Max == 255 && x.Address == 4);
                Assert.Contains(definition.Channels, x => x.Name == "MotorSpeed" && x.Min == 0 && x.Max == 255 && x.Address == 5);
                Assert.Contains(definition.Channels, x => x.Name == "Master" && x.Min == 0 && x.Max == 255 && x.Address == 6);
                Assert.Contains(definition.Channels, x => x.Name == "Strobe" && x.Min == 0 && x.Max == 255 && x.Address == 7);
                Assert.Contains(definition.Channels, x => x.Name == "ColorMacro" && x.Min == 0 && x.Max == 255 && x.Address == 8);
                Assert.Contains(definition.Channels, x => x.Name == "MacroSpeed" && x.Min == 0 && x.Max == 255 && x.Address == 9);
                Assert.Contains(definition.Channels, x => x.Name == "Red" && x.Min == 0 && x.Max == 255 && x.Address == 10);
                Assert.Contains(definition.Channels, x => x.Name == "Green" && x.Min == 0 && x.Max == 255 && x.Address == 11);
                Assert.Contains(definition.Channels, x => x.Name == "Blue" && x.Min == 0 && x.Max == 255 && x.Address == 12);
                Assert.Contains(definition.Channels, x => x.Name == "White" && x.Min == 0 && x.Max == 255 && x.Address == 13);
                Assert.Equal(2, definition.Movements.Count);
                Assert.Contains(definition.Movements, x => x.Name == "Pan" && x.Min == -270 && x.Max == 270);
                Assert.Contains(definition.Movements, x => x.Name == "Tilt" && x.Min == -135 && x.Max == 135);
            }
        }

        [Fact]
        public async Task TestPost()
        {
            int id;
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
            }

            FixtureDefinition expectedDefinition = GetRGBFixtureDefinition();
            using (var context = DatabaseTests.GetContext())
            {
                id = await new FixtureDefinitionController(context).Post(expectedDefinition);
            }

            using (var context = DatabaseTests.GetContext())
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
    }
}
