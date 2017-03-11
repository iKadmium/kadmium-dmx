using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class FixtureDefinitionTests
    {
        [Fact]
        public static async void TestSerialization()
        {
            foreach (var fixtureDefinitionPair in FileAccess.GetAllFixtures())
            {
                var sourceDefinitionJson = await FileAccess.LoadFixtureDefinition(fixtureDefinitionPair.Item1, fixtureDefinitionPair.Item2);
                var definition = FixtureDefinition.Load(sourceDefinitionJson);
                var destinationDefinitionJson = definition.Serialize();

                Assert.Equal(sourceDefinitionJson.ToString(), destinationDefinitionJson.ToString());
            }
        }

        public static FixtureDefinition GetMovingFixtureDefinition(string axisName, int min, int max)
        {
            FixtureDefinition definition = new FixtureDefinition();
            definition.Channels.Add(new DMXChannel(axisName, definition.Channels.Count + 1));
            definition.Movements.Add(new MovementAxis(axisName, min, max));
            definition.Model = "Moving Fixture";
            definition.Manufacturer = "Generic";
            return definition;
        }
    }
}
