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
        public List<Fixture> Fixtures { get; set; }

        public int Id { get; set; }

        public VenuePreset() : this("", new List<Fixture>()) { }

        public VenuePreset(string name, List<Fixture> fixtures)
        {
            Name = name;
            Fixtures = fixtures;
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("$schema", FileAccess.GetRelativePath(FileAccess.GetVenuePresetLocation(Name), FileAccess.VenuePresetsSchema)),
                new JProperty("name", Name),
                new JProperty("fixtures",
                    from entry in Fixtures
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

        public static VenuePreset Load(JObject obj, DatabaseContext context)
        {
            string name = obj["name"].Value<string>();
            var fixtureEntries = from fixture in obj["fixtures"].Values<JObject>()
                                 select Fixture.Load(fixture, context);
            return new VenuePreset(name, fixtureEntries.ToList());
        }

    }
}
