using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Color;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class HSBtoRGBSolver : FixtureSolver
    {
        public HSBtoRGBSolver(Fixture fixture) : base(fixture, "Hue", "Saturation", "Brightness")
        {
            fixture.Settables["Red"].Controlled = true;
            fixture.Settables["Green"].Controlled = true;
            fixture.Settables["Blue"].Controlled = true;
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            HSB hsb = new HSB(Attributes["Hue"].Value * 360.0, Attributes["Saturation"].Value, Attributes["Brightness"].Value);
            RGB rgb = ColorSpaceHelper.HSBtoRGB(hsb);

            Attributes["Red"].Value = rgb.Red / 255f;
            Attributes["Green"].Value = rgb.Green / 255f;
            Attributes["Blue"].Value = rgb.Blue / 255f;
        }

        public static bool SuitableFor(FixtureDefinition definition)
        {
            return definition.Channels.Any(x => x.Name == "Red") &&
                definition.Channels.Any(x => x.Name == "Green") &&
                definition.Channels.Any(x => x.Name == "Blue");
        }

    }


}
