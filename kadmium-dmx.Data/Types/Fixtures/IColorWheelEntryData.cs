using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public interface IColorWheelEntryData
    {
        string Name { get; set; }
        byte Min { get; set; }
        byte Max { get; set; }
        string Color { get; set; }
    }
}
