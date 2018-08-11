using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Color;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;

namespace kadmium_dmx_core.Solvers
{
    public class HSBtoColorWheelSolver : FixtureSolver
    {
        List<ColorWheelEntry> ColorWheel { get; }

        public HSBtoColorWheelSolver(Fixture fixture, IFixtureDefinition definition) : base(fixture, "Hue", "Saturation", "Brightness")
        {
            ColorWheel = fixture.ColorWheel;
            fixture.Settables["ColorWheel"].Controlled = true;
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
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

        public static bool SuitableFor(IFixtureDefinition definition)
        {
            return definition.Channels.Any(x => x.Name == "ColorWheel") &&
                definition.ColorWheel.Count() > 0 &&
                !(definition.Channels.Any(x => x.Name == "Red") &&
                definition.Channels.Any(x => x.Name == "Green") &&
                definition.Channels.Any(x => x.Name == "Blue")); // suitable if there's a colorwheel but no RGB
        }
    }
}
