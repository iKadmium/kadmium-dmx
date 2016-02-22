using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace kadmium_osc_dmx_dotnet_ui
{
    public static class ColorExtensions
    {
        public static Color FromFixture(Fixture fixture, Strobe strobe)
        {
            float red = GetChannel(fixture, "Red");
            float green = GetChannel(fixture, "Green");
            float blue = GetChannel(fixture, "Blue");
            float white = GetChannel(fixture, "White");
            float amber = GetChannel(fixture, "Amber");
            float uv = GetChannel(fixture, "UV");

            if(GetChannel(fixture, "Strobe") > 0.0f && !strobe.GetValue())
            {
                return Color.FromRgb(0, 0, 0);
            }

            Color baseColor = Color.FromScRgb(255.0f, red, green, blue);
            Color whiteColor = Color.FromScRgb(white, 255, 255, 255);
            Color amberColor = Color.FromScRgb(amber, 255, 191, 0);
            Color uvColor = Color.FromScRgb(uv, 128, 0, 128);

            if (white > 0)
            {
                baseColor = baseColor.Blend(whiteColor);
            }
            if (amber > 0)
            {
                baseColor = baseColor.Blend(amberColor);
            }
            if (uv > 0)
            {
                baseColor = baseColor.Blend(uvColor);
            }

            return baseColor;
        }

        private static float GetChannel(Fixture fixture, string channel)
        {
            return fixture.Adapter.Channels.ContainsKey(channel) ? fixture.Adapter.Channels[channel].Value : 0.0f;
        }

        public static Color FromArgb(float alpha, float red, float green, float blue)
        {
            return Color.FromArgb((byte)(alpha * 255), (byte)(red * 255), (byte)(green * 255), (byte)(blue * 255));
        }

        public static Color Blend(this Color color, Color addedColor)
        {
            double firstAmount = 1;
            double secondAmount = 1 - ((double)addedColor.A / 255.0);
            byte r = (byte)((color.R * firstAmount) + addedColor.R * (1 - secondAmount));
            byte g = (byte)((color.G * firstAmount) + addedColor.G * (1 - secondAmount));
            byte b = (byte)((color.B * firstAmount) + addedColor.B * (1 - secondAmount));
            return Color.FromArgb(color.A, r, g, b);
        }

        public static Color ContrastColor(this Color color)
        {
            byte d = 0;

            // Counting the perceptive luminance - human eye favors green color... 
            double a = 1 - (0.299 * color.R + 0.587 * color.G + 0.114 * color.B) / 255;

            if (a < 0.5)
                d = 0; // bright colors - black font
            else
                d = 255; // dark colors - white font

            return Color.FromArgb(255, d, d, d);
        }
    }
}
