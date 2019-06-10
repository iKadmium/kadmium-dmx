using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.Transmitters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class DmxEventType : ObjectGraphType<DMXEventArgs>
    {
        public DmxEventType()
        {
            Name = "dmxEvent";
            Field(
                name: "dmx",
                x => x.DMX,
                type: typeof(ListGraphType<IntGraphType>)
            );
            Field(
                name: "universeId",
                x => x.UniverseId
            );
        }
    }
}
