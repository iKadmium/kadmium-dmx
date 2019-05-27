using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class FixtureInstanceType : ObjectGraphType<IFixtureData>
    {
        public FixtureInstanceType()
        {
            Name = "FixtureInstance";
            Field(x => x.Address, type: typeof(IntGraphType));
            Field(x => x.Group);
            Field(x => x.Type.Manufacturer);
            Field(x => x.Type.Model);
        }
    }
}
