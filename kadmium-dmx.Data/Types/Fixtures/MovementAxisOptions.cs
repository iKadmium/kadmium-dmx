using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class MovementAxisOptions
    {
        public string Name { get; set; }
        public MovementAxisRestriction Restrictions { get; set; }
        public bool Inverted { get; set; }
    }
}
