using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
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
    }
}
