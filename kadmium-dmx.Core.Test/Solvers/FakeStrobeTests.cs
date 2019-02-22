using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace kadmium_dmx.Core.Test.Solvers
{
    public class FakeStrobeTests
    {
        [Fact]
        public void TestDefaultSolverAddition()
        {
            var fixture = HSBtoRGBSolverTests.GetRGBFixture();
            Assert.Contains<FixtureSolver>(fixture.Solvers, (x => x is FakeStrobeSolver));
        }

        [Theory]
        [InlineData(1.0f)]
        [InlineData(0.4f)]
        public void TestOnOff(float brightness)
        {
            var fixture = HSBtoRGBSolverTests.GetRGBFixture(addDefaultSolvers: false);
            fixture.Solvers.Add(new HSBtoRGBSolver(fixture));
            var strobe = new Mock<IStrobe>();
            var solver = new FakeStrobeSolver(fixture, strobe.Object);
            fixture.Solvers.Add(solver);
            fixture.Settables["Brightness"].Value = brightness;
            fixture.Settables["Strobe"].Value = 1f;

            strobe
                .Setup(x => x.GetValue())
                .Returns(true);
            fixture.Update();
            Assert.Equal(brightness, fixture.FrameSettables["Brightness"].Value);

            strobe
                .Setup(x => x.GetValue())
                .Returns(false);
           fixture.Update();
            Assert.Equal(0f, fixture.FrameSettables["Brightness"].Value);
        }
    }
}
