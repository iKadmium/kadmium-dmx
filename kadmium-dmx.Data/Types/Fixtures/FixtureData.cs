using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class FixtureData : IFixtureData
    {
        public ushort Address { get; set; }
        public FixtureDefinitionSkeleton Type { get; set; }
        public FixtureOptions Options { get; set; }
        public string Group { get; set; }
    }
}
