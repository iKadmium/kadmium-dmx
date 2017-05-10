using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test.Solvers
{
    public class HSBtoRGBWSolverTests
    {
        [Theory]
        [InlineData((0f / 360f), 1f, 1f, 255, 0, 0, 0)] //red
        [InlineData((120f / 360f), 1f, 1f, 0, 255, 0, 0)] //green
        [InlineData((240f / 360f), 1f, 1f, 0, 0, 255, 0)] //blue
        [InlineData((0f / 360f), 0f, 0f, 0, 0, 0, 0)] //black
        [InlineData((0f / 360f), 0f, 1f, 0, 0, 0, 255)] //white
        [InlineData((0f / 360f), 0.5f, 1f, 127, 0, 0, 127)] // pink (50% red)
        [InlineData((120f / 360f), 0.5f, 1f, 0, 127, 0, 127)] // light green (50% green)
        [InlineData((240f / 360f), 0.5f, 1f, 0, 0, 127, 127)] // light blue (50% blue)
        [InlineData((0f / 360f), 0f, 0.5f, 0, 0, 0, 128)] // 50% white
        public void TestHSBtoRGBW(float hue, float saturation, float brightness, byte expectedRed, byte expectedGreen, byte expectedBlue, byte expectedWhite)
        {
            Fixture fixture = GetRGBWFixture();
            fixture.Settables["Hue"].Value = hue;
            fixture.Settables["Saturation"].Value = saturation;
            fixture.Settables["Brightness"].Value = brightness;

            fixture.Update();

            var redChannel = fixture.FrameSettables["Red"] as DMXChannel;
            var greenChannel = fixture.FrameSettables["Green"] as DMXChannel;
            var blueChannel = fixture.FrameSettables["Blue"] as DMXChannel;
            var whiteChannel = fixture.FrameSettables["White"] as DMXChannel;

            Assert.Equal(expectedRed, redChannel.ByteValue);
            Assert.Equal(expectedGreen, greenChannel.ByteValue);
            Assert.Equal(expectedBlue, blueChannel.ByteValue);
            Assert.Equal(expectedWhite, whiteChannel.ByteValue);
        }

        [Fact]
        public void TestHSBtoRGBSolverApplied()
        {
            var fixture = GetRGBWFixture();
            Assert.Contains(fixture.Solvers, (x => x is HSBtoRGBWSolver));
        }

        public static Fixture GetRGBWFixture(JObject options = null)
        {
            var definition = new FixtureDefinition();
            definition.Channels.Add(new DMXChannel("Red", definition.Channels.Count + 1));
            definition.Channels.Add(new DMXChannel("Green", definition.Channels.Count + 1));
            definition.Channels.Add(new DMXChannel("Blue", definition.Channels.Count + 1));
            definition.Channels.Add(new DMXChannel("White", definition.Channels.Count + 1));
            var fixture = new Fixture(1, options ?? new JObject());
            fixture.Initialize(definition, GroupTests.GetGroup());
            return fixture;
        }

    }
}
