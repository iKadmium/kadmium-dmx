using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class FixtureOptions
    {
        public float? MaxBrightness { get; set; }
        public IDictionary<string, MovementAxisOptions> AxisOptions { get; set; }

        public FixtureOptions()
        {
            MaxBrightness = null;
            AxisOptions = new Dictionary<string, MovementAxisOptions>();
        }
    }
}
