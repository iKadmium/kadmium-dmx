using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_webapi.GraphQL.Types.Venues;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.StatusUpdates
{
    public class VenueStatusType : ObjectGraphType<VenueStatusUpdate>
    {
        public VenueStatusType()
        {
            Name = "VenueStatus";
            Field(x => x.Message, type: typeof(NonNullGraphType<StringGraphType>))
                .Name("message")
                .Description("The message associated with the status");
            Field(x => x.StatusCode, type: typeof(NonNullGraphType<StatusCodeType>))
                .Name("statusCode")
                .Description("The code associated with the status");
            Field(x => x.Venue, type: typeof(VenueType))
                .Name("activeVenue")
                .Description("The currently active venue");
        }
    }
}
