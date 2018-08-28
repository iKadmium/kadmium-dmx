using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types
{
    public class GroupData : BsonSerializable, IGroupData
    {
        public string Name { get; set; }
        public int Order { get; set; }

        [JsonConstructor]
        public GroupData()
        {

        }
    }

    
}
