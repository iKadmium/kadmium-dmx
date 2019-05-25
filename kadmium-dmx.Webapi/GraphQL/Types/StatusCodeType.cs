using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.DataSubscriptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class StatusCodeType : EnumerationGraphType<StatusCode>
    {
        public StatusCodeType()
        {
            Name = "statusCode";
        }
    }
}
