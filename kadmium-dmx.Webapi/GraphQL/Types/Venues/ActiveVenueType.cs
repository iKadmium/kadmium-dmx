using GraphQL.Types;
using kadmium_dmx_core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class ActiveVenueType : ObjectGraphType<Venue>
    {
        public ActiveVenueType()
        {
            Name = "activeVenue";

            Field(x => x.Name);
            Field(x => x.Universes,
                type: typeof(ListGraphType<ActiveUniverseType>)
            );
        }
    }
}
