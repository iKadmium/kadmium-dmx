﻿using System;
using System.Collections.Generic;
using System.Text;
using kadmium_dmx_data.Types.Fixtures;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;

namespace kadmium_dmx_data.Types.Venues
{
    public class UniverseData : BsonSerializable, IUniverseData
    {
        public string Name { get; set; }
        public int UniverseID { get; set; }
        public IEnumerable<FixtureData> Fixtures { get; set; }
    }
}
