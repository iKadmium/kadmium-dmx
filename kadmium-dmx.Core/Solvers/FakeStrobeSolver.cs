﻿using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_core.Solvers
{
    public class FakeStrobeSolver : FixtureSolver
    {
        IStrobe Strobe { get; set; }

        public FakeStrobeSolver(Fixture fixture, IStrobe strobe) : base(fixture, "Strobe")
        {
            Strobe = strobe;
        }

        public FakeStrobeSolver(Fixture fixture) : this(fixture, ServiceLocator.Get<IStrobe>()) { }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            if (Attributes["Strobe"].Value > 0.0f)
            {
                if (!Strobe.GetValue())
                {
                    Attributes["Brightness"].Value = 0f;
                }
            }

        }

        internal static bool SuitableFor(IFixtureDefinition definition)
        {
            return definition.FixtureType == FixtureType.LED &&
                !definition.Channels.Any(x => x.Name == "Strobe");
        }
    }
}
