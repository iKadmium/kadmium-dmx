using kadmium_dmx_core;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test.Solvers
{
    public class FireSafetySolverTests
    {
        [Fact]
        public void TestFireSafetySolverAdded()
        {
            Fixture fixture = FixtureTests.GetFireFixture(true);
            Assert.Contains(fixture.Solvers, (x => x is FireSafetySolver));
        }

        [Fact]
        public void TestFireSafetyPreventsActivation()
        {
            Fixture fixture = FixtureTests.GetFireFixture(true);
            fixture.Settables["FireActivate"].Value = 1f;
            fixture.Settables["FireSafety"].Value = 0f;
            fixture.Update();
            Assert.Equal(0f, fixture.FrameSettables["Fire"].Value);
        }

        [Fact]
        public void TestFireSafetyDecays()
        {
            Fixture fixture = FixtureTests.GetFireFixture(true);
            fixture.Settables["FireSafety"].Value = 1f;
            fixture.Update();
            Assert.True(fixture.Settables["FireSafety"].Value > 0f);
            float updatesToDecay = FireSafetySolver.DecayTime * MasterController.UPDATES_PER_SECOND;
            int decayUpdatesInt = (int)Math.Ceiling(updatesToDecay);
            for (int i = 0; i < decayUpdatesInt; i++)
            {
                fixture.Update();
            }
            Assert.Equal(0f, fixture.Settables["FireSafety"].Value);
        }

        [Theory]
        [InlineData(0.5f)]
        [InlineData(0.75f)]
        [InlineData(1f)]
        public void TestFireHeight(float activateValue)
        {
            Fixture fixture = FixtureTests.GetFireFixture(true);
            fixture.Settables["FireSafety"].Value = 1f;
            fixture.Settables["FireActivate"].Value = activateValue;
            fixture.Update();
            Assert.Equal(activateValue, fixture.FrameSettables["FireHeight"].Value);
            Assert.Equal(1f, fixture.FrameSettables["Fire"].Value);
        }
    }
}
