using GraphQL.Types;
using kadmium_dmx_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class ActiveDmxChannelType : ObjectGraphType<DMXChannel>
    {
        public ActiveDmxChannelType()
        {
            Name = "activeDmxChannel";

            Field(x => x.Name);
            Field(x => x.Min, type: typeof(NonNullGraphType<IntGraphType>));
            Field(x => x.Max, type: typeof(NonNullGraphType<IntGraphType>));
            Field(x => x.Controlled);
            Field(x => x.Address, type: typeof(NonNullGraphType<IntGraphType>));
            Field(x => x.RelativeAddress, type: typeof(NonNullGraphType<IntGraphType>));
        }
    }
}
