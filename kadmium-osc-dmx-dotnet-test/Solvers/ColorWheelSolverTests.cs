using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Collections.Generic;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test.Solvers
{
    public class ColorWheelSolverTests
    {
        [Fact]
        public void TestDefaultSolverAddition()
        {
            var fixture = GetColorWheelFixture(GetDefaultColorWheel());
            Assert.Contains<FixtureSolver>(fixture.Solvers, (x => x is HSBtoColorWheelSolver));
        }

        [Theory]
        [InlineData(0f, 1f, 1f, 0, 63, 255)] //red
        [InlineData(120f / 360f, 1f, 1f, 64, 127, 255)] //green
        [InlineData(240f / 360f, 1f, 1f, 128, 191, 255)] //blue
        [InlineData(0f, 0f, 1f, 192, 255, 255)] //white
        [InlineData(120f / 360f, 0f, 1f, 192, 255, 255)] //white
        [InlineData(240f / 360f, 0f, 1f, 192, 255, 255)] //white
        [InlineData(0f, 0f, 0.5f, 192, 255, 127)] //grey
        public void TestPrimaryColors(float hue, float saturation, float brightness, byte expectedColorWheelStart,
            byte expectedColorWheelEnd, byte expectedMaster)
        {
            var fixture = GetColorWheelFixture(GetDefaultColorWheel());
            fixture.Settables["Hue"].Value = hue;
            fixture.Settables["Saturation"].Value = saturation;
            fixture.Settables["Brightness"].Value = brightness;
            fixture.Update();
            var colorWheelChannel = fixture.Settables["ColorWheel"] as DMXChannel;
            Assert.InRange(colorWheelChannel.ByteValue, expectedColorWheelStart, expectedColorWheelEnd);
            var masterChannel = fixture.Settables["Master"] as DMXChannel;
            Assert.Equal(masterChannel.ByteValue, expectedMaster);
        }

        public IEnumerable<ColorWheelEntry> GetDefaultColorWheel()
        {
            ColorWheelEntry red = new ColorWheelEntry("Red", 0, 63, new kadmium_osc_dmx_dotnet_core.Color.RGB(255, 0, 0));
            ColorWheelEntry green = new ColorWheelEntry("Green", 64, 127, new kadmium_osc_dmx_dotnet_core.Color.RGB(0, 255, 0));
            ColorWheelEntry blue = new ColorWheelEntry("Blue", 128, 191, new kadmium_osc_dmx_dotnet_core.Color.RGB(0, 0, 255));
            ColorWheelEntry white = new ColorWheelEntry("White", 192, 255, new kadmium_osc_dmx_dotnet_core.Color.RGB(255, 255, 255));

            return new[] { red, green, blue, white };
        }

        public static Fixture GetColorWheelFixture(IEnumerable<ColorWheelEntry> colors)
        {
            FixtureDefinition definition = new FixtureDefinition();
            definition.Channels.Add(new DMXChannel("ColorWheel", definition.Channels.Count + 1));
            definition.Channels.Add(new DMXChannel("Master", definition.Channels.Count + 1));
            definition.ColorWheel.AddRange(colors);
            Fixture fixture = new Fixture(definition, 1, GroupTests.GetGroup(), new Newtonsoft.Json.Linq.JObject());
            fixture.Initialize();
            return fixture;
        }
    }
}
