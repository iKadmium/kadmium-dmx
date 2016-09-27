using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public abstract class FixtureSolver : Solver
    {
     
        public FixtureSolver(Fixture fixture, params string[] attributes) : base(fixture.Settables, fixture.FrameSettables, attributes)
        { }

        
    }
}
