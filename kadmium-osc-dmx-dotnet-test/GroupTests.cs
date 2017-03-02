using kadmium_osc_dmx_dotnet_core;

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
