using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class FixtureOptions
    {
        public float? MaxBrightness { get; set; }
        public IEnumerable<string> AxisInversions { get; set; }
        public IEnumerable<MovementAxisRestriction> AxisRestrictions { get; set; }

        public FixtureOptions()
        {
            MaxBrightness = null;
            AxisInversions = Enumerable.Empty<string>();
            AxisRestrictions = Enumerable.Empty<MovementAxisRestriction>();
        }
    }
}
