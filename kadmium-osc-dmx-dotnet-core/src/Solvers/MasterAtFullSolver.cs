using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    class MasterAtFullSolver : FixtureSolver
    {
        public MasterAtFullSolver(Fixture fixture) : base(fixture)
        {

        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            Attributes["Master"].Value = 1.0f;
        }

        public static bool SuitableFor(Definition definition)
        {
            return definition.Channels.Any(x => x.Name == "Master");
        }
    }
}
