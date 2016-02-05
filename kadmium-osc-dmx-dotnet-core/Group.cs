using kadmium_osc_dmx_dotnet_core.Solvers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Group
    {
        public string Name { get; set; }
        public List<Solver> Solvers { get; set; }

        public Group(string name)
        {
            Name = name;
        }

        public static Group Load(XElement element)
        {
            string name = element.Attribute("name").Value;
            Group group = new Group(name);
            if(element.Element("solvers") != null)
            {
                var solvers = from solverElement in element.Element("solvers").Elements()
                              select Solver.Load(solverElement);
                group.Solvers.AddRange(solvers);
            }
            
            return group;
        }
    }
}
