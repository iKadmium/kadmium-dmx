using kadmium_dmx_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_core
{
    public class FixtureUpdateEvent
    {
        public int UniverseId { get; set; }
        public int Address { get; set; }
        public IEnumerable<DMXChannel> DmxChannels { get; set; }
        public IEnumerable<FixtureAttribute> Attributes { get; set; }
    }
}
