using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Storage
{
    public interface IVenueStore : IStore<string, IVenueData>
    {
    }
}
