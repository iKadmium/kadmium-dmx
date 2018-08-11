using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public interface IDMXChannelData
    {
        string Name { get; set; }
        byte Min { get; set; }
        byte Max { get; set; }
        ushort Address { get; set; }
    }
}
