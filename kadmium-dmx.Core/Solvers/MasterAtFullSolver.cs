using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_core.Solvers
{
    class MasterAtFullSolver : FixtureSolver
    {
        static string[] AllColors = { "Red", "Green", "Blue", "UV", "Amber", "White" };

        public MasterAtFullSolver(Fixture fixture) : base(fixture)
        {
            fixture.Settables["Master"].Controlled = true;
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            Attributes["Master"].Value = 1.0f;
        }

        public static bool SuitableFor(IFixtureDefinition definition)
        {
            return definition.Channels.Any(x => x.Name == "Master") &&
                definition.Channels.Any(x => AllColors.Contains(x.Name));
        }
    }
}
