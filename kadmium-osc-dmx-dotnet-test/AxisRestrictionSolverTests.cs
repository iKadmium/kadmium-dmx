using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class AxisRestrictionSolverTests
    {
        [Theory]
        [InlineData(-100, 100, -50, 50, 0.0f, 0.25f)]
        [InlineData(-100, 100, -50, 50, 1.0f, 0.75f)]
        [InlineData(-100, 100, 0, 100, 0.0f, 0.5f)]
        [InlineData(-100, 100, 0, 100, 1.0f, 1.0f)]
        [InlineData(-100, 100, -10, 10, 0.5f, 0.5f)]
        [InlineData(-100, 100, 100, -100, 0.0f, 1.0f)]
        public void TestAxisRestriction(int originalMin, int originalMax, int restrictedMin, int restrictedMax, float axisValue, float expected)
        {
            string axisName = "Pan";
            
            var fixture = GetRestrictedFixture(axisName, originalMin, originalMax, restrictedMin, restrictedMax);

            var channel = fixture.Settables[axisName] as DMXChannel;
            channel.Value = axisValue;
            fixture.Update();

            float value = channel.Value;

            Assert.Equal(expected, value);
        }

        [Fact]
        public void TestDefaultSolverAddition()
        {
            var fixture = GetRestrictedFixture("Pan", -270, 270, -90, 90);
            Assert.Contains<Solver>(fixture.Solvers, (solver => solver is MovementRestrictionSolver));
        }

        public static Fixture GetRestrictedFixture(string restrictionAxis, int originalMin, int originalMax, int restrictedMin, int restrictedMax)
        {
            MasterController.Initialise();
            JObject options = GetRestrictionOptions(restrictionAxis, restrictedMin, restrictedMax);
            Fixture fixture = FixtureTests.GetMovingFixture(restrictionAxis, originalMin, originalMax, options);
            return fixture;
        }

        public static JObject GetRestrictionOptions(string name, int min, int max)
        {
            JObject options = new JObject(
                new JProperty("axisRestrictions",
                    new JArray(
                        new JObject(
                            new JProperty("name", name),
                            new JProperty("min", min),
                            new JProperty("max", max)
                        )
                    )
                )
            );
            return options;
        }
    }
}
