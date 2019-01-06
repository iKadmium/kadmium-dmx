using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace kadmium_dmx.Core.Test.Solvers
{
    public class PanTilt8BitSolverTests
    {
        [Fact]
        private void TestDefaultSolverAddition()
        {
            Fixture fixture = Get8BitMovingFixture("Pan");
            Assert.Contains(fixture.Solvers, (x => x is PanTilt8BitSolver));
        }

        [Theory]
        [InlineData(0.0f, 0)]
        [InlineData(1.0f, 255)]
        [InlineData((1f / byte.MaxValue), 1)]
        [InlineData((1f / UInt16.MaxValue), 0)]
        [InlineData((100f / UInt16.MaxValue), 0)]
        [InlineData((25.0 / 256f) + (10.0 / UInt16.MaxValue), 25)]
        [InlineData((125.0 / 256f) + (39.0 / UInt16.MaxValue), 125)]
        private void Test8BitConversion(float value, byte expectedMSB)
        {
            Fixture fixture = Get8BitMovingFixture("Pan");
            fixture.Settables["Pan"].Value = value;
            fixture.Update();
            var panCoarse = fixture.FrameSettables["PanCoarse"] as DMXChannel;

            Assert.Equal(expectedMSB, panCoarse.ByteValue);
        }

        public static Fixture Get8BitMovingFixture(params string[] axis)
        {
            var movements = new List<IMovementAxisData>();
            var channels = new List<IDMXChannelData>();

            foreach (string axisName in axis)
            {
                movements.Add(new MovementAxisData
                {
                    Name = axisName,
                    Min = -90,
                    Max = 90
                });
                channels.Add(new DMXChannelData
                {
                    Name = axisName + "Coarse",
                    Address = (ushort)(channels.Count + 1)
                });
            }

            var definition = new FixtureDefinition
            {
                Movements = movements,
                Channels = channels,
                ColorWheel = new List<IColorWheelEntryData>()
            };
            var data = new FixtureData() { Options = new FixtureOptions() };
            Fixture fixture = new Fixture(data, definition);
            return fixture;
        }
    }
}
