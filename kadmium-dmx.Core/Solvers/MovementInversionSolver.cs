using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx_core.Solvers
{
    public class MovementInversionSolver : FixtureSolver
    {
        public IEnumerable<string> InvertedAxis { get; set; }

        public MovementInversionSolver(Fixture fixture, IFixtureDefinition definition, JObject options) : base(fixture)
        {
            InvertedAxis = GetInvertedAxis(definition, options);
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            foreach (string axisName in InvertedAxis)
            {
                Attributes[axisName].Value = 1 - Attributes[axisName].Value;
            }
        }

        private static IEnumerable<string> GetInvertedAxis(IFixtureDefinition definition, JObject options)
        {
            var invertOptions = from option in options["axisInversions"]?.Values<string>() ?? Enumerable.Empty<string>()
                                select option;

            var invertedAxis = from option in invertOptions
                               where definition.Movements.Any(x => x.Name == option)
                               select option;

            return invertedAxis;
        }

        public static bool SuitableFor(IFixtureDefinition definition, JObject options)
        {
            return GetInvertedAxis(definition, options).Count() > 0;
        }
    }
}
