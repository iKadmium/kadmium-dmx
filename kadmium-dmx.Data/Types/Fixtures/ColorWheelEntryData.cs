using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class ColorWheelEntryData : IColorWheelEntryData
    {
        public string Name { get; set; }
        public byte Min { get; set; }
        public byte Max { get; set; }
        public string Color { get; set; }
    }
}
