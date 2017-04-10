using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_test
{
    class UniverseTests
    {
        public static Universe GetSingleFixtureUniverse(FixtureDefinition definition, Group group, string name = "Test Universe")
        {
            Universe universe = new Universe(name, 1, new List<Fixture>()
            {
                FixtureTests.GetFixture(definition, 1, group)
            });
            return universe;
        }
    }
}
