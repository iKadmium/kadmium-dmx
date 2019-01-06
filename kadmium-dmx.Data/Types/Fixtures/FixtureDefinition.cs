using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class FixtureDefinition : IFixtureDefinition
    {
        public FixtureDefinitionSkeleton Skeleton { get; set; }
        public IEnumerable<IDMXChannelData> Channels { get; set; }
        public IEnumerable<IMovementAxisData> Movements { get; set; }
        public IEnumerable<IColorWheelEntryData> ColorWheel { get; set; }
        public FixtureType FixtureType { get; set; }

        public FixtureDefinition()
        {
            Channels = new List<IDMXChannelData>();
            Movements = new List<IMovementAxisData>();
            ColorWheel = new List<IColorWheelEntryData>();
            Skeleton = new FixtureDefinitionSkeleton();
        }

        [JsonConstructor]
        public FixtureDefinition(IEnumerable<DMXChannelData> channels, IEnumerable<MovementAxisData> movements, IEnumerable<ColorWheelEntryData> colorWheel) : base()
        {
            Channels = channels;
            Movements = movements;
            ColorWheel = colorWheel;
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

        public FixtureDefinitionSkeleton()
        {
            Manufacturer = "";
            Model = "";
        }
    }
}
