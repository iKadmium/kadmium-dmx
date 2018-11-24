using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx.DataAccess.Json
{
    public class JsonVenueStore : JsonStore<string, VenueData>, IVenueStore
    {
        public JsonVenueStore(IFileAccess fileAccess) : 
            base(
                fileAccess, 
                (venue) => venue.Name, 
                "Venues")
        {
        }
    }
}
