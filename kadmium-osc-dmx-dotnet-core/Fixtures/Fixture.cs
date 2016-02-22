using kadmium_osc_dmx_dotnet_core.Solvers;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Fixture
    {
        public DMXAdapter Adapter { get; set; }
        public Dictionary<string, Solvers.Attribute> Settables { get; set; }
        public Dictionary<string, MovementAxis> MovementAxis { get; set; }
        public List<FixtureSolver> Solvers { get; set; }
        public event EventHandler Updated;
        
        public Fixture(DMXAdapter adapter)
        {
            Adapter = adapter;
            Solvers = new List<FixtureSolver>();
            Settables = new Dictionary<string, Solvers.Attribute>();
            foreach(Solvers.Attribute attribute in Adapter.Channels.Values)
            {
                Settables.Add(attribute.Name, attribute);
            }
            MovementAxis = new Dictionary<string, Fixtures.MovementAxis>();            
        }
        
        internal static Fixture Load(XElement fixtureElement)
        {
            DMXAdapter adapter = DMXAdapter.Load(fixtureElement.Attribute("type").Value, int.Parse(fixtureElement.Attribute("startChannel").Value));
            Fixture fixture = new Fixture(adapter);
            var groups = from groupElement in fixtureElement.Element("groups").Elements("group")
                         select MasterController.Instance.Groups.Single(grp => grp.Name == groupElement.Attribute("name").Value);
            var solvers = from solverElement in fixtureElement.Element("solvers").Elements()
                          select FixtureSolver.Load(solverElement, fixture);
            foreach (XElement movementElement in FileAccess.LoadFixtureModel(adapter.Type).Elements("movement"))
            {
                string name = movementElement.Attribute("type").Value;
                int min = int.Parse(movementElement.Attribute("min").Value);
                int max = int.Parse(movementElement.Attribute("max").Value);
                fixture.MovementAxis.Add(name, new Fixtures.MovementAxis(name, min, max));
            }
            fixture.Solvers.AddRange(solvers);
            foreach (Group group in groups)
            {
                group.Fixtures.Add(fixture);
            }

            return fixture;
        }

        internal void Update()
        {
            foreach(FixtureSolver solver in Solvers.Where(solver => solver != null))
            {
                solver.Solve();
            }
            if(Updated != null)
            {
                Updated(this, new EventArgs());
            }
        }
    }
}
