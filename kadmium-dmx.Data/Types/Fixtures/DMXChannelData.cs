using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class DMXChannelData : IDMXChannelData
    {
        public string Name { get; set; }
        public byte Min { get; set; } = byte.MinValue;
        public byte Max { get; set; } = byte.MaxValue;
        public ushort Address { get; set; }
    }
}
