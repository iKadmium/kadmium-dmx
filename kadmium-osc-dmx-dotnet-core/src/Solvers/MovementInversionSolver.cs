using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class MovementInversionSolver : FixtureSolver
    {
        public IEnumerable<string> InvertedAxis { get; set; }

        public MovementInversionSolver(Fixture fixture, IEnumerable<string> options) : base(fixture)
        {
            InvertedAxis = GetInvertedAxis(fixture.Definition, options);
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            foreach(string axisName in InvertedAxis)
            {
                Attributes[axisName].Value = 1 - Attributes[axisName].Value;
            }
        }

        private static IEnumerable<string> GetInvertedAxis(Definition definition, IEnumerable<string> options)
        {
            var invertOptions = from option in options
                                where option.StartsWith("Inverted")
                                select option.Substring(8);
            var invertedAxis = from option in invertOptions
                               where definition.Axis.Any(x => x.Name == option)
                               select option;

            return invertedAxis;
        }

        public static bool SuitableFor(Definition definition, IEnumerable<string> options)
        {
            return GetInvertedAxis(definition, options).Count() > 0;
        }
    }
}
