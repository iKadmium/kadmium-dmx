using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    public class VenueData : BsonSerializable, IVenueData
    {
        public string Name { get; set; }
        public IEnumerable<UniverseData> Universes { get; set; }

        public VenueData()
        {
            Name = "";
            Universes = new List<UniverseData>();
        }
    }
}
