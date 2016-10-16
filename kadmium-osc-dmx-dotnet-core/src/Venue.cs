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
        public IEnumerable<Universe> Universes { get; }

        public Venue(string name, IEnumerable<Universe> universes)
        {
            Name = name;
            Universes = universes;
        }

        public Venue() : this("", Enumerable.Empty<Universe>())
        {
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
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
            MasterController.Instance.UpdatesEnabled = false;
            string name = obj["name"].Value<string>();

            var universes = from universeElement in obj["universes"].Values<JObject>()
                            select Universe.Load(universeElement);

            MasterController.Instance.UpdatesEnabled = true;

            return new Venue(name, universes);
        }

        internal void Update()
        {
            foreach(Universe universe in Universes)
            {
                universe.Update();
            }
        }

        public void Render()
        {
            foreach(Universe universe in Universes)
            {
                universe.Render();
            }
        }
    }
}
