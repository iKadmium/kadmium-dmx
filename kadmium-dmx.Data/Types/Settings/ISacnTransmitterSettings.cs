using System;
using System.Collections.Generic;

namespace kadmium_dmx_data.Types.Settings
{
    public interface ISacnTransmitterSettings
    {
        int Delay { get; set; }
        bool Multicast { get; set; }
        Guid UUID { get; set; }
        IEnumerable<string> Unicast { get; set; }
    }
}