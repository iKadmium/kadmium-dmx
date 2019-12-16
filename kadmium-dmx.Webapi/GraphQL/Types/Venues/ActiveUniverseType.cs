using GraphQL.Types;
using kadmium_dmx_core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class ActiveUniverseType : ObjectGraphType<Universe>
    {
        public ActiveUniverseType()
        {
            Name = "activeUniverse";

            Field(x => x.Name);
            Field(x => x.UniverseID);
            Field(x => x.Fixtures,
                type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<ActiveFixtureType>>>)
            );
        }
    }
}
