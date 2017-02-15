using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core
{
    public class FixtureEntry
    {
        public int StartChannel { get; set; }
        public string Manufacturer { get; set; }
        public string Type { get; set; }
        public string Group { get; set; }
        public JObject Options { get; set; }
    }

    public class FixtureCollection
    {
        public string Name { get; set; }
        public List<FixtureEntry> FixtureEntries { get; }

        public FixtureCollection() : this("", new List<FixtureEntry>()) { }

        public FixtureCollection(string name, List<FixtureEntry> fixtureEntries)
        {
            Name = name;
            FixtureEntries = fixtureEntries;
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("fixtures",
                    from entry in FixtureEntries
                    select new JObject(
                        new JProperty("channel", entry.StartChannel),
                        new JProperty("type",
                            new JObject(
                                new JProperty("name", entry.Type),
                                new JProperty("manufacturer", entry.Manufacturer)
                            )
                        ),
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
            var fixtureEntries = from fixture in obj["fixtures"].ToArray()
                                 select new FixtureEntry
                                 {
                                     StartChannel = fixture["channel"].Value<int>(),
                                     Type = fixture["type"].Value<JObject>()["name"].Value<string>(),
                                     Manufacturer = fixture["type"].Value<JObject>()["manufacturer"].Value<string>(),
                                     Group = fixture["group"].Value<string>(),
                                     Options = fixture["options"].Value<JObject>()
                                 };
            return new FixtureCollection(name, fixtureEntries.ToList());
        }

    }
}
