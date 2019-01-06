using kadmium_dmx_core;
using kadmium_dmx_data.Types;
using System.Collections.Generic;

namespace kadmium_dmx.Core.Test
{
    public class GroupTests
    {
        public static Group GetGroup()
        {
            Group group = new Group(new GroupData { Name = "TestGroup", Order = 1 });
            return group;
        }

        public static IEnumerable<Group> GetGroups()
        {
            List<Group> groups = new List<Group>
            {
                new Group(new GroupData { Name = "vocalist", Order = 1 }),
                new Group(new GroupData { Name = "guitarist", Order = 2 }),
                new Group(new GroupData { Name = "bassist", Order = 3 }),
                new Group(new GroupData { Name = "drummer", Order = 4 }),
                new Group(new GroupData { Name = "rearSides", Order = 5 })
            };

            return groups;
        }
    }
}
