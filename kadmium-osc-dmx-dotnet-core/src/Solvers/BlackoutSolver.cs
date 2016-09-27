using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class BlackoutSolver : FixtureSolver
    {
        public BlackoutSolver(Fixture fixture) : base(fixture, "Blackout")
        {
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            var searchTargets = new string[] { "Brightness", "White", "Amber", "UV" };
            var channelTargets = from channel in Attributes.Values
                                 where searchTargets.Contains(channel.Name)
                                 select channel;
            foreach (DMXChannel channel in channelTargets)
            {
                channel.Value = 0.0f;
            }
        }
        
    }
}
