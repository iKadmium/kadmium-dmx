using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx.DataAccess.Json
{
    public class JsonGroupStore : JsonStore<string, GroupData>, IGroupStore
    {
        public JsonGroupStore(IFileAccess fileAccess) : 
            base(
                fileAccess, 
                (grp) => grp.Name,
                "Groups")
        {
        }
    }
}
