using kadmium_dmx_core.Fixtures;

namespace kadmium_dmx_core.Solvers
{
    public class FixtureSolverAttribute : FixtureAttribute
    {
        public FixtureSolverAttribute(string name, float value = 0) : base(name, value)
        {
        }
    }
}
