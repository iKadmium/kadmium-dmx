using kadmium_dmx_data.Types.Fixtures;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IUniverseData, UniverseData>))]
    public interface IUniverseData
    {
        string Name { get; set; }
        int UniverseID { get; set; }
        IEnumerable<IFixtureData> Fixtures { get; set; }
    }
}
