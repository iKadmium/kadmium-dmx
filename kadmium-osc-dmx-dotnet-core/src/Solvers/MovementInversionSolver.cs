using System.Collections.Generic;
using System.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class MovementInversionSolver : FixtureSolver
    {
        public IEnumerable<string> InvertedAxis { get; set; }

        public MovementInversionSolver(Fixture fixture, JObject options) : base(fixture)
        {
            InvertedAxis = GetInvertedAxis(fixture.Definition, options);
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            foreach (string axisName in InvertedAxis)
            {
                Attributes[axisName].Value = 1 - Attributes[axisName].Value;
            }
        }

        private static IEnumerable<string> GetInvertedAxis(FixtureDefinition definition, JObject options)
        {
            var invertOptions = from option in options["axisInversions"]?.Values<string>() ?? Enumerable.Empty<string>()
                                select option;

            var invertedAxis = from option in invertOptions
                               where definition.Axis.Any(x => x.Name == option)
                               select option;

            return invertedAxis;
        }

        public static bool SuitableFor(FixtureDefinition definition, JObject options)
        {
            return GetInvertedAxis(definition, options).Count() > 0;
        }
    }
}
