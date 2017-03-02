using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test.Solvers
{
    public class BrightnessLimiterSolverTests
    {
        [Fact]
        public void TestDefaultSolverAddition()
        {
            var options = GetLimitedOptions(0.5f);
            var fixture = HSBtoRGBSolverTests.GetRGBFixture(options);
            Assert.Contains(fixture.Solvers, (x => x is BrightnessLimiterSolver));
        }

        [Theory]
        [InlineData(0.5f)]
        [InlineData(0.25f)]
        public void TestBrightnessLimit(float limit)
        {
            var options = GetLimitedOptions(limit);
            var fixture = HSBtoRGBSolverTests.GetRGBFixture(options);
            fixture.Settables["Brightness"].Value = 1f;
            fixture.Update();
            Assert.Equal(limit, fixture.Settables["Red"].Value);
            Assert.Equal(limit, fixture.Settables["Green"].Value);
            Assert.Equal(limit, fixture.Settables["Blue"].Value);
        }

        static JObject GetLimitedOptions(float limit)
        {
            JObject obj = new JObject(
                new JProperty("maxBrightness", limit)
            );
            return obj;
        }
    }
}
