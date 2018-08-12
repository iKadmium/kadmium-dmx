using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace kadmium_dmx_test.Solvers
{
    public class AxisRestrictionSolverTests
    {
        [Theory]
        [InlineData(-100, 100, -50, 50, 0.0f, 0.25f)] // [-100 to 100] => [-50 to 50] => 0.0 to 0.25
        [InlineData(-100, 100, -50, 50, 1.0f, 0.75f)]
        [InlineData(-100, 100, 0, 100, 0.0f, 0.5f)]
        [InlineData(-100, 100, 0, 100, 1.0f, 1.0f)]
        [InlineData(-100, 100, -10, 10, 0.5f, 0.5f)]
        [InlineData(-100, 100, 100, -100, 0.0f, 1.0f)]
        [InlineData(-270, 270, 0, 0, 0.0f, 0.5f)]
        [InlineData(-270, 270, 0, 0, 1.0f, 0.5f)]
        public void TestAxisRestriction(int originalMin, int originalMax, int restrictedMin, int restrictedMax, float axisValue, float expected)
        {
            string axisName = "Pan";

            var fixture = GetRestrictedFixture(axisName, originalMin, originalMax, restrictedMin, restrictedMax);

            var channel = fixture.Settables[axisName] as DMXChannel;
            channel.Value = axisValue;
            fixture.Update();

            float value = fixture.FrameSettables[axisName].Value;

            Assert.Equal(expected, value);
        }

        [Theory]
        [InlineData("Pan", -270, 270, -19, 37)]
        [InlineData("Flarb", 0, 10, -5, 4000)]
        public void TestDefaultSolverAddition(string axisName, int originalMin, int originalMax, int restrictedMin, int restrictedMax)
        {
            var fixture = GetRestrictedFixture(axisName, originalMin, originalMax, restrictedMin, restrictedMax);
            Assert.Contains<Solver>(fixture.Solvers, (x => x is MovementRestrictionSolver));
            var solver = fixture.Solvers.Single(x => x is MovementRestrictionSolver) as MovementRestrictionSolver;
            Assert.Equal(originalMin, solver.Axis[axisName].FixtureMin);
            Assert.Equal(originalMax, solver.Axis[axisName].FixtureMax);
            Assert.Equal(restrictedMin, solver.Axis[axisName].RestrictedMin);
            Assert.Equal(restrictedMax, solver.Axis[axisName].RestrictedMax);
        }

        [Fact]
        public void TestUnrestrictedDefaultSolverAddition()
        {
            var fixture = GetUnrestrictedFixture("Pan", -90, 90);
            Assert.DoesNotContain<Solver>(fixture.Solvers, (x => x is MovementRestrictionSolver));
        }

        public static Fixture GetUnrestrictedFixture(string movementAxis, int originalMin, int originalMax)
        {
            Fixture fixture = FixtureTests.GetMovingFixture(movementAxis, originalMin, originalMax);
            return fixture;
        }

        public static Fixture GetRestrictedFixture(string movementAxis, int originalMin, int originalMax, int restrictedMin, int restrictedMax)
        {
            FixtureOptions options = GetRestrictionOptions(movementAxis, restrictedMin, restrictedMax);
            Fixture fixture = FixtureTests.GetMovingFixture(movementAxis, originalMin, originalMax, options);
            return fixture;
        }

        public static FixtureOptions GetRestrictionOptions(string name, int min, int max)
        {
            FixtureOptions options = new FixtureOptions
            {
                AxisRestrictions = new List<MovementAxisRestriction>
                {
                    new MovementAxisRestriction
                    {
                        Name = name,
                        Min = min,
                        Max = max
                    }
                }
            };

            return options;
        }
    }
}
