using System;
using System.ComponentModel.DataAnnotations.Schema;
using kadmium_dmx_core.Color;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json;

namespace kadmium_dmx_core.Fixtures
{
    public class ColorWheelEntry
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
                Color = RGB.Parse(value);
            }
        }

        public RGB Color { get; set; }

        public ColorWheelEntry(IColorWheelEntryData data)
        {
            Name = data.Name;
            Min = data.Min;
            Max = data.Max;
            ColorString = data.Color;
        }

    }
}
