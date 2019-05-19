using GraphQL.Types;
using kadmium_dmx_data.Types.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class SACNTransmitterSettingsType : ObjectGraphType<SacnTransmitterSettings>, IGraphType
    {
        public SACNTransmitterSettingsType()
        {
            Name = "SACNTransmitterSettings";
            Field(x => x.Delay)
                .Name("delay")
                .Description("How long to delay sending packets to this transmitter");
            Field(x => x.Multicast)
                .Name("multicast")
                .Description("Enable multicast for this transmitter");
            Field(x => x.UUID, type: typeof(StringGraphType))
                .Name("uuid")
                .Description("The UUID for this sACN transmitter");
            Field(x => x.Unicast)
                .Name("unicast")
                .Description("A list of hosts to unicast packets to");
        }
    }
}
