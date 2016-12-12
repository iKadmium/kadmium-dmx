using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_test
{
    public class FixtureDefinitionTests
    {
        public static Definition GetMovingFixtureDefinition(string axisName, int min, int max)
        {
            Definition definition = new Definition();
            definition.Channels.Add(new DMXChannel(axisName, definition.Channels.Count + 1));
            definition.Axis.Add(new MovementAxis(axisName, min, max));
            definition.Name = "Moving Fixture";
            definition.Manufacturer = "Generic";
            return definition;
        }
    }
}
