using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using Xunit;

namespace kadmium_dmx_test.Solvers.Solvers
{
    public class PanTilt16BitSolverTests
    {
        [Fact]
        private void TestDefaultSolverAddition()
        {
            Fixture fixture = Get16BitMovingFixture("Pan");
            Assert.Contains(fixture.Solvers, (x => x is PanTilt16BitSolver));
        }

        [Theory]
        [InlineData(0.0f, 0, 0)]
        [InlineData(1.0f, 255, 255)]
        [InlineData((1f / byte.MaxValue), 1, 0)]
        [InlineData((1f / UInt16.MaxValue), 0, 1)]
        [InlineData((100f / UInt16.MaxValue), 0, 100)]
        [InlineData((25.0 / 256f) + (10.0 / UInt16.MaxValue), 25, 10)]
        [InlineData((125.0 / 256f) + (39.0 / UInt16.MaxValue), 125, 39)]
        private void Test16BitConversion(float value, byte expectedMSB, byte expectedLSB)
        {
            Fixture fixture = Get16BitMovingFixture("Pan");
            fixture.Settables["Pan"].Value = value;
            fixture.Update();
            var panCoarse = fixture.FrameSettables["PanCoarse"] as DMXChannel;
            var panFine = fixture.FrameSettables["PanFine"] as DMXChannel;

            Assert.Equal(expectedMSB, panCoarse.ByteValue);
            Assert.InRange(panFine.ByteValue, expectedLSB - 1, expectedLSB + 1);
        }

        public static Fixture Get16BitMovingFixture(params string[] axis)
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
                channels.Add(new DMXChannelData {
                    Name = axisName + "Fine",
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
