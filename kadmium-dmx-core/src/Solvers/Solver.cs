using System.Collections.Generic;

namespace kadmium_dmx_core.Solvers
{
    public abstract class Solver
    {
        public List<string> SolvableAttributes { get; set; }

        protected Solver(Dictionary<string, Attribute> settables, Dictionary<string, Attribute> frameSettables, IEnumerable<Attribute> attributes)
        {
            SolvableAttributes = new List<string>();
            foreach (Attribute attribute in attributes)
            {
                if (!settables.ContainsKey(attribute.Name))
                {
                    settables.Add(attribute.Name, attribute);
                }
                if (!frameSettables.ContainsKey(attribute.Name))
                {
                    frameSettables.Add(attribute.Name, attribute.Clone());
                }
            }
        }

        public abstract void Solve(Dictionary<string, Attribute> Attributes);
    }
}
