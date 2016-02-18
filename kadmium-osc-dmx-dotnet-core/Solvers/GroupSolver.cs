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
        private Group Group { get; set; }

        public GroupSolver(Group group)
        {
            Group = group;
        }

        public static GroupSolver Load(XElement element, Group group)
        {
            var subclasses =
                from assembly in AppDomain.CurrentDomain.GetAssemblies()
                from type in assembly.GetTypes()
                where type.IsSubclassOf(typeof(GroupSolver))
                select type;

            foreach (Type subclass in subclasses)
            {
                if (element.Name.ToString().ToUpper() == subclass.Name.ToUpper())
                {
                    if (subclass.GetMethod("LoadInternal") != null)
                    {
                        MethodInfo info = subclass.GetMethod("LoadInternal", new Type[] { typeof(XElement), typeof(Group) });
                        GroupSolver solver = info.Invoke(null, new object[] { element, group }) as GroupSolver;
                        return solver;
                    }
                    else
                    {
                        ConstructorInfo info = subclass.GetConstructor(new Type[] { typeof(Group) });
                        GroupSolver solver = info.Invoke(new object[] { group }) as GroupSolver;
                        return solver;
                    }
                }
            }

            throw new ArgumentException("No such solver as " + element.Name.ToString());
        }
    }
}
