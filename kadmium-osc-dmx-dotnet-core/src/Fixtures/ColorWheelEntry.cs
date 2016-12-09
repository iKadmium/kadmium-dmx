using kadmium_osc_dmx_dotnet_core.Color;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class ColorWheelEntry
    {
        public string Name { get; }
        public int Min { get; }
        public int Max { get; }
        public RGB Color { get; }

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
    }
}
