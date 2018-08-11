using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public interface IDMXChannelData
    {
        string Name { get; set; }
        int Min { get; set; }
        int Max { get; set; }
        int Address { get; set; }
    }
}
