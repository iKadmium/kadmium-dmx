using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class PanTilt16BitSolver : FixtureSolver
    {
        public bool PanInverted { get; set; }
        public bool TiltInverted { get; set; }

        public Dictionary<string, RestrictableMovementAxis> Axis { get; set; }
        
        public bool Eased { get; set; }
        
        public PanTilt16BitSolver(Fixture fixture, IEnumerable<string> options) : base(fixture, Get16BitAxisNames(fixture.Definition).ToArray())
        {
            Axis = new Dictionary<string, RestrictableMovementAxis>();
            foreach(MovementAxis movement in fixture.Definition.Axis)
            {
                RestrictableMovementAxis axis;
                if(movement.Name == "Pan" && options.Contains("RestrictedPan"))
                {
                    axis = new RestrictableMovementAxis(movement, -90, 90);
                }
                else if(movement.Name == "Tilt" && options.Contains("RestrictedTilt"))
                {
                    axis = new RestrictableMovementAxis(movement, 0, 90);
                }
                else
                {
                    axis = new RestrictableMovementAxis(movement);
                }
                Axis.Add(movement.Name, axis);
            }
            PanInverted = options.Contains("InvertedPan");
            TiltInverted = options.Contains("InvertedTilt");
        }

        private static IEnumerable<string> Get16BitAxisNames(Definition fixtureDefinition)
        {
            var names = from movement in fixtureDefinition.Axis
                        select movement.Name;
            return names;
        }

        internal static bool SuitableFor(Definition definition)
        {
            return definition.Channels.Any(x => x.Name == "PanCoarse") ||
                definition.Channels.Any(x => x.Name == "TiltCoarse");
        }
        
        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            foreach (RestrictableMovementAxis axis in Axis.Values)
            {
                float value = Attributes[axis.Name].Value;
                value = axis.RestrictedToOriginal(value);
                UInt16 value16bit = (UInt16)(value * UInt16.MaxValue);

                byte[] valueBytes = BitConverter.GetBytes(value16bit);
                float valueFine = (float)valueBytes[0] / (float)byte.MaxValue;
                float valueCoarse = (float)valueBytes[1] / (float)byte.MaxValue;

                Attributes[axis.Name + "Coarse"].Value = valueCoarse;
                if (Attributes.ContainsKey(axis.Name + "Fine"))
                {
                    Attributes[axis.Name + "Fine"].Value = valueFine;
                }
            }
        }
    }

    

}
