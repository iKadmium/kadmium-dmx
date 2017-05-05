using System;
using System.ComponentModel.DataAnnotations.Schema;
using kadmium_osc_dmx_dotnet_core.Color;
using Newtonsoft.Json;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class ColorWheelEntry : System.IEquatable<ColorWheelEntry>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
        [JsonProperty(PropertyName = "color")]
        public string ColorString
        {
            get
            {
                return Color.ToString();
            }
            set
            {
                Color = RGB.Parse(value);
            }
        }

        [NotMapped]
        [JsonIgnore]
        public RGB Color { get; set; }

        public ColorWheelEntry()
        {
            Name = "";
            Min = 0;
            Max = 255;
            Color = new RGB(255, 255, 255);
        }

        public ColorWheelEntry(string name, int min, int max, RGB color)
        {
            Name = name;
            Min = min;
            Max = max;
            Color = color;
        }

        public override bool Equals(object obj)
        {
            var other = obj as ColorWheelEntry;
            if (other == null) return false;
            return Equals(other);
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode() ^ Min ^ Max & ColorString.GetHashCode();
        }

        public bool Equals(ColorWheelEntry other)
        {
            if (other == null)
            {
                return false;
            }

            return (other.Name == Name && other.Min == Min && other.Max == Max && other.ColorString == ColorString);
        }

        public ColorWheelEntry Clone()
        {
            ColorWheelEntry cloned = new ColorWheelEntry(Name, Min, Max, Color);
            cloned.Id = Id;
            return cloned;
        }
    }
}
