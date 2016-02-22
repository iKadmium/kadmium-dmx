using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class HSBTest
    {
        struct RGB
        {
            public float Red { get; set; }
            public float Green { get; set; }
            public float Blue { get; set; }
        }

        struct HSB
        {
            public float Hue { get; set; }
            public float Saturation { get; set; }
            public float Brightness { get; set; }
        }

        struct LocalColor
        {
            public string Name { get; set; }
            public HSB HSB { get; set; }
            public RGB RGB { get; set; }
            public LocalColor(string name, float red, float green, float blue, float hue, float saturation, float brightness)
            {
                HSB = new HSB { Hue = hue, Brightness = brightness, Saturation = saturation };
                RGB = new RGB { Red = red, Green = green, Blue = blue };
                Name = name;
            }
        }

        [TestMethod]
        public void TestHSBToRGB()
        {
            //setup
            Fixture fixture = FixtureTest.GetRGBFixture();
            HSBSolver solver = new HSBSolver(fixture);
            fixture.Solvers.Add(solver);
            LocalColor red = new HSBTest.LocalColor("Red", 1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 1.0f);
            LocalColor green = new HSBTest.LocalColor("Green", 0.0f, 1.0f, 0.0f, (float)(1.0 / 3.0), 1.0f, 1.0f);
            LocalColor blue = new HSBTest.LocalColor("Blue", 0.0f, 0.0f, 1.0f, (float)(2.0 / 3.0), 1.0f, 1.0f);
            LocalColor black = new HSBTest.LocalColor("Black", 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f);
            LocalColor white = new HSBTest.LocalColor("White", 1.0f, 1.0f, 1.0f, 0.0f, 0.0f, 1.0f);
            
            //test
            TestColor(fixture, solver, red);
            TestColor(fixture, solver, green);
            TestColor(fixture, solver, blue);
            TestColor(fixture, solver, black);
            TestColor(fixture, solver, white);

        }

        private void TestColor(Fixture fixture, HSBSolver solver, LocalColor color, float tolerance = 0.01f)
        {
            solver.Attributes["Hue"].Value = color.HSB.Hue;
            solver.Attributes["Saturation"].Value = color.HSB.Saturation;
            solver.Attributes["Brightness"].Value = color.HSB.Brightness;

            solver.Solve();
            Assert.AreEqual(fixture.Adapter.Channels["Red"].Value, color.RGB.Red, tolerance, "Red not set correctly for " + color.Name);
            Assert.AreEqual(fixture.Adapter.Channels["Green"].Value, color.RGB.Green, tolerance, "Green not set correctly for " + color.Name);
            Assert.AreEqual(fixture.Adapter.Channels["Blue"].Value, color.RGB.Blue, tolerance, "Blue not set correctly for " + color.Name);
        }
    }
}
