using GraphQL.Types;
using kadmium_dmx_core.DataSubscriptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.StatusUpdates
{
    public class ListenerMessageType : ObjectGraphType<ListenerMessage>
    {
        public ListenerMessageType()
        {
            Name = "ListenerMessage";
            Field(x => x.Address)
                .Name("Address")
                .Description("The OSC Address of the received message");
            Field(x => x.Time, type: typeof(NonNullGraphType<DateTimeGraphType>))
                .Name("Time")
                .Description("The time the message was received");
            Field(x => x.Value, type: typeof(NonNullGraphType<StringGraphType>))
                .Name("Value")
                .Description("The normalised floating point value (0.0 to 1.0) of the message");
        }
    }
}
