using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class FixtureDefinition : IFixtureDefinition
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }

        public FixtureDefinitionSkeleton Skeleton { get; set; }
        public List<IDMXChannelData> Channels { get; set; }
        public List<IMovementAxisData> Movements { get; set; }
        public List<IColorWheelEntryData> ColorWheel { get; set; }
        public FixtureType FixtureType { get; set; }
        public float Lux { get; set; }
        public float BeamAngle { get; set; }

        public override string ToString()
        {
            return Skeleton?.ToString();
        }
    }

    public class FixtureDefinitionSkeleton : IEquatable<FixtureDefinitionSkeleton>
    {
        public string Manufacturer { get; set; }
        public string Model { get; set; }

        public bool Equals(FixtureDefinitionSkeleton other)
        {
            return Manufacturer == other.Manufacturer && Model == other.Model;
        }

        public override string ToString()
        {
            return $"{Manufacturer} {Model}";
        }
    }
}
