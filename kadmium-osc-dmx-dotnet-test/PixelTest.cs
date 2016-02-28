using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Adapters;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class PixelTest
    {
        [TestMethod]
        public void TestMethod1()
        {
        }

        public static Pixel GetRGBPixel()
        {
            Pixel pixel = new Pixel();
            DMXAdapter adapter = DMXAdapterTest.GetRGBDMXAdapter();
            pixel.Adapters.Add(adapter);
            
            return pixel;
        }
    }
}
