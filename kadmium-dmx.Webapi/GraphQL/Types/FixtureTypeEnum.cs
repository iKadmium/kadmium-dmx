using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class FixtureTypeEnum : EnumerationGraphType<FixtureType>
    {
        public FixtureTypeEnum()
        {
            Name = "FixtureType";
        }
    }
}
