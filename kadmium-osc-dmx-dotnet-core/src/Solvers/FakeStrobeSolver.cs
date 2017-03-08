using kadmium_osc_dmx_dotnet_core.Fixtures;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class FakeStrobeSolver : FixtureSolver
    {
        Strobe Strobe { get; set; }

        public FakeStrobeSolver(Fixture fixture, Strobe strobe) : base(fixture, "Strobe")
        {
            Strobe = strobe;
        }

        public FakeStrobeSolver(Fixture fixture) : this(fixture, MasterController.Instance?.Strobe ?? new Strobe(20)) { }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            if (Attributes["Strobe"].Value > 0.0f)
            {
                if (Strobe.GetValue())
                {
                    Attributes["Brightness"].Value = 1.0f;
                }
            }

        }

        internal static bool SuitableFor(FixtureDefinition definition)
        {
            return definition.Type == FixtureType.LED &&
                !definition.Channels.Any(x => x.Name == "Strobe");
        }
    }
}
