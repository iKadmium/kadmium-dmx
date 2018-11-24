using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx.DataAccess.Mongo
{
    public class MongoGroupStore : MongoStore<string, GroupData>, IGroupStore
    {
        public MongoGroupStore(IMongoDatabase database) : base(database, nameof(GroupData.Name) )
        {
        }
    }
}
