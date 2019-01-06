using System.Collections.Generic;
using System.Linq;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx_core.Solvers
{
    public class MovementRestrictionSolver : FixtureSolver
    {
        public Dictionary<string, RestrictableMovementAxis> Axis { get; set; }

        public MovementRestrictionSolver(Fixture fixture, FixtureOptions options) : base(fixture)
        {
            Axis = new Dictionary<string, RestrictableMovementAxis>();

            foreach (var restriction in options.AxisOptions.Where(x => x.Restrictions != null))
            {
                MovementAxis movement = fixture.MovementAxis[restriction.Name];

                int min = restriction.Restrictions.Min;
                int max = restriction.Restrictions.Max;
                var axis = new RestrictableMovementAxis(movement, min, max);
                Axis.Add(movement.Name, axis);
            }
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            foreach (RestrictableMovementAxis axis in Axis.Values)
            {
                Attributes[axis.Name].Value = axis.RestrictedToOriginal(Attributes[axis.Name].Value);
            }
        }

        private static IEnumerable<string> GetRestrictedAxisNames(IFixtureDefinition definition, FixtureOptions options)
        {
            var restrictedNames = from option in options.AxisOptions
                                  where option.Restrictions != null
                                  select option.Name;

            var restrictedAxis = from name in restrictedNames
                                 where definition.Movements.Any(x => x.Name == name)
                                 select name;

            return restrictedAxis;
        }

        internal static bool SuitableFor(IFixtureDefinition definition, FixtureOptions options)
        {
            return GetRestrictedAxisNames(definition, options).Any();
        }
    }
}
