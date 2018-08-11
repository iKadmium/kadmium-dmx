using kadmium_dmx_core;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_webapi.Controllers;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_dmx_webapi_test.Controllers.Integration
{
    public class FixtureDefinitionTests
    {
        //[Fact]
        //public async Task TestGet()
        //{
        //    int id = 1;

        //    var definition = Mock.Of<FixtureDefinition>(def => 
        //        def.Id == id &&
        //        def.Manufacturer == "Someone" &&
        //        def.Model == "Something"
        //    );

        //    var context = Mock.Of<IDatabaseContext>(ctx =>
        //        ctx.LoadFixtureDefinition(id) == Task.FromResult(definition)
        //    );
            
        //    FixtureDefinition retrievedDefinition = await new FixtureDefinitionController(context).Get(id);
        //    Assert.Equal(definition, retrievedDefinition);
        //}

        //[Fact]
        //public async Task TestPost()
        //{
        //    var definition = Mock.Of<FixtureDefinition>(def =>
        //        def.Manufacturer == "Someone" &&
        //        def.Model == "Something"
        //    );

        //    var context = Mock.Of<IDatabaseContext>(ctx =>
        //        ctx.FixtureDefinitions == Mock.Of<DbSet<FixtureDefinition>>()
        //    );

        //    Mock.Get(context.FixtureDefinitions)
        //        .Setup(x => x.FixtureDefinitions)
                

        //    int id = await new FixtureDefinitionController(context).Post(definition);
        //    Assert.Equal(definition, retrievedDefinition);
        //}

        //[Theory]
        //[InlineData("Strobe", "UV")]
        //public async Task TestChannels(string channelToRemoveName, string channelToAddName)
        //{
        //    string testName = GetType() + nameof(TestPost);
        //    FixtureDefinition originalDefinition, updatedDefinition;
        //    using (var context = DatabaseTests.GetContext(testName))
        //    {
        //        await DatabaseTests.ResetDatabase(context);
        //        await DatabaseTests.AddGroups(context);
        //        await DatabaseTests.AddFixtureDefinitions(context);
        //        await context.SaveChangesAsync();
        //        int originalDefinitionId = (await context.FixtureDefinitions.FirstAsync(x => x.Manufacturer == "Generic" && x.Model.Contains("RGBW"))).Id;
        //        originalDefinition = await context.LoadFixtureDefinition(originalDefinitionId);
        //    }

        //    DMXChannel channelToRemove = originalDefinition.Channels.First(x => x.Name == channelToRemoveName);
        //    originalDefinition.Channels.Remove(channelToRemove);
        //    originalDefinition.Channels.Add(new DMXChannel(channelToAddName, channelToRemove.Address));

        //    using (var context = DatabaseTests.GetContext(testName))
        //    {
        //        FixtureDefinitionController controller = new FixtureDefinitionController(context);
        //        await controller.Put(originalDefinition.Id, originalDefinition);
        //        updatedDefinition = await controller.Get(originalDefinition.Id);

        //        Assert.Equal(originalDefinition.Channels.Count, updatedDefinition.Channels.Count);

        //        foreach(DMXChannel originalChannel in originalDefinition.Channels)
        //        {
        //            Assert.Contains(updatedDefinition.Channels, channel => originalChannel.Equals(channel));
        //        }
        //    }
        //}



        //public static async Task<IEnumerable<string>> GetFixtureDefinitionJSONPaths()
        //{
        //    string dataPath = Path.Combine(AppContext.BaseDirectory, "data", "fixtures");
        //    var result = await Task.Factory.StartNew(() =>
        //    {
        //        List<string> paths = new List<string>();
        //        foreach (var folder in Directory.GetDirectories(dataPath))
        //        {
        //            foreach (var file in Directory.GetFiles(folder, "*.json"))
        //            {
        //                paths.Add(file);
        //            }
        //        }
        //        return paths;
        //    });

        //    return result;
        //}

        //public static async Task<IEnumerable<FixtureDefinition>> GetDeserializedJSONFixtures()
        //{
        //    var result = await DatabaseTests.GetDeserializedJSONFiles<FixtureDefinition>("fixtures");
        //    return result;
        //}

        //public static async Task<FixtureDefinition> GetDeserializedJSONFixture(string manufacturer, string model)
        //{
        //    string dataPath = Path.Combine(AppContext.BaseDirectory, "data", "fixtures", manufacturer, model + ".json");
        //    FixtureDefinition definition = await Task.Factory.StartNew(() =>
        //    {
        //        string content = File.ReadAllText(dataPath);
        //        FixtureDefinition def = JsonConvert.DeserializeObject<FixtureDefinition>(content);
        //        return def;
        //    });
        //    return definition;
        //}
    }
}
