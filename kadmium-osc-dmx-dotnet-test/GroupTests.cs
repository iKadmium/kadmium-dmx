using kadmium_osc_dmx_dotnet_core;
using System.Collections;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_test
{
    public class GroupTests
    {
        public static Group GetGroup()
        {
            Group group = new Group("TestGroup", 1);
            return group;
        }

        public static IEnumerable<Group> GetGroups()
        {
            List<Group> groups = new List<Group>();
            groups.Add(new Group("vocalist", 1));
            groups.Add(new Group("guitarist", 2));
            groups.Add(new Group("bassist", 3));
            groups.Add(new Group("drummer", 4));
            groups.Add(new Group("rearSides", 5));

            return groups;
        }
    }
}
