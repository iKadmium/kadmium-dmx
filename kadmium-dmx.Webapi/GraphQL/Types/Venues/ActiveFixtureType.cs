using GraphQL.Types;
using kadmium_dmx_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class ActiveFixtureType : ObjectGraphType<Fixture>
    {
        public ActiveFixtureType()
        {
            Name = "activeFixture";

            Field(x => x.FixtureDefinitionSkeleton.Manufacturer);
            Field(x => x.FixtureDefinitionSkeleton.Model);
            Field(x => x.Address);
            Field(
                name: "channels",
                expression: x => x.Settables.Values.Where(settable => settable is DMXChannel).Select(channel => channel as DMXChannel),
                type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<ActiveDmxChannelType>>>)
            );
            Field(
                name: "attributes",
                expression: x => x.Settables.Values.Where(settable => !(settable is DMXChannel)).Select(channel => channel as FixtureAttribute),
                type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<ActiveFixtureAttributeType>>>)
            );
        }
    }
}
