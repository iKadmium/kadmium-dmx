using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using System;

namespace kadmium_dmx_data.Types.Fixtures
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IMovementAxisData, MovementAxisData>))]
    public interface IMovementAxisData
    {
        int Max { get; set; }
        int Min { get; set; }
        string Name { get; set; }
    }
}