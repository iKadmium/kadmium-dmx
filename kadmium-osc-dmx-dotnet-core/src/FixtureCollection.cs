using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class FixtureEntry
    {
        public int StartChannel { get; set; }
        public string Type { get; set; }
        public string Group { get; set; }
        public IEnumerable<string> Options { get; set; }
    }

    public class FixtureCollection
    {
        public string Name { get; set; }
        public string Universe { get; set; }
        public IEnumerable<FixtureEntry> FixtureEntries { get;}
        
        public FixtureCollection() : this("", "", Enumerable.Empty<FixtureEntry>()) { }

        public FixtureCollection(string name, string universe, IEnumerable<FixtureEntry> fixtureEntries)
        {
            Name = name;
            Universe = universe;
            FixtureEntries = fixtureEntries;
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("universe", Universe),
                new JProperty("fixtures",
                    from entry in FixtureEntries
                    select new JObject(
                        new JProperty("channel", entry.StartChannel),
                        new JProperty("type", entry.Type),
                        new JProperty("group", entry.Group),
                        new JProperty("options", entry.Options)
                    )
                )
            );
            return obj;
        }
        
        public static FixtureCollection Load(JObject obj)
        {
            string name = obj["name"].Value<string>();
            string universe = obj["universe"].Value<string>();
            var fixtureEntries = from fixture in obj["fixtures"].ToArray()
                                 select new FixtureEntry
                                 {
                                     StartChannel = fixture["channel"].Value<int>(),
                                     Type = fixture["type"].Value<string>(),
                                     Group = fixture["group"].Value<string>(),
                                     Options = fixture["options"].Values<string>()
                                 };
            return new FixtureCollection(name, universe, fixtureEntries);
        }

        public void Activate()
        {
            Universe universe = MasterController.Instance.Universes[Universe];
            foreach(var entry in FixtureEntries)
            {
                Definition definition = Definition.Load(entry.Type);
                Fixture fixture = new Fixture(definition);
                fixture.StartChannel = entry.StartChannel;
                Group group = MasterController.Instance.Groups[entry.Group];
                group.Fixtures.Add(fixture);
            }
        }
    }
}
