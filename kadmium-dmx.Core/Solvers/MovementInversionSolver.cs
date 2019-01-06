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

        public MovementInversionSolver(Fixture fixture, IFixtureDefinition definition, FixtureOptions options) : base(fixture)
        {
            InvertedAxis = from axisOptions in options.AxisOptions
                           where axisOptions.Inverted
                           select axisOptions.Name;
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            foreach (string axisName in InvertedAxis)
            {
                Attributes[axisName].Value = 1 - Attributes[axisName].Value;
            }
        }

        public static bool SuitableFor(IFixtureDefinition definition, FixtureOptions options)
        {
            return options.AxisOptions.Any(x => x.Inverted);
        }
    }
}
