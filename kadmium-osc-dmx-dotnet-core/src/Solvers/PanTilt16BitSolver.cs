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
        private IEnumerable<string> AxisNames;
        
        public bool Eased { get; set; }
        
        public PanTilt16BitSolver(Fixture fixture) : base(fixture, Get16BitAxisNames(fixture.Definition).ToArray())
        {
            AxisNames = from axis in fixture.Definition.Axis
                        select axis.Name;
            foreach(var name in Get16BitAxisNames(fixture.Definition))
            {
                fixture.Settables[name + "Coarse"].Controlled = true;
                fixture.Settables[name + "Fine"].Controlled = true;
            }
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
            foreach (string axisName in AxisNames)
            {
                float value = Attributes[axisName].Value;
                UInt16 value16bit = (UInt16)(value * UInt16.MaxValue);

                byte[] valueBytes = BitConverter.GetBytes(value16bit);
                float valueFine = valueBytes[0] / (float)byte.MaxValue;
                float valueCoarse = valueBytes[1] / (float)byte.MaxValue;
                
                Attributes[axisName + "Coarse"].Value = valueCoarse;
                Attributes[axisName + "Fine"].Value = valueFine;
            }
        }
    }

    

}
