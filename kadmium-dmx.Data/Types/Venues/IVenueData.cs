using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    public interface IVenueData
    {
        string Name { get; set; }
        IEnumerable<IUniverseData> Universes { get; set; }
    }
}
