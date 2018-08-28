using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Mongo
{
    public class MongoGroupStore : MongoStore<string, IGroupData>, IGroupStore
    {
        public MongoGroupStore(IMongoDatabase database) : base(database, nameof(GroupData.Name) )
        {
        }
    }
}
