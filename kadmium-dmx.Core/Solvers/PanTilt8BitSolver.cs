using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace kadmium_dmx_core.Solvers
{
    public class PanTilt8BitSolver : FixtureSolver
    {
        private readonly IEnumerable<string> AxisNames;

        public bool Eased { get; set; }

        public PanTilt8BitSolver(Fixture fixture, IFixtureDefinition definition) :
            base(fixture, Get8BitAxisNames(definition).ToArray())
        {
            AxisNames = Get8BitAxisNames(definition).ToList();
            foreach (var name in AxisNames)
            {
                fixture.Settables[name + "Coarse"].Controlled = true;
            }
        }

        private static IEnumerable<string> Get8BitAxisNames(IFixtureDefinition fixtureDefinition)
        {
            var names = from movement in fixtureDefinition.Movements ?? Enumerable.Empty<IMovementAxisData>()
                        where fixtureDefinition.Channels.Any(x => x.Name == movement.Name + "Coarse")
                        && !fixtureDefinition.Channels.Any(x => x.Name == movement.Name + "Fine")
                        select movement.Name;
            return names;
        }

        internal static bool SuitableFor(IFixtureDefinition definition)
        {
            return Get8BitAxisNames(definition).Any();
        }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            foreach (string axisName in AxisNames)
            {
                float value = Attributes[axisName].Value;
                UInt16 value16bit = (UInt16)(value * UInt16.MaxValue);

                byte[] valueBytes = BitConverter.GetBytes(value16bit);
                float valueCoarse = valueBytes[1] / (float)byte.MaxValue;

                Attributes[axisName + "Coarse"].Value = valueCoarse;
            }
        }
    }
}
