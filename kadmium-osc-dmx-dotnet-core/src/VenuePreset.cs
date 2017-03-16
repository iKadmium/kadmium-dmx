using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core
{
    public class VenuePreset
    {
        public string Name { get; set; }
        public List<Fixture> FixtureEntries { get; set; }

        public int Id { get; set; }

        public VenuePreset() : this("", new List<Fixture>()) { }

        public VenuePreset(string name, List<Fixture> fixtureEntries)
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
                                new JProperty("model", entry.FixtureDefinition.Model),
                                new JProperty("manufacturer", entry.FixtureDefinition.Manufacturer)
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
            using (var context = new DatabaseContext())
            {
                var fixtureEntries = from fixture in obj["fixtures"].ToArray()
                                     select new Fixture
                                     {
                                         StartChannel = fixture["address"].Value<int>(),
                                         FixtureDefinition = context.FixtureDefinitions.Single(x => 
                                            x.Manufacturer == fixture["type"].Value<JObject>()["manufacturer"].Value<string>() &&
                                            x.Model == fixture["type"].Value<JObject>()["model"].Value<string>()
                                         ),
                                         Group = context.Groups.Single(x => x.Name == fixture["group"].Value<string>()),
                                         Options = fixture["options"].Value<JObject>()
                                     };
                return new VenuePreset(name, fixtureEntries.ToList());
            }
        }

    }
}
