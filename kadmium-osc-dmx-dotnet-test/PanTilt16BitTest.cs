using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using kadmium_osc_dmx_dotnet_core;

namespace kadmium_osc_dmx_dotnet_test
{
    [TestClass]
    public class PanTilt16BitTest
    {
        [ClassInitialize]
        public static void SetupTests(TestContext testContext)
        {
            MasterController.Initialise();
        }

        [TestMethod]
        public void TestRestrictedAxis()
        {
            var first = Tuple.Create(0.0f, (byte)(byte.MaxValue * 0.25));
            var second = Tuple.Create(0.5f, (byte)(byte.MaxValue * 0.5));
            var third = Tuple.Create(1.0f, (byte)(byte.MaxValue * 0.75));

            Fixture fixture = FixtureTest.GetMovingFixture();
            PanTilt16BitSolver solver = new PanTilt16BitSolver(fixture, new[]
                {
                    new RestrictableMovementAxis(fixture.MovementAxis["Pan"], fixture.MovementAxis["Pan"].Min / 2, fixture.MovementAxis["Pan"].Max / 2),
                    new RestrictableMovementAxis(fixture.MovementAxis["Tilt"], fixture.MovementAxis["Tilt"].Min / 2, fixture.MovementAxis["Tilt"].Max / 2)
                });
            fixture.Solvers.Add(solver);

            fixture.Settables["Pan"].Value = first.Item1;
            solver.Solve();
            Assert.AreEqual(fixture.Adapter.Channels["PanCoarse"].ByteValue, first.Item2);

            fixture.Settables["Pan"].Value = second.Item1;
            solver.Solve();
            Assert.AreEqual(fixture.Adapter.Channels["PanCoarse"].ByteValue, second.Item2);

            fixture.Settables["Pan"].Value = third.Item1;
            solver.Solve();
            Assert.AreEqual(fixture.Adapter.Channels["PanCoarse"].ByteValue, third.Item2);
        }

        [TestMethod]
        public void TestPanTilt16Bit()
        {
            var expectedFirst = Tuple.Create(0.0f, (byte)0);
            var expectedSecond = Tuple.Create(0.5f, (byte)127);
            var expectedThird = Tuple.Create(1.0f, (byte)255);
            
            Fixture fixture = FixtureTest.GetMovingFixture();
            PanTilt16BitSolver solver = new PanTilt16BitSolver(fixture, new[]
                {
                    new RestrictableMovementAxis(fixture.MovementAxis["Pan"]),
                    new RestrictableMovementAxis(fixture.MovementAxis["Tilt"])
                });
            fixture.Solvers.Add(solver);

            solver.Attributes["Pan"].Value = expectedFirst.Item1;
            solver.Solve();
            Assert.AreEqual(expectedFirst.Item2, fixture.Adapter.Channels["PanCoarse"].ByteValue);

            solver.Attributes["Pan"].Value = expectedSecond.Item1;
            solver.Solve();
            Assert.AreEqual(expectedSecond.Item2, fixture.Adapter.Channels["PanCoarse"].ByteValue);

            solver.Attributes["Pan"].Value = expectedThird.Item1;
            solver.Solve();
            Assert.AreEqual(expectedThird.Item2, fixture.Adapter.Channels["PanCoarse"].ByteValue);
        }

        [TestMethod]
        public void TestRandomMove()
        {
            Fixture fixture = FixtureTest.GetMovingFixture();
            PanTilt16BitSolver solver = new PanTilt16BitSolver(fixture, new[]
                {
                    new RestrictableMovementAxis(fixture.MovementAxis["Pan"]),
                    new RestrictableMovementAxis(fixture.MovementAxis["Tilt"])
                });
            fixture.Solvers.Add(solver);

            solver.Attributes["RandomMove"].Value = 1.0f;
            solver.Solve();
            var firstPosition = Tuple.Create(fixture.Adapter.Channels["PanCoarse"].Value, fixture.Adapter.Channels["TiltCoarse"].Value);

            for (int i = 0; i < 10; i++)
            {
                solver.Solve();
            }
            var secondPosition = Tuple.Create(fixture.Adapter.Channels["PanCoarse"].Value, fixture.Adapter.Channels["TiltCoarse"].Value);

            for (int i = 0; i < 10; i++)
            {
                solver.Solve();
            }
            var thirdPosition = Tuple.Create(fixture.Adapter.Channels["PanCoarse"].Value, fixture.Adapter.Channels["TiltCoarse"].Value);

            Assert.AreNotEqual(firstPosition, secondPosition);
            Assert.AreNotEqual(secondPosition, thirdPosition);
        }
    }
}
