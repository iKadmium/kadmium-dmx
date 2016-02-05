using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core
{
    static class FileAccess
    {
        static string DataLocation = @"D:\User\IntelliJ Workspace\kadmium-osc-dmx\data";
        static string GroupsLocation = Path.Combine(DataLocation, "groups.xml");
        static string VenuesLocation = Path.Combine(DataLocation, "venues");
        
        public static IEnumerable<Group> DeserializeGroups()
        {
            XDocument groupsDoc = XDocument.Load(GroupsLocation);
            var groups = from groupElement in groupsDoc.Root.Elements("group")
                         select Group.Load(groupElement);
            return groups;
        }
    }
}
