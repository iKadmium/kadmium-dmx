using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    public class VenueData : IVenueData
    {
        public string Name { get; set; }
        public IList<UniverseData> Universes { get; set; }

        public VenueData()
        {
            Name = "";
            Universes = new List<UniverseData>();
        }

        [JsonConstructor]
        public VenueData(IList<UniverseData> universes) : base()
        {
            Universes = universes;
        }
    }
}
