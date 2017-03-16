using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Venue : IDisposable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        [NotMapped]
        public static Status Status { get; set; }

        public List<Universe> Universes { get; set; }
        
        public Venue(string name, IEnumerable<Universe> universes)
        {
            Name = name;
            Universes = new List<Universe>();
            foreach (Universe universe in universes)
            {
                Universes.Add(universe);
            }
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
                        from universe in Universes
                        select universe.SerializeForVenue()
                    )
                )
            );

            return obj;
        }

        public static Venue Load(JObject obj)
        {
            try
            {
                string name = obj["name"].Value<string>();

                var universesQuery = from universeElement in obj["universes"].Values<JObject>()
                                     select Universe.Load(universeElement);

                List<Universe> universes = universesQuery.ToList();

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
            foreach (Universe universe in Universes)
            {
                universe.Update();
            }
        }

        public void Render()
        {
            foreach (Universe universe in Universes)
            {
                universe.Render();
            }
        }

        public void Dispose()
        {
            foreach (Universe universe in Universes)
            {
                universe.Dispose();
            }
        }

        public void Activate()
        {
            Universes.ForEach(x => x.Activate());
            Status.Update(StatusCode.Success, Name + " running", this);
        }

        public void Deactivate()
        {
            Universes.ForEach(x => x.Deactivate());
        }
    }
}
