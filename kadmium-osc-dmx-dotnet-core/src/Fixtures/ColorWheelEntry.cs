using System.ComponentModel.DataAnnotations.Schema;
using kadmium_osc_dmx_dotnet_core.Color;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class ColorWheelEntry : System.IEquatable<ColorWheelEntry>
    {
        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
        public string ColorString
        {
            get
            {
                return Color.ToString();
            }
            set
            {
                Color.Red = int.Parse(value.Substring(1, 2), System.Globalization.NumberStyles.HexNumber);
                Color.Green = int.Parse(value.Substring(3, 2), System.Globalization.NumberStyles.HexNumber);
                Color.Blue = int.Parse(value.Substring(5, 2), System.Globalization.NumberStyles.HexNumber);
            }
        }

        [NotMapped]
        public RGB Color { get; set; }

        public int Id { get; set; }

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

        public static ColorWheelEntry Load(JObject obj)
        {
            string name = obj["name"].Value<string>();
            byte min = obj["min"].Value<byte>();
            byte max = obj["max"].Value<byte>();
            string colorString = obj["color"].Value<string>();
            int red = int.Parse(colorString.Substring(1, 2), System.Globalization.NumberStyles.AllowHexSpecifier);
            int green = int.Parse(colorString.Substring(3, 2), System.Globalization.NumberStyles.AllowHexSpecifier);
            int blue = int.Parse(colorString.Substring(5, 2), System.Globalization.NumberStyles.AllowHexSpecifier);
            RGB color = new RGB(red, green, blue);
            return new ColorWheelEntry(name, min, max, color);
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
    }
}
