using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Venue
    {
        public static Status Status { get; set; }
        public string Name { get; }
        public Dictionary<int, Universe> Universes { get; }

        public Venue(string name, IEnumerable<Universe> universes)
        {
            Name = name;
            Universes = new Dictionary<int, Universe>();
            foreach (Universe universe in universes)
            {
                Universes.Add(universe.UniverseID, universe);
            }
            Status.Update(StatusCode.Success, Name + " running", this);
        }

        public Venue() : this("", Enumerable.Empty<Universe>())
        {
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("$schema", FileAccess.GetRelativePath(FileAccess.GetVenueLocation(Name), FileAccess.VenuesSchema)),
                new JProperty("name", Name),
                new JProperty("universes",
                    new JArray(
                        from universe in Universes.Values
                        select universe.SerializeForVenue()
                    )
                )
            );

            return obj;
        }

        public static async Task<Venue> Load(JObject obj)
        {
            try
            {
                MasterController.Instance.UpdatesEnabled = false;
                string name = obj["name"].Value<string>();

                var universesQuery = from universeElement in obj["universes"].Values<JObject>()
                                     select Universe.Load(universeElement);

                List<Universe> universes = (await Task.WhenAll(universesQuery)).ToList();

                MasterController.Instance.UpdatesEnabled = true;
                return new Venue(name, universes);
            }
            catch (Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, null);
                throw e;
            }
        }

        internal void Update()
        {
            foreach (Universe universe in Universes.Values)
            {
                universe.Update();
            }
        }

        public void Render()
        {
            foreach (Universe universe in Universes.Values)
            {
                universe.Render();
            }
        }

        public void Clear()
        {
            foreach (Universe universe in Universes.Values)
            {
                universe.Clear();
            }
        }
    }
}
