using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class DMXChannelData : IDMXChannelData
    {
        public string Name { get; set; }
        public int Min { get; set; } = byte.MinValue;
        public int Max { get; set; } = byte.MaxValue;
        public int Address { get; set; }
    }
}
