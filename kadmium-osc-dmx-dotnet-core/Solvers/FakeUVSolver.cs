using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    class FakeUVSolver : FixtureSolver
    {
        private static Dictionary<string, Attribute> UVColor = new Dictionary<string, Attribute>()
        {
            ["Red"] = new Attribute("Red", 0.58f),
            ["Green"] = new Attribute("Green", 0f),
            ["Blue"] = new Attribute("Blue", 0.83f)
        };

        public FakeUVSolver(Fixture fixture) : base(fixture, "UV")
        {

        }

        public override void Solve()
        {
            var applicableChannels = from channel in Fixture.Adapter.Channels
                                     where UVColor.ContainsKey(channel.Key)
                                     select channel.Value;

            float uvAmount = Attributes["UV"].Value;
            float originalAmount = 1.0f - uvAmount;
            
            foreach (var channel in applicableChannels)
            {
                Attribute uvChannel = UVColor[channel.Name];
                channel.Value = (originalAmount * channel.Value) + (uvAmount * uvChannel.Value);
            }
        }
        
    }
}
