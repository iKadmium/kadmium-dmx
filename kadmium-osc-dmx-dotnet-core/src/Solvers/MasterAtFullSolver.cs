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

        public override void Solve()
        {
            Fixture.Adapter.Channels["Master"].Value = 1.0f;
        }
    }
}
