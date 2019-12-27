using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Types.Venues
{
    [BsonSerializer(typeof(ImpliedImplementationInterfaceSerializer<IVenueData, VenueData>))]
    public interface IVenueData
    {
        string Name { get; set; }
        IList<UniverseData> Universes { get; set; }
    }
}
