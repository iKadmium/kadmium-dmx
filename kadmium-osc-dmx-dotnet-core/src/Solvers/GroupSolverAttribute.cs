using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Solvers
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
