using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_test
{
    public class FixtureTests
    {
        public static Fixture GetMovingFixture(string axisName, int axisMin, int axisMax, JObject options = null)
        {
            Definition definition = FixtureDefinitionTests.GetMovingFixtureDefinition(axisName, axisMin, axisMax);
            Group group = GroupTests.GetGroup();
            Fixture fixture = new Fixture(definition, 1, group, options ?? new JObject());
            return fixture;
        }
    }
}
