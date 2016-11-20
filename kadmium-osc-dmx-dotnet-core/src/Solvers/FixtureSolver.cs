using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public abstract class FixtureSolver : Solver
    {
     
        public FixtureSolver(Fixture fixture, params string[] attributes) : base(fixture.Settables, fixture.FrameSettables, attributes)
        { }

        public static IEnumerable<FixtureSolver> GetDefaultSolvers(Fixture fixture, JObject options)
        {
            List<FixtureSolver> solvers = new List<FixtureSolver>();
            if (MasterAtFullSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new MasterAtFullSolver(fixture));
            }
            if(FakeUVSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new FakeUVSolver(fixture));
            }
            if (FakeStrobeSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new FakeStrobeSolver(fixture));
            }
            if(ApeshitFixtureSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new ApeshitFixtureSolver(fixture));
            }
            if (HSBtoRGBSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new HSBtoRGBSolver(fixture));
            }
            if (HSBtoColorWheelSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new HSBtoColorWheelSolver(fixture));
            }
            if (BrightnessLimiterSolver.SuitableFor(fixture.Definition, options))
            {
                solvers.Add(new BrightnessLimiterSolver(fixture, options));
            }
            if (RandomMove.SuitableFor(fixture.Definition))
            {
                solvers.Add(new RandomMove(fixture));
            }
            if (MovementRestrictionSolver.SuitableFor(fixture.Definition, options))
            {
                solvers.Add(new MovementRestrictionSolver(fixture, options));
            }
            if (MovementInversionSolver.SuitableFor(fixture.Definition, options))
            {
                solvers.Add(new MovementInversionSolver(fixture, options));
            }
            if (PanTilt16BitSolver.SuitableFor(fixture.Definition))
            {
                solvers.Add(new PanTilt16BitSolver(fixture));
            }
            return solvers;
        }
    }
}
