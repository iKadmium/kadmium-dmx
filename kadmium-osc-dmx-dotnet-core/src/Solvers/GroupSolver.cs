using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public abstract class GroupSolver : Solver
    {
        protected Group Group { get; set; }

        public GroupSolver(Group group, params string[] attributes) : base(group.Settables, attributes)
        {
            Group = group;
        }

        public static GroupSolver Load(XElement element, Group group)
        {
            var subclasses =
                from type in typeof(GroupSolver).GetTypeInfo().Assembly.DefinedTypes
                where type.IsSubclassOf(typeof(GroupSolver))
                select type;

            foreach (TypeInfo subclass in subclasses)
            {
                if (subclass.GetDeclaredMethod("LoadInternal") != null)
                {
                    var methodInfo = subclass.DeclaredMethods.Single(x =>
                    {
                        return x.Name == "LoadInternal"
                            && x.GetParameters().Length == 2
                            && x.GetParameters()[0].ParameterType == typeof(XElement)
                            && x.GetParameters()[1].ParameterType == typeof(Group);
                    });
                    GroupSolver solver = methodInfo.Invoke(null, new object[] { element, group }) as GroupSolver;
                    return solver;
                }
                else
                {
                    var constructorInfo = subclass.DeclaredConstructors.Single(x =>
                    {
                        return x.GetParameters().Length == 1
                            && x.GetParameters()[0].ParameterType == typeof(Group);
                    });

                    GroupSolver solver = constructorInfo.Invoke(new object[] { group }) as GroupSolver;
                    return solver;
                }
            }

            throw new ArgumentException("No such solver as " + element.Name.ToString());
        }
    }
}
