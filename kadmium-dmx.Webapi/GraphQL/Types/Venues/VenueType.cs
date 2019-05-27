using GraphQL.Types;
using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class VenueType : ObjectGraphType<IVenueData>
    {
        public VenueType()
        {
            Name = "Venue";
            Field(x => x.Name);
            Field(x => x.Universes, type: typeof(ListGraphType<UniverseType>), nullable: false);
        }
    }
}
