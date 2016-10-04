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
                if(!settables.ContainsKey(attributeName))
                {
                    settables.Add(attribute.Name, new Attribute(attribute.Name));
                }
                if(!frameSettables.ContainsKey(attributeName))
                {
                    frameSettables.Add(attribute.Name, new Attribute(attribute.Name));
                }
            }
        }

        public abstract void Solve(Dictionary<string, Attribute> Attributes);
    }
}
