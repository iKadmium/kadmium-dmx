namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class FixtureSolverAttribute : Attribute
    {
        public FixtureSolverAttribute(string name, float value = 0) : base(name, value)
        {
        }

        public override Attribute Clone()
        {
            FixtureSolverAttribute other = new FixtureSolverAttribute(Name, Value);
            return other;
        }
    }
}
