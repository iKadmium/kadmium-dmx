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

    public class VenuePreset
    {
        public string Name { get; set; }
        public List<FixtureEntry> FixtureEntries { get; }

        public VenuePreset() : this("", new List<FixtureEntry>()) { }

        public VenuePreset(string name, List<FixtureEntry> fixtureEntries)
        {
            Name = name;
            FixtureEntries = fixtureEntries;
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("$schema", FileAccess.GetRelativePath(FileAccess.GetVenuePresetLocation(Name), FileAccess.VenuePresetsSchema)),
                new JProperty("name", Name),
                new JProperty("fixtures",
                    from entry in FixtureEntries
                    select new JObject(
                        new JProperty("channel", entry.StartChannel),
                        new JProperty("type",
                            new JObject(
                                new JProperty("model", entry.Type),
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

        public static VenuePreset Load(JObject obj)
        {
            string name = obj["name"].Value<string>();
            var fixtureEntries = from fixture in obj["fixtures"].ToArray()
                                 select new FixtureEntry
                                 {
                                     StartChannel = fixture["channel"].Value<int>(),
                                     Type = fixture["type"].Value<JObject>()["model"].Value<string>(),
                                     Manufacturer = fixture["type"].Value<JObject>()["manufacturer"].Value<string>(),
                                     Group = fixture["group"].Value<string>(),
                                     Options = fixture["options"].Value<JObject>()
                                 };
            return new VenuePreset(name, fixtureEntries.ToList());
        }

    }
}
