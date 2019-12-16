using GraphQL.Types;
using kadmium_dmx_core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class ActiveFixtureUpdateType : ObjectGraphType<FixtureUpdateEvent>
    {
        public ActiveFixtureUpdateType()
        {
            Name = "activeFixtureUpdate";

            Field(x => x.Address);
            Field(x => x.UniverseId);
            Field(x => x.Attributes,
                type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<ActiveFixtureAttributeType>>>)
            );
            Field(x => x.DmxChannels,
                type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<ActiveDmxChannelType>>>)
            );
        }
    }
}
