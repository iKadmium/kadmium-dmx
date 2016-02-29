using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Threading;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class FakeStrobeTest
    {
        [TestMethod]
        public void TestFakeStrobe()
        {
            double frequency = 25.0;
            int period = (int)(1000.0 / frequency);
            Fixture fixture = FixtureTest.GetRGBFixture();
            Strobe strobe = new Strobe(frequency);
            FakeStrobeSolver solver = new FakeStrobeSolver(fixture, strobe);
            fixture.Solvers.Add(solver);

            DMXAdapterTest.SetRGB(fixture.Adapter, 1, 1, 1);
            solver.Solve();
            RGB initialRGB = new kadmium_osc_dmx_dotnet_core.Solvers.RGB
            {
                Red = fixture.Adapter.Channels["Red"].Value,
                Green = fixture.Adapter.Channels["Green"].Value,
                Blue = fixture.Adapter.Channels["Blue"].Value
            };

            DMXAdapterTest.SetRGB(fixture.Adapter, 1, 1, 1);
            Thread.Sleep(period / 2);
            solver.Solve();
            RGB secondRGB = new kadmium_osc_dmx_dotnet_core.Solvers.RGB
            {
                Red = fixture.Adapter.Channels["Red"].Value,
                Green = fixture.Adapter.Channels["Green"].Value,
                Blue = fixture.Adapter.Channels["Blue"].Value
            };

            DMXAdapterTest.SetRGB(fixture.Adapter, 1, 1, 1);
            Thread.Sleep(period / 2);
            solver.Solve();
            RGB thirdRGB = new kadmium_osc_dmx_dotnet_core.Solvers.RGB
            {
                Red = fixture.Adapter.Channels["Red"].Value,
                Green = fixture.Adapter.Channels["Green"].Value,
                Blue = fixture.Adapter.Channels["Blue"].Value
            };

            Assert.AreEqual(initialRGB, thirdRGB);
            Assert.AreNotEqual(initialRGB, secondRGB);

        }
    }
}
