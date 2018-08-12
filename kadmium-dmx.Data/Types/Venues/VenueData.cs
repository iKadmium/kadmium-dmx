using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    public class VenueData : BsonSerializable, IVenueData
    {
        public string Name { get; set; }
        public IEnumerable<IUniverseData> Universes { get; set; }

        public VenueData()
        {
            Name = "";
            Universes = new List<IUniverseData>();
        }

        [JsonConstructor]
        public VenueData(IEnumerable<UniverseData> universes) : base()
        {
            Universes = universes;
        }
    }
}
