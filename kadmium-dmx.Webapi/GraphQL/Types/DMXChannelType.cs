using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class DMXChannelType : ObjectGraphType<IDMXChannelData>
    {
        public DMXChannelType()
        {
            Name = "dmxChannel";
            Field(x => x.Name)
                .Description("The name of the channel");
            Field(x => x.Address, type: typeof(IntGraphType))
                .Description("The address of the channel (beginning at 1)");
            Field(x => x.Min, type: typeof(IntGraphType))
                .Description("The minimum meaningful value for the channel");
            Field(x => x.Max, type: typeof(IntGraphType))
                .Description("The maximum meaningful value for the channel");
        }
    }
}
