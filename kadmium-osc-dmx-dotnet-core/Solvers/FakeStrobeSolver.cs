using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    class FakeStrobeSolver : FixtureSolver
    {
        public FakeStrobeSolver(Fixture fixture) : base(fixture, "Strobe")
        {

        }

        public override void Solve()
        {
            if (MasterController.Instance.Strobe.GetValue())
            {
                var searchTargets = new string[] { "Red", "Blue", "Green", "White", "Amber", "UV", "Brightness" };
                var channelTargets = from channel in Fixture.Adapter.Channels.Values
                                     where searchTargets.Contains(channel.Name)
                                     select channel;
                foreach(DMXChannel channel in channelTargets)
                {
                    channel.Value = 0.0f;
                }
            }
        }
    }
}
