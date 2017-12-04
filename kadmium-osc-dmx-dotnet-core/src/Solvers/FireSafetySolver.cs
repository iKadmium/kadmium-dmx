using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Color;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class FireSafetySolver : FixtureSolver
    {
        public FireSafetySolver(Fixture fixture) : base(fixture, "FireSafety", "FireActivate")
        {
            fixture.Settables["Fire"].Controlled = true;
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            if(Attributes["FireSafety"].Value == 1f)
            {
                Attributes["Fire"].Value = Attributes["FireActivate"].Value;
            }
            else
            {
                Attributes["Fire"].Value = 0f;
            }
        }

        public static bool SuitableFor(FixtureDefinition definition)
        {
            return definition.Channels.Any(x => x.Name == "Fire") && 
                !definition.Channels.Any(x => x.Name =="FireSafety");
        }

    }


}
