using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.FixtureDefinitions
{
    public class FixtureDefinitionType : ObjectGraphType<FixtureDefinition>
    {
        public FixtureDefinitionType()
        {
            Name = "FixtureDefinition";
            Field(x => x.Skeleton.Manufacturer, type: typeof(NonNullGraphType<StringGraphType>))
                .Description("The fixture's manufacturer");
            Field(x => x.Skeleton.Model, type: typeof(NonNullGraphType<StringGraphType>))
                .Description("The fixture's model name (including its personality)");
            Field(x => x.Channels, type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<DMXChannelType>>>))
                .Description("DMX Channels in this fixture");
            Field(x => x.ColorWheel, type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<ColorWheelEntryType>>>))
                .Description("Entries for the fixture's color wheel");
            Field(x => x.FixtureType, type: typeof(NonNullGraphType<FixtureTypeEnum>))
                .Description("Fixture Type");
            Field(x => x.Movements, type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<MovementAxisType>>>))
                .Description("Movement axis");
        }
    }
}
