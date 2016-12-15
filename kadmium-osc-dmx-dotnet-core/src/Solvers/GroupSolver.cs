using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public abstract class GroupSolver : Solver
    {
        protected Group Group { get; set; }

        public GroupSolver(Group group, params string[] attributes) : base(group.Settables, group.FrameSettables, from attribute in attributes select new GroupSolverAttribute(attribute))
        {
            Group = group;
        }

        public static IEnumerable<GroupSolver> GetDefaultSolvers(Group group, IEnumerable<string> options)
        {
            List<GroupSolver> solvers = new List<GroupSolver>();
            solvers.Add(new ApeshitGroupSolver(group));
            return solvers;
        }

    }
}
