using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    public interface IFixtureData
    {
        ushort Address { get; set; }
        FixtureDefinitionSkeleton Type { get; set; }
        FixtureOptions Options { get; set; }
        string Group { get; set; }
    }
}
