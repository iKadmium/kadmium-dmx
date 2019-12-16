using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.FixtureDefinitions
{
    public class MovementAxisType : ObjectGraphType<IMovementAxisData>
    {
        public MovementAxisType()
        {
            Name = "MovementAxis";
            Field(x => x.Name, type: typeof(NonNullGraphType<StringGraphType>))
                .Description("The name of the axis");
            Field(x => x.Min, type: typeof(NonNullGraphType<IntGraphType>))
                .Description("The minimum angle (in degrees) of the axis");
            Field(x => x.Max, type: typeof(NonNullGraphType<IntGraphType>))
                .Description("The maximum angle (in degrees) of the axis");
        }
    }
}
