using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public abstract class Solver
    {
        public List<string> SolvableAttributes { get; set; }

        protected Solver(Dictionary<string, Attribute> settables, Dictionary<string, Attribute> frameSettables, params string[] attributes)
        {
            SolvableAttributes = new List<string>();
            foreach (string attributeName in attributes)
            {
                Attribute attribute = new Attribute(attributeName);
                settables.Add(attribute.Name, attribute);
                frameSettables.Add(attribute.Name, attribute);
            }
        }

        public abstract void Solve(Dictionary<string, Attribute> Attributes);
    }
}
