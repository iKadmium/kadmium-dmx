using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_core.Solvers
{
    public abstract class GroupSolver : Solver
    {
        protected Group Group { get; set; }

        public GroupSolver(Group group, params string[] attributes)
        {
            Group = group;
            foreach (var attributeName in attributes)
            {
                if (!group.Settables.ContainsKey(attributeName))
                {
                    group.Settables.Add(attributeName, new GroupSolverAttribute(attributeName));
                }
                if (!group.FrameSettables.ContainsKey(attributeName))
                {
                    group.FrameSettables.Add(attributeName, new GroupSolverAttribute(attributeName));
                }
            }
        }

        public static IEnumerable<GroupSolver> GetDefaultSolvers(Group group, IEnumerable<string> options)
        {
            List<GroupSolver> solvers = new List<GroupSolver>();
            solvers.Add(new ApeshitGroupSolver(group));
            return solvers;
        }

    }
}
