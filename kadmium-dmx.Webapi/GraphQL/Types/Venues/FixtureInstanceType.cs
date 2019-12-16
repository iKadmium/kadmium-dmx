using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_webapi.GraphQL.Types.FixtureDefinitions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class FixtureInstanceType : ObjectGraphType<IFixtureData>
    {
        public FixtureInstanceType(IFixtureDefinitionStore fixtureDefinitionStore, IMasterController masterController)
        {
            Name = "FixtureInstance";
            Field(x => x.Address, type: typeof(IntGraphType));
            Field(x => x.Group);
            Field(x => x.Type.Manufacturer);
            Field(x => x.Type.Model);

            FieldAsync(
                type: typeof(NonNullGraphType<FixtureDefinitionType>),
                name: "definition",
                resolve: async context =>
                {
                    var definition = await fixtureDefinitionStore.Get(context.Source.Type);
                    foreach(var channel in definition.Channels)
                    {
                        channel.Address += (ushort)(context.Source.Address - 1);
                    }

                    return definition;
                }
            );
        }
    }
}
