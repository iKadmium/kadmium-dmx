using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx_core.Solvers
{
    public class BrightnessLimiterSolver : FixtureSolver
    {
        public string[] TargetAttributes = { "Red", "Green", "Blue", "White", "Amber", "UV" };
        public float MaxBrightness { get; set; }

        public BrightnessLimiterSolver(Fixture fixture, JObject options) : base(fixture)
        {
            MaxBrightness = options["maxBrightness"].Value<float>();
            var matchingAttributes = from attribute in fixture.Settables.Values
                                     where TargetAttributes.Contains(attribute.Name)
                                     select attribute;
            foreach (var attribute in matchingAttributes)
            {
                attribute.Controlled = true;
            }
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
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

        internal static bool SuitableFor(FixtureDefinition definition, JObject options)
        {
            return options["maxBrightness"]?.Value<float>() < 1f;
        }
    }
}
