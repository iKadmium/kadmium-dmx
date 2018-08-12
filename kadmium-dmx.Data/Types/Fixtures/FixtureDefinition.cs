using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class FixtureDefinition : BsonSerializable, IFixtureDefinition
    {
        public FixtureDefinitionSkeleton Skeleton { get; set; }
        public IList<DMXChannelData> Channels { get; set; }
        public IList<MovementAxisData> Movements { get; set; }
        public IList<ColorWheelEntryData> ColorWheel { get; set; }
        public FixtureType FixtureType { get; set; }

        public FixtureDefinition()
        {
            Channels = new List<DMXChannelData>();
            Movements = new List<MovementAxisData>();
            ColorWheel = new List<ColorWheelEntryData>();
        }

        public override string ToString()
        {
            return Skeleton?.ToString();
        }
    }

    public class FixtureDefinitionSkeleton : IEquatable<FixtureDefinitionSkeleton>
    {
        [JsonProperty("manufacturer")]
        public string Manufacturer { get; set; }
        [JsonProperty("model")]
        public string Model { get; set; }

        public bool Equals(FixtureDefinitionSkeleton other)
        {
            return Manufacturer == other.Manufacturer && Model == other.Model;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Manufacturer, Model);
        }

        public override string ToString()
        {
            return $"{Manufacturer} {Model}";
        }
    }
}
