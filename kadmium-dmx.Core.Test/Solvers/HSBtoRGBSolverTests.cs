using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;
using Xunit;

namespace kadmium_dmx.Core.Test.Solvers
{
    public class HSBtoRGBSolverTests
    {
        [Theory]
        [InlineData((0f / 360f), 1f, 1f, 255, 0, 0)] //red
        [InlineData((120f / 360f), 1f, 1f, 0, 255, 0)] //green
        [InlineData((240f / 360f), 1f, 1f, 0, 0, 255)] //blue
        [InlineData((0f / 360f), 1f, 0f, 0, 0, 0)] //black
        [InlineData((60f / 360f), 1f, 1f, 255, 255, 0)] //yellow
        [InlineData((0f / 360f), 0f, 1f, 255, 255, 255)] //white
        public void TestHSBtoRGB(float hue, float saturation, float brightness, byte expectedRed, byte expectedGreen, byte expectedBlue)
        {
            Fixture fixture = GetRGBFixture();
            fixture.Settables["Hue"].Value = hue;
            fixture.Settables["Saturation"].Value = saturation;
            fixture.Settables["Brightness"].Value = brightness;

            fixture.Update();

            var redChannel = fixture.FrameSettables["Red"] as DMXChannel;
            var greenChannel = fixture.FrameSettables["Green"] as DMXChannel;
            var blueChannel = fixture.FrameSettables["Blue"] as DMXChannel;

            Assert.Equal(expectedRed, redChannel.ByteValue);
            Assert.Equal(expectedGreen, greenChannel.ByteValue);
            Assert.Equal(expectedBlue, blueChannel.ByteValue);
        }

        [Fact]
        public void TestHSBtoRGBSolverApplied()
        {
            var fixture = GetRGBFixture();
            Assert.Contains(fixture.Solvers, (x => x is HSBtoRGBSolver));
        }

        public static Fixture GetRGBFixture(FixtureOptions options = null, bool addDefaultSolvers = true)
        {
            var data = new FixtureData
            {
                Address = 1,
                Options = options ?? new FixtureOptions()
            };
            var definition = FixtureDefinitionTests.GetRGBFixtureDefinition();
            var fixture = new Fixture(data, definition, addDefaultSolvers);
            return fixture;
        }

    }
}
