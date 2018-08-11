using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IGroupData, GroupData>))]
    public interface IGroupData
    {
        string Name { get; set; }
        int Order { get; set; }
    }
}
