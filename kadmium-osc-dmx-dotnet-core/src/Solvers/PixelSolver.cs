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
    public abstract class PixelSolver : Solver
    {
        public Pixel Pixel { get; set; }

        protected PixelSolver(Pixel pixel, params string[] attributes) : base(pixel.Settables, attributes)
        {
            Pixel = pixel;
        }

        public static PixelSolver Load(XElement element, Pixel fixture)
        {
            var subclasses =
                from type in typeof(PixelSolver).GetTypeInfo().Assembly.DefinedTypes
                where type.IsSubclassOf(typeof(PixelSolver))
                select type;

            foreach (TypeInfo subclass in subclasses)
            {
                if (element.Name.ToString().ToUpper() == subclass.Name.ToUpper())
                {
                    if (subclass.GetMethod("LoadInternal") != null)
                    {
                        MethodInfo info = subclass.GetMethod("LoadInternal", new Type[] { typeof(XElement), typeof(Pixel) });
                        PixelSolver solver = info.Invoke(null, new object[] { element, fixture }) as PixelSolver;
                        return solver;
                    }
                    else
                    {
                        ConstructorInfo info = subclass.GetConstructor(new Type[] { typeof(Pixel) });
                        PixelSolver solver = info.Invoke(new object[] { fixture }) as PixelSolver;
                        return solver;
                    }
                }
            }

            throw new ArgumentException("No such solver as " + element.Name.ToString());
        }
    }
}
