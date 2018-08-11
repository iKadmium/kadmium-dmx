using System;
using System.Collections.Generic;
using System.Text;
using kadmium_dmx_data.Types.Fixtures;

namespace kadmium_dmx_data.Types.Venues
{
    public class UniverseData : IUniverseData
    {
        public string Name { get; set; }
        public int UniverseID { get; set; }
        public IEnumerable<IFixtureData> Fixtures { get; set; }
    }
}
