using kadmium_dmx_core.Color;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_core.Solvers
{
    class FakeUVSolver : FixtureSolver
    {
        public static Color.HSB UVColor = new Color.HSB(280, 1f, 0.83f);
        private static string[] ApplicableChannelNames = { "Hue", "Saturation", "Brightness" };

        public FakeUVSolver(Fixture fixture) : base(fixture, "UV")
        {

        }

        public override void Solve(Dictionary<string, FixtureAttribute> settables)
        {
            var applicableChannels = from channel in settables
                                     where ApplicableChannelNames.Contains(channel.Key)
                                     select channel.Value;

            float uvAmount = settables["UV"].Value;
            Color.HSB firstHSB = new Color.HSB(settables["Hue"].Value * 360f, settables["Saturation"].Value, settables["Brightness"].Value);
            Color.RGB first = ColorSpaceHelper.HSBtoRGB(firstHSB);
            Color.RGB uv = ColorSpaceHelper.HSBtoRGB(UVColor);
            Color.RGB result = first.Mix(uv, uvAmount);
            Color.HSB hsb = ColorSpaceHelper.RGBtoHSB(result);
            settables["Hue"].Value = (float)(hsb.Hue / 360.0);
            settables["Saturation"].Value = (float)hsb.Saturation;
            settables["Brightness"].Value = (float)hsb.Brightness;
        }

        public static bool SuitableFor(IFixtureDefinition definition)
        {
            return definition.Channels.Any(x => x.Name == "Red") &&
                definition.Channels.Any(x => x.Name == "Green") &&
                definition.Channels.Any(x => x.Name == "Blue") &&
                !definition.Channels.Any(x => x.Name == "UV");
        }
    }
}
