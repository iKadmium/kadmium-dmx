using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class RestrictableMovementAxis
    {
        public int FixtureMin { get; set; }
        public int FixtureMax { get; set; }
        public int RestrictedMin { get; set; }
        public int RestrictedMax { get; set; }
        public string Name { get; set; }

        public RestrictableMovementAxis(MovementAxis fixtureAxis, int min, int max)
        {
            FixtureMin = fixtureAxis.Min;
            FixtureMax = fixtureAxis.Max;
            RestrictedMin = min;
            RestrictedMax = max;
            Name = fixtureAxis.Name;
        }

        public RestrictableMovementAxis(MovementAxis fixtureAxis) : this(fixtureAxis, fixtureAxis.Min, fixtureAxis.Max) { }

        private int FixtureRange
        {
            get
            {
                return FixtureMax - FixtureMin;
            }
        }

        private int RestrictedRange
        {
            get
            {
                return RestrictedMax - RestrictedMin;
            }
        }

        public float RestrictedToOriginal(float restricted)
        {
            //desired degrees
            float restrictedDegrees = restricted * RestrictedRange + RestrictedMin;
            float fixtureFloat = (restrictedDegrees - FixtureMin) / FixtureRange;
            return fixtureFloat;
        }
    }
}