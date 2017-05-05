using System;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class FixtureDefinition : IEquatable<FixtureDefinition>
    {
        public int Id { get; set; }

        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public List<DMXChannel> Channels { get; }
        public List<MovementAxis> Movements { get; }
        public List<ColorWheelEntry> ColorWheel { get; set; }
        public FixtureType Type { get; set; }
        public float Lux { get; set; }
        public float BeamAngle { get; set; }

        public FixtureDefinition()
        {
            Channels = new List<DMXChannel>();
            Movements = new List<MovementAxis>();
            ColorWheel = new List<ColorWheelEntry>();
        }

        public FixtureDefinitionSkeleton GetSkeleton()
        {
            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton()
            {
                Id = Id,
                Manufacturer = Manufacturer,
                Model = Model
            };
            return skeleton;
        }

        public bool Equals(FixtureDefinition other)
        {
            if (Manufacturer != other.Manufacturer) { return false; }
            if (Model != other.Model) { return false; }
            if (Type != other.Type) { return false; }
            if (Lux != other.Lux) { return false; }
            if (BeamAngle != other.BeamAngle) { return false; }
            foreach (var channel in other.Channels)
            {
                if (!Channels.Any(x => x.Equals(channel))) { return false; }
            }
            foreach (var channel in Channels)
            {
                if (!other.Channels.Any(x => x.Equals(channel))) { return false; }
            }
            foreach (var movement in other.Movements)
            {
                if (!Movements.Any(x => x.Equals(movement))) { return false; }
            }
            foreach (var movement in Movements)
            {
                if (!other.Movements.Any(x => x.Equals(movement))) { return false; }
            }
            return true;
        }

        public FixtureDefinition Clone()
        {
            FixtureDefinition cloned = new FixtureDefinition();
            cloned.Id = Id;
            cloned.Manufacturer = Manufacturer;
            cloned.Model = Model;
            cloned.Channels.AddRange(from channel in Channels select channel.Clone() as DMXChannel);
            cloned.Movements.AddRange(from movement in Movements select movement.Clone());
            cloned.ColorWheel.AddRange(from color in ColorWheel select color.Clone());
            cloned.Type = Type;
            cloned.Lux = Lux;
            cloned.BeamAngle = BeamAngle;
            return cloned;
        }
    }

    public class FixtureDefinitionSkeleton : IEquatable<FixtureDefinitionSkeleton>
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }

        public bool Equals(FixtureDefinitionSkeleton other)
        {
            if (other.Manufacturer != Manufacturer) { return false; }
            if (other.Model != Model) { return false; }
            return true;
        }
    }
}
