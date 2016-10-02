using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Venue
    {
        public string Name { get; }
        public IEnumerable<FixtureCollection> FixtureCollections { get; }

        public Venue(string name, IEnumerable<FixtureCollection> fixtureCollections)
        {
            Name = name;
            FixtureCollections = fixtureCollections;
        }

        public Venue() : this("", Enumerable.Empty<FixtureCollection>())
        {
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("fixtureCollections", 
                    new JArray(
                        from collection in FixtureCollections
                        select collection.Name
                    )
                )
            );

            return obj;
        }

        public static Venue Load(JObject obj)
        {
            string name = obj["name"].Value<string>();
            var fixtureCollections = from collectionName in obj["fixtureCollections"].Values<string>()
                                     select FixtureCollection.Load(FileAccess.LoadFixtureCollection(collectionName));

            return new Venue(name, fixtureCollections);
        }

        public void Activate()
        {
            foreach(FixtureCollection collection in FixtureCollections)
            {
                collection.Activate();
            }
        }
    }
}
