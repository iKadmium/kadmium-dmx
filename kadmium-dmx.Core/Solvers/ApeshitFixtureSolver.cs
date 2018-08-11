using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;

namespace kadmium_dmx_core.Solvers
{
    public class ApeshitFixtureSolver : FixtureSolver
    {
        public ApeshitFixtureSolver(Fixture fixture) : base(fixture, "Apeshit", "ApeshitFixtureSelected")
        {
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            if (Attributes["Apeshit"].Value > 0)
            {
                if (Attributes["ApeshitFixtureSelected"].Value == 1f)
                {
                    Attributes["Strobe"].Value = 1f;
                    Attributes["Strobe"].Controlled = true;
                }
                else
                {
                    Attributes["Brightness"].Value = 0f;
                    if (Attributes.ContainsKey("Strobe"))
                    {
                        Attributes["Strobe"].Value = 0f;
                        Attributes["Strobe"].Controlled = false;
                    }
                }
            }
        }

        internal static bool SuitableFor(IFixtureDefinition definition)
        {
            return definition.FixtureType == FixtureType.LED &&
                !definition.Channels.Any(x => x.Name == "Apeshit");
        }
    }
}
