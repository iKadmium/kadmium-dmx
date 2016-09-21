using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Universe
    {
        private static int DMX_UNIVERSE_SIZE = 512;
        public string Name { get; set; }
        public IEnumerable<Transmitter> TransmitterTargets { get; set; }
        public List<VenueChunk> VenueChunks { get; }

        public Universe(string name, IEnumerable<Transmitter> transmitterTargets)
        {
            TransmitterTargets = transmitterTargets;
            VenueChunks = new List<VenueChunk>();
        }

        internal static Universe Load(string sourceDocumentLocation, JObject universeElement)
        {
            var targets = from transmitterName in universeElement["transmitters"].Values<string>()
                          select MasterController.Instance.Transmitters.Single(x => x.Name == transmitterName);
            string name = universeElement["name"].Value<string>();
            Universe universe = new Universe(name, targets);
            return universe;
        }

        public void Update()
        {
            
        }
    }
}
