using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    [Serializable()]
    public class Universe
    {
        public string Name { get; set; }
        public IEnumerable<Transmitter> TransmitterTargets { get; set; }
        public List<Fixture> Fixtures { get; set; }

        public Universe(string name, IEnumerable<Transmitter> transmitterTargets)
        {
            Fixtures = new List<Fixture>();
        }
    }
}
