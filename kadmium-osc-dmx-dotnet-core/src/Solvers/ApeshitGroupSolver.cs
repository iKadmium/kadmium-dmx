using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class ApeshitGroupSolver : GroupSolver
    {
        private bool? lastStrobe;
        private Strobe Strobe { get; set; }
        public double Coverage { get; set; }
        IEnumerable<Fixture> blackoutFixtures = Enumerable.Empty<Fixture>();

        public ApeshitGroupSolver(Group group, Strobe strobe, double coverage = 0.2) : base(group, "Apeshit")
        {
            Strobe = strobe;
            lastStrobe = null;
            Coverage = coverage;
        }

        public ApeshitGroupSolver(Group group, double coverage = 0.2) : this(group, MasterController.Instance.Strobe, coverage) { }
        public ApeshitGroupSolver(Group group) : this(group, MasterController.Instance?.Strobe ?? new Strobe(20.0)) { }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            if (Attributes["Apeshit"].Value > 0.0f)
            {
                bool strobeValue = Strobe.GetValue();
                if (strobeValue != lastStrobe)
                {
                    int count = (int)Math.Floor((double)(Group.Fixtures.Count * (1.0 - Coverage)));
                    while(count > Group.Fixtures.Count && count > 0)
                    {
                        count--;
                    }
                    var applicableFixtures = from fixture in Group.Fixtures
                                             where fixture.Solvers.Any(x => x.GetType() == typeof(ApeshitFixtureSolver))
                                             select fixture;
                    if (applicableFixtures.Count() > count)
                    {
                        IEnumerable<Fixture> proposedBlackoutFixtures = applicableFixtures.PickRandom(count);
                        while (proposedBlackoutFixtures.SequenceEqualIgnoreOrder(blackoutFixtures))
                        {
                            proposedBlackoutFixtures = applicableFixtures.PickRandom(count);
                        }
                        blackoutFixtures = proposedBlackoutFixtures;
                        lastStrobe = strobeValue;
                        foreach (Fixture fixture in applicableFixtures)
                        {
                            fixture.Settables["ApeshitFixtureSelected"].Value = blackoutFixtures.Contains(fixture) ? 1f : 0f;
                        }
                    }
                }
            }
        }
    }

    public static class EnumerableExtension
    {
        public static IEnumerable<T> PickRandom<T>(this IEnumerable<T> original, int count, Random random = null)
        {
            if(random == null)
            {
                random = new Random();
            }
            List<T> randomItems = new List<T>();
            List<T> originalItems = new List<T>(original);
            
            for(int i = 0; i < count; i++)
            {
                int current = random.Next(originalItems.Count);
                T item = originalItems.Skip(current).First();
                randomItems.Add(item);
                originalItems.Remove(item);
            }

            return randomItems;
        }

        public static bool SequenceEqualIgnoreOrder<T>(this IEnumerable<T> first, IEnumerable<T> second)
        {
            return second.Except(first).Count() == 0 && first.Except(second).Count() == 0;
        }
    }
}
