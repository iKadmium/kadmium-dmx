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

        public MovementRestrictionSolver(Fixture fixture, JObject options) : base(fixture)
        {
            Axis = new Dictionary<string, RestrictableMovementAxis>();
            foreach (JObject obj in options["axisRestrictions"].Values<JObject>())
            {
                MovementAxis movement = fixture.MovementAxis[obj["name"].Value<string>()];

                int min = obj["min"].Value<int>();
                int max = obj["max"].Value<int>();
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

        private static IEnumerable<string> GetRestrictedAxisNames(IFixtureDefinition definition, JObject options)
        {
            var restrictedNames = from option in options["axisRestrictions"]?.Values<JObject>() ?? Enumerable.Empty<JObject>()
                                  select option["name"].Value<string>();

            var restrictedAxis = from name in restrictedNames
                                 where definition.Movements.Any(x => x.Name == name)
                                 select name;

            return restrictedAxis;
        }

        internal static bool SuitableFor(IFixtureDefinition definition, JObject options)
        {
            return GetRestrictedAxisNames(definition, options).Any();
        }
    }
}
