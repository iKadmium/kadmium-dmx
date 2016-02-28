using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class FakeStrobeSolver : FixtureSolver
    {
        Strobe Strobe { get; set; }

        public FakeStrobeSolver(Fixture fixture, Strobe strobe) : base(fixture, "Strobe")
        {
            Strobe = strobe;
        }

        public FakeStrobeSolver(Fixture fixture) : this(fixture, MasterController.Instance.Strobe) { }

        public override void Solve()
        {
            if(Attributes["Strobe"].Value > 0.0f)
            {
                if (Strobe.GetValue())
                {
                    BlackoutFixture(Fixture);
                }
            }
            
        }

        public static void BlackoutFixture(Fixture fixture)
        {
            var searchTargets = new string[] { "Red", "Blue", "Green", "White", "Amber", "UV", "Brightness" };
            var channelTargets = from channel in fixture.Adapter.Channels.Values
                                 where searchTargets.Contains(channel.Name)
                                 select channel;
            foreach (DMXChannel channel in channelTargets)
            {
                channel.Value = 0.0f;
            }
        }
    }
}
