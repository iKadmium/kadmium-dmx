using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
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
        public List<GroupSolver> Solvers { get; set; }
        public List<Fixture> Fixtures { get; set; }
        public Dictionary<string, Attribute> Settables { get; set; }
        
        public Group(string name)
        {
            Name = name;
            Fixtures = new List<Fixture>();
            Solvers = new List<GroupSolver>();
            Settables = new Dictionary<string, Attribute>();
        }

        public static Group Load(XElement element)
        {
            string name = element.Attribute("name").Value;
            Group theGroup = new Group(name);
            if(element.Element("solvers") != null)
            {
                var solvers = from solverElement in element.Element("solvers").Elements()
                              select GroupSolver.Load(solverElement, theGroup);
                theGroup.Solvers.AddRange(solvers);
            }
            
            return theGroup;
        }

        public void Set(string attribute, float value)
        {
            if(Settables.ContainsKey(attribute))
            {
                Settables[attribute].Value = value;
            }

            foreach(Fixture fixture in Fixtures)
            {
                if(fixture.Settables.ContainsKey(attribute))
                {
                    fixture.Settables[attribute].Value = value;
                }
            }
        }

        internal void Update()
        {
            foreach(GroupSolver solver in Solvers)
            {
                solver.Solve();
            }

            foreach(Fixture fixture in Fixtures)
            {
                fixture.Update();
            }
        }
    }
}
