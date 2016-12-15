using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Color;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class HSBtoColorWheelSolver : FixtureSolver
    {
        List<ColorWheelEntry> ColorWheel { get; }

        public HSBtoColorWheelSolver(Fixture fixture) : base(fixture, "Hue", "Saturation", "Brightness")
        {
            ColorWheel = fixture.Definition.ColorWheel;
            fixture.Settables["ColorWheel"].Controlled = true;
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            HSB hsb = new HSB(Attributes["Hue"].Value * 360.0, Attributes["Saturation"].Value, 1f);
            RGB rgb = ColorSpaceHelper.HSBtoRGB(hsb);

            double minDistance = ColorSpaceHelper.GetColorDistance(1, 1, 1, 0, 0, 0);
            ColorWheelEntry closestEntry = ColorWheel.First();

            foreach (ColorWheelEntry entry in ColorWheel)
            {
                double distance = ColorSpaceHelper.GetColorDistance(rgb, entry.Color);
                if (distance < minDistance)
                {
                    closestEntry = entry;
                    minDistance = distance;
                }
            }

            var closestValueDMX = (closestEntry.Min + closestEntry.Max) / 2;
            var closestValue = closestValueDMX / 255f;
            Attributes["ColorWheel"].Value = closestValue;

            if (Attributes["Master"] != null)
            {
                Attributes["Master"].Value = Attributes["Brightness"].Value;
            }
        }

        public static bool SuitableFor(Definition definition)
        {
            return definition.Channels.Any(x => x.Name == "ColorWheel") &&
                definition.ColorWheel.Count > 0 &&
                !(definition.Channels.Any(x => x.Name == "Red") &&
                definition.Channels.Any(x => x.Name == "Green") &&
                definition.Channels.Any(x => x.Name == "Blue")); // suitable if there's a colorwheel but no RGB
        }
    }
}
