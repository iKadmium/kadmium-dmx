using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class FixtureTest
    {
        
        public static Fixture GetRGBFixture()
        {
            Fixture fixture = new Fixture(DMXAdapterTest.GetRGBDMXAdapter());
            return fixture;
        }

        public static Fixture GetMovingFixture()
        {
            Fixture fixture = new Fixture(DMXAdapterTest.GetMovingRGBDMXAdapter());
            fixture.MovementAxis.Add("Pan", new MovementAxis("Pan", -270, 270));
            fixture.MovementAxis.Add("Tilt", new MovementAxis("Tilt", -105, 105));
            return fixture;
        }
    }
}
