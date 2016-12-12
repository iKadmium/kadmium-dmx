using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class FixtureTests
    {
        [Theory]
        [InlineData(0f, 1f, 191)]
        [InlineData(1f, 1f, 255)]
        [InlineData(0.5f, 1f, 223)]
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

        [Fact]
        public void TestAllIncludedFixtures()
        {
            MasterController.Initialise();
            foreach (string manufacturer in FileAccess.GetFixtureManufacturers())
            {
                foreach (string fixtureName in FileAccess.GetFixtureNames(manufacturer))
                {
                    JObject definitionJSON = FileAccess.LoadFixtureDefinition(manufacturer, fixtureName);
                    Definition definition = Definition.Load(definitionJSON);
                    Fixture fixture = new Fixture(definition, 1, new Group(), new JObject());
                }
            }
        }

        public static Fixture GetSharedMasterAndStrobeFixture()
        {
            Definition definition = new Definition();
            definition.Channels.Add(new DMXChannel("Master", 1, 0, 191));
            definition.Channels.Add(new DMXChannel("Strobe", 1, 192, 255));
            Fixture fixture = new Fixture(definition, 1, GroupTests.GetGroup(), new JObject());
            return fixture;
        }

        public static Fixture GetMovingFixture(string axisName, int axisMin, int axisMax, JObject options = null)
        {
            Definition definition = FixtureDefinitionTests.GetMovingFixtureDefinition(axisName, axisMin, axisMax);
            Group group = GroupTests.GetGroup();
            Fixture fixture = new Fixture(definition, 1, group, options ?? new JObject());
            return fixture;
        }
    }
}
