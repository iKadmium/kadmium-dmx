using kadmium_dmx_data.Types.Venues;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IFixtureData, FixtureData>))]
    public interface IFixtureData
    {
        ushort Address { get; set; }
        FixtureDefinitionSkeleton Type { get; set; }
        FixtureOptions Options { get; set; }
        string Group { get; set; }
    }
}
