using kadmium_osc_dmx_dotnet_core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_test
{
    public class GroupTests
    {
        public static Group GetGroup()
        {
            Group group = new Group("TestGroup", 1);
            return group;
        }
    }
}
