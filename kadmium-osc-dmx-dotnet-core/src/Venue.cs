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
        public IEnumerable<Universe> Universes { get; }

        public Venue(string name, IEnumerable<Universe> universes)
        {
            Name = name;
            Universes = universes;
            Status.Update(StatusCode.Running, Name + " running", this);
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
            try
            {
                MasterController.Instance.UpdatesEnabled = false;
                string name = obj["name"].Value<string>();

                var universesQuery = from universeElement in obj["universes"].Values<JObject>()
                                     select Universe.Load(universeElement);

                var universes = universesQuery.ToList();

                MasterController.Instance.UpdatesEnabled = true;
                return new Venue(name, universes);
            }
            catch(Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, null);
                throw e;
            }
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

        public void Clear()
        {
            foreach(Universe universe in Universes)
            {
                universe.Clear();
            }
        }
    }
}
