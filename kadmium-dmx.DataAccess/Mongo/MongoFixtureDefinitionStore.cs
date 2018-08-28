using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Mongo
{
    public class MongoFixtureDefinitionStore : MongoStore<FixtureDefinitionSkeleton, IFixtureDefinition>, IFixtureDefinitionStore
    {
        public MongoFixtureDefinitionStore(IMongoDatabase database) : base(database, (nameof(FixtureDefinition.Skeleton)))
        {
        }
    }
}
