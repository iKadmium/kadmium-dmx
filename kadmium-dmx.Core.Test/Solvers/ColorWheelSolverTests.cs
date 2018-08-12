using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using Xunit;

namespace kadmium_dmx_test.Solvers
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
        [InlineData(0f, 0f, 0.5f, 192, 255, 128)] //grey
        public void TestPrimaryColors(float hue, float saturation, float brightness, byte expectedColorWheelStart,
            byte expectedColorWheelEnd, byte expectedMaster)
        {
            var fixture = GetColorWheelFixture(GetDefaultColorWheel());
            fixture.Settables["Hue"].Value = hue;
            fixture.Settables["Saturation"].Value = saturation;
            fixture.Settables["Brightness"].Value = brightness;
            fixture.Update();
            var colorWheelChannel = fixture.FrameSettables["ColorWheel"] as DMXChannel;
            Assert.InRange(colorWheelChannel.ByteValue, expectedColorWheelStart, expectedColorWheelEnd);
            var masterChannel = fixture.FrameSettables["Master"] as DMXChannel;
            Assert.Equal(masterChannel.ByteValue, expectedMaster);
        }

        public List<IColorWheelEntryData> GetDefaultColorWheel()
        {
            var entries = new List<IColorWheelEntryData>
            {
                new ColorWheelEntryData
                {
                    Name = "Red",
                    Min = 0,
                    Max = 63,
                    Color = "#FF0000"
                },
                new ColorWheelEntryData
                {
                    Name = "Green",
                    Min = 64,
                    Max = 127,
                    Color = "#00FF00"
                },
                new ColorWheelEntryData
                {
                    Name = "Blue",
                    Min = 128,
                    Max = 191,
                    Color = "#0000FF"
                },
                new ColorWheelEntryData
                {
                    Name = "White",
                    Min = 192,
                    Max = 255,
                    Color = "#FFFFFF"
                }
            };

            return entries;
        }

        public static Fixture GetColorWheelFixture(List<IColorWheelEntryData> colors)
        {
            IFixtureDefinition definition = new FixtureDefinition()
            {
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData
                    {
                        Name = "ColorWheel",
                        Address = 1
                    },
                    new DMXChannelData
                    {
                        Name = "Master",
                        Address = 2
                    }
                },
                ColorWheel = colors,
                Movements = new List<IMovementAxisData>()
            };
            IFixtureData data = new FixtureData
            {
                Address = 1,
                Options = new FixtureOptions()
            };
            Fixture fixture = new Fixture(data, definition);
            return fixture;
        }
    }
}
