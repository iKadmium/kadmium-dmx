using kadmium_dmx_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_dmx_core.Solvers
{
    public class ApeshitGroupSolver : GroupSolver
    {
        private static readonly int MinimumFixtureCount = 1;

        private bool? lastStrobe;
        private IStrobe Strobe { get; set; }
        public double Coverage { get; set; }
        IEnumerable<Fixture> blackoutFixtures = Enumerable.Empty<Fixture>();

        public ApeshitGroupSolver(Group group, IStrobe strobe, double coverage = 0.2) : base(group, "Apeshit")
        {
            Strobe = strobe;
            lastStrobe = null;
            Coverage = coverage;
        }

        public ApeshitGroupSolver(Group group, double coverage = 0.2) : this(group, ServiceLocator.Get<IStrobe>(), coverage) { }
        public ApeshitGroupSolver(Group group) : this(group, ServiceLocator.Get<IStrobe>()) { }

        public override void Solve(Dictionary<string, FixtureAttribute> Attributes)
        {
            if (Attributes["Apeshit"].Value > 0.0f)
            {
                bool strobeValue = Strobe.GetValue();
                if (strobeValue != lastStrobe)
                {
                    var applicableFixtures = from fixture in Group.Fixtures
                                             where fixture.Solvers.Any(x => x.GetType() == typeof(ApeshitFixtureSolver))
                                             select fixture;

                    int blackoutFixtureCount = GetBlackoutFixtureCount(applicableFixtures.Count());

                    IEnumerable<Fixture> proposedBlackoutFixtures = Enumerable.Empty<Fixture>();
                    if (blackoutFixtureCount > 0)
                    {
                        proposedBlackoutFixtures = applicableFixtures.PickRandom(blackoutFixtureCount);
                        while (proposedBlackoutFixtures.SequenceEqualIgnoreOrder(blackoutFixtures))
                        {
                            proposedBlackoutFixtures = applicableFixtures.PickRandom(blackoutFixtureCount);
                        }
                    }
                    blackoutFixtures = proposedBlackoutFixtures;
                    lastStrobe = strobeValue;
                    foreach (Fixture fixture in applicableFixtures)
                    {
                        fixture.Settables["ApeshitFixtureSelected"].Value = blackoutFixtures.Contains(fixture) ? 0f : 1f;
                    }
                }
            }
        }

        private int GetBlackoutFixtureCount(int applicableFixtureCount)
        {
            int targetCount = (int)Math.Floor((applicableFixtureCount * (1.0 - Coverage)));
            int maximumBlackoutCount = applicableFixtureCount - MinimumFixtureCount;

            int blackoutCount = Math.Min(targetCount, maximumBlackoutCount);

            return blackoutCount;
        }
    }

    public static class EnumerableExtension
    {
        public static IEnumerable<T> PickRandom<T>(this IEnumerable<T> original, int count, Random random = null)
        {
            if (random == null)
            {
                random = new Random();
            }
            List<T> randomItems = new List<T>();
            List<T> originalItems = new List<T>(original);

            for (int i = 0; i < count; i++)
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
