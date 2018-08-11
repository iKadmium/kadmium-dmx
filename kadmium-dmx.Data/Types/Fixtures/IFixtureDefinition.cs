using kadmium_dmx_data.Types.Venues;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace kadmium_dmx_data.Types.Fixtures
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IFixtureDefinition, FixtureDefinition>))]
    public interface IFixtureDefinition
    {
        FixtureDefinitionSkeleton Skeleton { get; set; }
        IList<DMXChannelData> Channels { get; set; }
        IList<MovementAxisData> Movements { get; set; }
        IList<ColorWheelEntryData> ColorWheel { get; set; }
        FixtureType FixtureType { get; set; }
    }
}