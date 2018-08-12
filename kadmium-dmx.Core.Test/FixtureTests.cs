using kadmium_dmx_core;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;
using Xunit;

namespace kadmium_dmx_test
{
    public class FixtureTests
    {
        [Theory]
        [InlineData(0f, 1f, 191)]
        [InlineData(1f, 1f, 255)]
        [InlineData(0.5f, 1f, 224)]
        public void SharedMasterAndStrobeTest(float strobeValue, float masterValue, byte expected)
        {
            Fixture fixture = GetSharedMasterAndStrobeFixture();
            fixture.Settables["Strobe"].Value = strobeValue;
            fixture.Settables["Master"].Value = masterValue;
            fixture.Update();

            byte[] dmx = new byte[512];
            fixture.Render(dmx);
            Assert.Equal(expected, dmx[0]);
        }
        
        public static Fixture GetSharedMasterAndStrobeFixture()
        {
            FixtureDefinition definition = FixtureDefinitionTests.GetSharedMasterAndStrobeFixture();
            Fixture fixture = GetFixture(1, definition);
            return fixture;
        }

        public static Fixture GetMovingFixture(string axisName, int axisMin, int axisMax, FixtureOptions options = null)
        {
            FixtureDefinition definition = FixtureDefinitionTests.GetMovingFixtureDefinition(axisName, axisMin, axisMax);
            FixtureDefinitionTests.GetMovingFixtureDefinition(axisName, axisMin, axisMax);
            Group group = GroupTests.GetGroup();
            Fixture fixture = GetFixture(1, definition, options);
            return fixture;
        }

        public static Fixture GetFireFixture(bool fireHeightChannel = false)
        {
            FixtureDefinition definition = FixtureDefinitionTests.GetFireFixtureDefinition(fireHeightChannel);
            Group group = GroupTests.GetGroup();
            Fixture fixture = GetFixture(1, definition, null);
            return fixture;
        }

        public static Fixture GetFixture(ushort address, IFixtureDefinition definition, FixtureOptions options = null)
        {
            IFixtureData data = new FixtureData
            {
                Address = address,
                Options = options ?? new FixtureOptions()
            };
            Fixture fixture = new Fixture(data, definition);

            return fixture;
        }
    }
}
