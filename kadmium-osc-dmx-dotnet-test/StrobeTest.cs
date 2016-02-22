using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class StrobeTest
    {
        [TestMethod]
        public void TestStrobe()
        {
            double frequency = 25.0;
            TimeSpan period = TimeSpan.FromSeconds(1.0 / frequency);
            TimeSpan halfPeriod = TimeSpan.FromSeconds(1.0 / frequency / 2.0);
            TimeSpan offset = TimeSpan.FromMilliseconds(period.TotalMilliseconds * 0.1);
            Strobe strobe = new Strobe(frequency);
            DateTime initialTime = new DateTime();
            bool initial = strobe.GetValue(initialTime + offset);
            bool second = strobe.GetValue(initialTime + halfPeriod + offset);
            Assert.AreNotEqual(initial, second);
            bool third = strobe.GetValue(initialTime + period + offset);
            Assert.AreEqual(initial, third);
        }
    }
}
