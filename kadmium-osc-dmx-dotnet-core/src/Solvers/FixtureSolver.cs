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
                from type in typeof(FixtureSolver).GetTypeInfo().Assembly.DefinedTypes
                where type.IsSubclassOf(typeof(FixtureSolver))
                select type;

            foreach(TypeInfo subclass in subclasses)
            {
                if (element.Name.ToString().ToUpper() == subclass.Name.ToUpper())
                {
                    if(subclass.GetDeclaredMethod("LoadInternal") != null)
                    {
                        var methodInfo = subclass.DeclaredMethods.Single(x => 
                        {
                            return x.Name == "LoadInternal"
                                && x.GetParameters().Length == 2
                                && x.GetParameters()[0].ParameterType == typeof(XElement)
                                && x.GetParameters()[1].ParameterType == typeof(Fixture);
                        });
                        FixtureSolver solver = methodInfo.Invoke(null, new object[] { element, fixture }) as FixtureSolver;
                        return solver;
                    }
                    else
                    {
                        var constructorInfo = subclass.DeclaredConstructors.Single(x =>
                        {
                            return x.GetParameters().Length == 1
                                && x.GetParameters()[0].ParameterType == typeof(Fixture);
                        });
                        
                        FixtureSolver solver = constructorInfo.Invoke(new object[] { fixture }) as FixtureSolver;
                        return solver;
                    }
                }
            }

            throw new ArgumentException("No such solver as " + element.Name.ToString());
        }
    }
}
