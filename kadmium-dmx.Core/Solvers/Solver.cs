using kadmium_dmx_core.Fixtures;
using System.Collections.Generic;

namespace kadmium_dmx_core.Solvers
{
    public abstract class Solver
    {
        public abstract void Solve(Dictionary<string, FixtureAttribute> Attributes);
    }
}
