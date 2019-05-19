using GraphQL.Types;
using kadmium_dmx_data.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types
{
    public class GroupType : ObjectGraphType<IGroupData>
    {
        public GroupType()
        {
            Name = "Group";
            Field(x => x.Name)
                .Description("The Group's name");
            Field(x => x.Order).Description("The order in which the group appears in the list");
        }
    }
}
