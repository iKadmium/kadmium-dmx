using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class DMXAdapterTest
    {
        [TestMethod]
        public void TestRGBDMX()
        {
            Dictionary<int, byte> expectedRed = new Dictionary<int, byte>() {[0] = 255,[1] = 0,[2] = 0 };
            Dictionary<int, byte> expectedGreen = new Dictionary<int, byte>() {[0] = 0,[1] = 255,[2] = 0 };
            Dictionary<int, byte> expectedBlue = new Dictionary<int, byte>() {[0] = 0,[1] = 0,[2] = 255 };
            Dictionary<int, byte> expectedWhite = new Dictionary<int, byte>() {[0] = 255,[1] = 255,[2] = 255 };
            Dictionary<int, byte> expectedBlack = new Dictionary<int, byte>() {[0] = 0,[1] = 0,[2] = 0 };

            DMXAdapter adapter = GetRGBDMXAdapter();
            SetRGB(adapter, red: 1.0f);

            Assert.IsTrue(Enumerable.SequenceEqual(adapter.DMXData, expectedRed));
            SetRGB(adapter, green: 1.0f);
            Assert.IsTrue(Enumerable.SequenceEqual(adapter.DMXData, expectedGreen));
            SetRGB(adapter, blue: 1.0f);
            Assert.IsTrue(Enumerable.SequenceEqual(adapter.DMXData, expectedBlue));
            SetRGB(adapter, red: 1.0f, green: 1.0f, blue: 1.0f);
            Assert.IsTrue(Enumerable.SequenceEqual(adapter.DMXData, expectedWhite));
            SetRGB(adapter);
            Assert.IsTrue(Enumerable.SequenceEqual(adapter.DMXData, expectedBlack));
        }

        [TestMethod]
        public void TestSharedStrobe()
        {
            Dictionary<int, byte> expectedOff = new Dictionary<int, byte>() {[0] = 220 };
            Dictionary<int, byte> expectedOn = new Dictionary<int, byte>() {[0] = 255 };
            DMXAdapter adapter = new DMXAdapter();
            adapter.StartChannel = 1;
            adapter.Channels.Add("Master", new DMXChannel("Master", 1, 0, 220));
            adapter.Channels.Add("Strobe", new DMXChannel("Strobe", 1, 221, 255));

            adapter.Channels["Master"].Value = 1;
            adapter.Channels["Strobe"].Value = 0f;
            Assert.IsTrue(Enumerable.SequenceEqual(expectedOff, adapter.DMXData));

            adapter.Channels["Strobe"].Value = 1f;
            Assert.IsTrue(Enumerable.SequenceEqual(expectedOn, adapter.DMXData));
        }

        public static DMXAdapter GetRGBDMXAdapter()
        {
            DMXAdapter adapter = new DMXAdapter();
            adapter.StartChannel = 1;
            adapter.Channels.Add("Red", new DMXChannel("Red", adapter.Channels.Count + 1));
            adapter.Channels.Add("Green", new DMXChannel("Green", adapter.Channels.Count + 1));
            adapter.Channels.Add("Blue", new DMXChannel("Blue", adapter.Channels.Count + 1));
            return adapter;
        }

        public static DMXAdapter GetMovingRGBDMXAdapter()
        {
            DMXAdapter adapter = GetRGBDMXAdapter();
            adapter.Channels.Add("PanCoarse", new DMXChannel("PanCoarse", adapter.Channels.Count + 1));
            adapter.Channels.Add("TiltCoarse", new DMXChannel("TiltCoarse", adapter.Channels.Count + 1));
            return adapter;
        }

        public static void SetRGB(DMXAdapter adapter, float red = 0f, float green = 0f, float blue = 0f)
        {
            adapter.Channels["Red"].Value = red;
            adapter.Channels["Green"].Value = green;
            adapter.Channels["Blue"].Value = blue;
        }

    }
}
