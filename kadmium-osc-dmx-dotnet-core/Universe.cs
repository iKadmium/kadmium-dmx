using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Universe
    {
        private static int DMX_UNIVERSE_SIZE = 512;
        public string Name { get; set; }
        public IEnumerable<Transmitter> TransmitterTargets { get; set; }
        public List<Fixture> Fixtures { get; set; }

        public Universe(string name, IEnumerable<Transmitter> transmitterTargets)
        {
            TransmitterTargets = transmitterTargets;
            Fixtures = new List<Fixture>();
        }

        internal static Universe Load(string sourceDocumentLocation, XElement universeElement)
        {
            var targets = from transmitterElement in universeElement.Element("transmitters").Elements("transmitter")
                          select MasterController.Instance.Transmitters.Single(x => x.Name == transmitterElement.Attribute("id").Value);
            string name = universeElement.Attribute("name").Value;
            Universe universe = new Universe(name, targets);
            var fixtures = from fixtureElement in universeElement.Element("fixtures").Elements("fixture")
                           select Fixture.Load(fixtureElement);
            universe.Fixtures.AddRange(fixtures);
            var fixtureSetFixtures = from fixtureSetElement in universeElement.Element("fixtures").Elements("fixtureSet")
                                     select FileAccess.LoadFixtureSet(sourceDocumentLocation, fixtureSetElement.Attribute("src").Value);
            universe.Fixtures.AddRange(fixtureSetFixtures.SelectMany(x => x));
            return universe;
        }

        internal void Update()
        {
            byte[] dmx = new byte[DMX_UNIVERSE_SIZE];

            var channels = from fixture in Fixtures
                           select fixture.Adapter.DMXData;

            var flatMap = channels.SelectMany(i => i);
            
            
            foreach(var channel in flatMap)
            {
                dmx[channel.Key] = channel.Value;
            }

            foreach(Transmitter transmitter in TransmitterTargets)
            {
                transmitter.Transmit(dmx);
            }
        }
    }
}
