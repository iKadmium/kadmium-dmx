using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    public class VenueData : IVenueData
    {
        public string Name { get; set; }
        public IEnumerable<IUniverseData> Universes { get; set; }
    }
}
