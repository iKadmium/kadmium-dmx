namespace kadmium_dmx_core.Solvers
{
    public class GroupSolverAttribute : Attribute
    {
        public GroupSolverAttribute(string name, float value = 0) : base(name, value)
        {

        }

        public override Attribute Clone()
        {
            GroupSolverAttribute other = new GroupSolverAttribute(Name, Value);
            return other;
        }
    }
}
