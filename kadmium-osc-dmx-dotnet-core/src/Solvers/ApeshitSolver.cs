using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class ApeshitSolver : GroupSolver
    {
        private bool? lastStrobe;
        private Strobe Strobe { get; set; }
        public double Coverage { get; set; }
        IEnumerable<Fixture> blackoutFixtures = Enumerable.Empty<Fixture>();

        public ApeshitSolver(Group group, Strobe strobe, double coverage = 0.1) : base(group, "Apeshit")
        {
            Strobe = strobe;
            lastStrobe = null;
            Coverage = coverage;
        }

        public ApeshitSolver(Group group, double coverage = 0.1) : this(group, MasterController.Instance.Strobe, coverage) { }
        public ApeshitSolver(Group group) : this(group, MasterController.Instance.Strobe) { }

        public override void Solve()
        {
            if (Attributes["Apeshit"].Value > 0.0f)
            {
                bool strobeValue = Strobe.GetValue();
                if (strobeValue != lastStrobe)
                {
                    int count = (int)Math.Floor(Group.Fixtures.Count * (1.0 - Coverage));
                    IEnumerable<Fixture> proposedBlackoutFixtures = Group.Fixtures.PickRandom(count);
                    while(proposedBlackoutFixtures.SequenceEqualIgnoreOrder(blackoutFixtures))
                    {
                        proposedBlackoutFixtures = Group.Fixtures.PickRandom(count);
                    }
                    blackoutFixtures = proposedBlackoutFixtures;   
                    lastStrobe = strobeValue;
                }
                foreach (Fixture fixture in blackoutFixtures)
                {
                    FakeStrobeSolver.BlackoutFixture(fixture);
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
