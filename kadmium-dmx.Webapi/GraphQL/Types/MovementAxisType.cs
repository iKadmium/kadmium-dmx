using GraphQL.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class MovementAxisType : ObjectGraphType<IMovementAxisData>
    {
        public MovementAxisType()
        {
            Name = "MovementAxis";
            Field(x => x.Name)
                .Description("The name of the axis");
            Field(x => x.Min)
                .Description("The minimum angle (in degrees) of the axis");
            Field(x => x.Max)
                .Description("The maximum angle (in degrees) of the axis");
        }
    }
}
