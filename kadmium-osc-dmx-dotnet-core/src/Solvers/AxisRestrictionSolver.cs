using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class AxisRestrictionSolver : FixtureSolver
    {
        public Dictionary<string, RestrictableMovementAxis> Axis { get; set; }

        public AxisRestrictionSolver(Fixture fixture, JObject options) : base(fixture)
        {
            Axis = new Dictionary<string, RestrictableMovementAxis>();
            foreach(string restrictedAxisName in GetRestrictedAxisNames(fixture.Definition, options))
            {
                MovementAxis movement = fixture.MovementAxis[restrictedAxisName];
                RestrictableMovementAxis axis;
                switch(movement.Name)
                {
                    case "Pan":
                        axis = new RestrictableMovementAxis(movement, -90, 90);
                        break;
                    case "Tilt":
                        axis = new RestrictableMovementAxis(movement, 0, 90);
                        break;
                    default:
                        axis = new RestrictableMovementAxis(movement);
                        break;
                }
                Axis.Add(movement.Name, axis);
            }
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            foreach(RestrictableMovementAxis axis in Axis.Values)
            {
                Attributes[axis.Name].Value = axis.RestrictedToOriginal(Attributes[axis.Name].Value);
            }
        }

        private static IEnumerable<string> GetRestrictedAxisNames(Definition definition, JObject options)
        {
            var restrictedNames = from option in options["axisRestrictions"]?.Values<JObject>() ?? Enumerable.Empty<JObject>()
                                  select option["name"].Value<string>();

            var restrictedAxis = from name in restrictedNames
                                 where definition.Axis.Any(x => x.Name == name)
                                 select name;

            return restrictedAxis;
        }

        internal static bool SuitableFor(Definition definition, JObject options)
        {
            return GetRestrictedAxisNames(definition, options).Count() > 0;
        }
    }
}
