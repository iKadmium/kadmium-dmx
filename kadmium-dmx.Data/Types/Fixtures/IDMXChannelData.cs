using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IDMXChannelData, DMXChannelData>))]
    public interface IDMXChannelData
    {
        string Name { get; set; }
        byte Min { get; set; }
        byte Max { get; set; }
        ushort Address { get; set; }
    }
}
