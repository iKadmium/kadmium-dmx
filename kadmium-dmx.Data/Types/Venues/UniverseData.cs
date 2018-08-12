using System;
using System.Collections.Generic;
using System.Text;
using kadmium_dmx_data.Types.Fixtures;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using Newtonsoft.Json;

namespace kadmium_dmx_data.Types.Venues
{
    public class UniverseData : IUniverseData
    {
        public string Name { get; set; }
        public int UniverseID { get; set; }
        public IEnumerable<IFixtureData> Fixtures { get; set; }

        public UniverseData()
        {
            Name = "";
            UniverseID = 0;
            Fixtures = new List<IFixtureData>();
        }

        [JsonConstructor]
        public UniverseData(IEnumerable<FixtureData> fixtures) : base()
        {
            Fixtures = fixtures;
        }
    }
}
