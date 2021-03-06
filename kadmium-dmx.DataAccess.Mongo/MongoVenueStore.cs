﻿using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Venues;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx.DataAccess.Mongo
{
    public class MongoVenueStore : MongoStore<string, VenueData>, IVenueStore
    {
        public MongoVenueStore(IMongoDatabase database) : base(database, nameof(VenueData.Name) )
        {
        }
    }
}
