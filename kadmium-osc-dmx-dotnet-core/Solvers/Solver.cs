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
        public Dictionary<string, Attribute> Attributes { get; set; }
        public List<string> SolvableAttributes { get; set; }

        protected Solver(Dictionary<string, Attribute> settables, params string[] attributes)
        {
            Attributes = new Dictionary<string, Attribute>();
            SolvableAttributes = new List<string>();
            foreach (string attributeName in attributes)
            {
                Attribute attribute = new Attribute(attributeName);
                Attributes.Add(attribute.Name, attribute);
                settables.Add(attribute.Name, attribute);
            }

            
        }

        public abstract void Solve();
        
    }
}
