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
        
        public Venue(string name, IEnumerable<Universe> universes, float stageWidth, float stageDepth)
        {
            Name = name;
            Universes = new List<Universe>();
            foreach (Universe universe in universes)
            {
                Universes.Add(universe);
            }
        }

        public Venue() : this("", Enumerable.Empty<Universe>(), 3, 2)
        {
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

        public async Task Initialize(DatabaseContext context)
        {
            foreach(var universe in Universes)
            {
                await universe.Initialize(context);
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
