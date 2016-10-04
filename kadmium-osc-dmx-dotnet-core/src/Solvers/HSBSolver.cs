using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public struct RGB
    {
        public float Red { get; set; }
        public float Green { get; set; }
        public float Blue { get; set; }
    }

    public class HSBSolver : FixtureSolver
    {
        public HSBSolver(Fixture fixture) : base(fixture, "Hue", "Saturation", "Brightness")
        {
            
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            RGB color = FromHSB(Attributes["Hue"].Value, Attributes["Saturation"].Value, Attributes["Brightness"].Value);

            Attributes["Red"].Value = color.Red;
            Attributes["Green"].Value = color.Green;
            Attributes["Blue"].Value = color.Blue;
        }

        public static bool SuitableFor(Definition definition)
        {
            return definition.Channels.Any(x => x.Name == "Red") &&
                definition.Channels.Any(x => x.Name == "Green") &&
                definition.Channels.Any(x => x.Name == "Blue");
        }

        private static RGB FromHSB(double H, double S, double B)
        {
            double red = 0.0, green = 0.0, blue = 0.0;

            if (S == 0.0)
            {
                red = green = blue = B;
            }
            else
            {
                double h = H * 360;
                while (h >= 360.0)
                    h -= 360.0;

                h = h / 60.0;
                int i = (int)h;

                double f = h - i;
                double r = B * (1.0 - S);
                double s = B * (1.0 - S * f);
                double t = B * (1.0 - S * (1.0 - f));

                switch (i)
                {
                    case 0: red = B; green = t; blue = r; break;
                    case 1: red = s; green = B; blue = r; break;
                    case 2: red = r; green = B; blue = t; break;
                    case 3: red = r; green = s; blue = B; break;
                    case 4: red = t; green = r; blue = B; break;
                    case 5: red = B; green = r; blue = s; break;
                }
            }

            return new RGB()
            {
                Red = (float)red,
                Green = (float)green,
                Blue = (float)blue
            };
        }

    }
    

}
