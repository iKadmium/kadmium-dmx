using kadmium_osc_dmx_dotnet_core.Fixtures;
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
        public Fixture Fixture { get; set; }

        public FixtureSolver(Fixture fixture, params string[] attributes) : base(fixture.Settables, attributes)
        {
            Fixture = fixture;
        }

        public static FixtureSolver Load(XElement element, Fixture fixture)
        {
            var subclasses =
                from assembly in AppDomain.CurrentDomain.GetAssemblies()
                from type in assembly.GetTypes()
                where type.IsSubclassOf(typeof(FixtureSolver))
                select type;

            foreach(Type subclass in subclasses)
            {
                if (element.Name.ToString().ToUpper() == subclass.Name.ToUpper())
                {
                    if(subclass.GetMethod("LoadInternal") != null)
                    {
                        MethodInfo info = subclass.GetMethod("LoadInternal", new Type[] {typeof(XElement), typeof(Fixture)});
                        FixtureSolver solver = info.Invoke(null, new object[] {element, fixture}) as FixtureSolver;
                        return solver;
                    }
                    else
                    {
                        ConstructorInfo info = subclass.GetConstructor(new Type[] { typeof(Fixture) });
                        FixtureSolver solver = info.Invoke(new object[] { fixture }) as FixtureSolver;
                        return solver;
                    }
                }
            }

            throw new ArgumentException("No such solver as " + element.Name.ToString());
        }
    }
}
