using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx_core.Solvers
{
    public class BrightnessLimiterSolver : FixtureSolver
    {
        public string[] TargetAttributes = { "Red", "Green", "Blue", "White", "Amber", "UV" };
        public float MaxBrightness { get; set; }

        public BrightnessLimiterSolver(Fixture fixture, FixtureOptions options) : base(fixture)
        {
            MaxBrightness = options.MaxBrightness.Value;
            var matchingAttributes = from attribute in fixture.Settables.Values
                                     where TargetAttributes.Contains(attribute.Name)
                                     select attribute;
            foreach (var attribute in matchingAttributes)
            {
                attribute.Controlled = true;
            }
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            if (Attributes.ContainsKey("Master"))
            {
                //just dim the master
                Attributes["Master"].Value *= MaxBrightness;
            }
            else
            {
                var matchingAttributes = from attribute in Attributes.Values
                                         where TargetAttributes.Contains(attribute.Name)
                                         select attribute;
                foreach (var attribute in matchingAttributes)
                {
                    attribute.Value *= MaxBrightness;
                }
            }
        }

        internal static bool SuitableFor(IFixtureDefinition definition, FixtureOptions options)
        {
            return options.MaxBrightness.HasValue && options.MaxBrightness.Value < 1f;
        }
    }
}
