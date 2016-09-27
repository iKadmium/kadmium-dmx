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
        public static Dictionary<string, Attribute> UVColor = new Dictionary<string, Attribute>()
        {
            ["Hue"] = new Attribute("Hue", 0.78f),
            ["Saturation"] = new Attribute("Saturation", 1f),
            ["Brightness"] = new Attribute("Brightness", 0.83f)
        };

        public FakeUVSolver(Fixture fixture) : base(fixture, "UV")
        {

        }

        public override void Solve(Dictionary<string, Attribute> settables)
        {
            var applicableChannels = from channel in settables
                                     where UVColor.ContainsKey(channel.Key)
                                     select channel.Value;

            float uvAmount = settables["UV"].Value;
            float originalAmount = 1.0f - uvAmount;
            
            foreach (var channel in applicableChannels)
            {
                Attribute uvChannel = UVColor[channel.Name];
                channel.Value = (originalAmount * channel.Value) + (uvAmount * uvChannel.Value);
            }
        }
        
    }
}
