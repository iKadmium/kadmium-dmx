using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.FixtureDefinitions
{
    public class ColorWheelEntryType : ObjectGraphType<IColorWheelEntryData>
    {
        public ColorWheelEntryType()
        {
            Name = "ColorWheelEntry";
            Field(x => x.Name, type: typeof(NonNullGraphType<StringGraphType>))
                .Description("The name of the color");
            Field(x => x.Color, type: typeof(NonNullGraphType<StringGraphType>))
                .Description("The hex value of the color");
            Field(x => x.Min, type: typeof(NonNullGraphType<IntGraphType>))
                .Description("The minimum value of the color");
            Field(x => x.Max, type: typeof(NonNullGraphType<IntGraphType>))
                .Description("The maximum value of the color");
        }
    }
}
