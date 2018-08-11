using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    public interface IUniverseData
    {
        string Name { get; set; }
        int UniverseID { get; set; }
        IEnumerable<FixtureData> Fixtures { get; set; }
    }
}
