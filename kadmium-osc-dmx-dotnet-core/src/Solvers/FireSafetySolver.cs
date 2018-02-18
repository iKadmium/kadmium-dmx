using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Color;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class FireSafetySolver : FixtureSolver
    {
        private static float DecayRate = (1f / MasterController.UPDATES_PER_SECOND);
        private Fixture Fixture { get; }

        public FireSafetySolver(Fixture fixture) : base(fixture, "FireSafety", "FireActivate")
        {
            fixture.Settables["Fire"].Controlled = true;
            Fixture = fixture;
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            if (Attributes["FireSafety"].Value > 0)
            {
                if (Attributes.ContainsKey("FireHeight"))
                {
                    Attributes["FireHeight"].Value = Attributes["FireActivate"].Value;
                    Attributes["Fire"].Value = Attributes["FireActivate"].Value > 0f ? 1f : 0;
                }
                Attributes["Fire"].Value = Attributes["FireActivate"].Value;
                if (Attributes["FireSafety"].Value > DecayRate)
                {
                    Fixture.Settables["FireSafety"].Value -= DecayRate;
                    Attributes["FireSafety"].Value -= DecayRate;
                }
                else
                {
                    Fixture.Settables["FireSafety"].Value = 0;
                }
            }
            else
            {
                Attributes["Fire"].Value = 0f;
            }
        }

        public static bool SuitableFor(FixtureDefinition definition)
        {
            return definition.Channels.Any(x => x.Name == "Fire") &&
                !definition.Channels.Any(x => x.Name == "FireSafety");
        }

    }


}
