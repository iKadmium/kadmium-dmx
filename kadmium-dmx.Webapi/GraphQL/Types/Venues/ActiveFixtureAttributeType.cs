using GraphQL.Types;
using kadmium_dmx_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class ActiveFixtureAttributeType : ObjectGraphType<FixtureAttribute>
    {
        public ActiveFixtureAttributeType()
        {
            Name = "activeFixtureAttribute";

            Field(x => x.Name);
            Field(x => x.Value,
                type: typeof(StringGraphType));
            Field(x => x.Controlled);
        }
    }
}
