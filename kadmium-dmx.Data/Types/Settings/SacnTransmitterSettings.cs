using System;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_data.Types.Settings
{
    public class SacnTransmitterSettings : ISacnTransmitterSettings
    {
        public int Delay { get; set; }
        public bool Multicast { get; set; }
        public Guid UUID { get; set; }
        public IEnumerable<string> Unicast { get; set; }

        public SacnTransmitterSettings()
        {
            Delay = 0;
            Multicast = true;
            Unicast = Enumerable.Empty<string>();
            UUID = new Guid();
        }
    }
}
