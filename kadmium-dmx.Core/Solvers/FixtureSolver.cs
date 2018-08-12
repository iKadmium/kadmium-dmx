using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_core.Solvers
{
    public abstract class FixtureSolver : Solver
    {
        public FixtureSolver(Fixture fixture, params string[] attributes)
        {
            foreach (var attributeName in attributes)
            {
                if (!fixture.Settables.ContainsKey(attributeName))
                {
                    fixture.Settables.Add(attributeName, new GroupSolverAttribute(attributeName));
                }
                if (!fixture.FrameSettables.ContainsKey(attributeName))
                {
                    fixture.FrameSettables.Add(attributeName, new GroupSolverAttribute(attributeName));
                }
            }
        }

        public static IEnumerable<FixtureSolver> GetDefaultSolvers(Fixture fixture, IFixtureDefinition definition, FixtureOptions options)
        {
            List<FixtureSolver> solvers = new List<FixtureSolver>();
            if (MasterAtFullSolver.SuitableFor(definition))
            {
                solvers.Add(new MasterAtFullSolver(fixture));
            }
            if (FakeUVSolver.SuitableFor(definition))
            {
                solvers.Add(new FakeUVSolver(fixture));
            }
            if (FakeStrobeSolver.SuitableFor(definition))
            {
                solvers.Add(new FakeStrobeSolver(fixture));
            }
            if (ApeshitFixtureSolver.SuitableFor(definition))
            {
                solvers.Add(new ApeshitFixtureSolver(fixture));
            }
            if (HSBtoRGBWSolver.SuitableFor(definition))
            {
                solvers.Add(new HSBtoRGBWSolver(fixture));
            }
            if (HSBtoRGBSolver.SuitableFor(definition))
            {
                solvers.Add(new HSBtoRGBSolver(fixture));
            }
            if (HSBtoColorWheelSolver.SuitableFor(definition))
            {
                solvers.Add(new HSBtoColorWheelSolver(fixture, definition));
            }
            if (BrightnessLimiterSolver.SuitableFor(definition, options))
            {
                solvers.Add(new BrightnessLimiterSolver(fixture, options));
            }
            if (RandomMove.SuitableFor(definition))
            {
                solvers.Add(new RandomMove(fixture));
            }
            if (MovementRestrictionSolver.SuitableFor(definition, options))
            {
                solvers.Add(new MovementRestrictionSolver(fixture, options));
            }
            if (MovementInversionSolver.SuitableFor(definition, options))
            {
                solvers.Add(new MovementInversionSolver(fixture, definition, options));
            }
            if (PanTilt16BitSolver.SuitableFor(definition))
            {
                solvers.Add(new PanTilt16BitSolver(fixture, definition));
            }
            if(FireSafetySolver.SuitableFor(definition))
            {
                solvers.Add(new FireSafetySolver(fixture));
            }
            return solvers;
        }
    }
}
