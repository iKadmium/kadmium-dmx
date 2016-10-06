using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class ApeshitFixtureSolver : FixtureSolver
    {
        public ApeshitFixtureSolver(Fixture fixture) : base(fixture, "Apeshit", "ApeshitFixtureSelected")
        {

        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            if(Attributes["Apeshit"].Value > 0)
            {
                if(Attributes["ApeshitFixtureSelected"].Value == 1f)
                {
                    Attributes["Strobe"].Value = 1f;
                }
                else
                {
                    Attributes["Brightness"].Value = 0f;
                    if (Attributes.ContainsKey("Strobe"))
                    {
                        Attributes["Strobe"].Value = 0f;
                    }
                }
            }
        }

        internal static bool SuitableFor(Definition definition)
        {
            return definition.Type == FixtureType.LED &&
                !definition.Channels.Any(x => x.Name == "Apeshit");
        }
    }
}
