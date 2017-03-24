using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Venue : IDisposable, IEquatable<Venue>
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
        
        internal void Update()
        {
            foreach (Universe universe in Universes)
            {
                universe.Update();
            }
        }

        public VenueSkeleton GetSkeleton()
        {
            return new VenueSkeleton
            {
                Id = Id,
                Name = Name
            };
        }

        public async Task Render()
        {
            foreach (Universe universe in Universes)
            {
                await universe.Render();
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

        public bool Equals(Venue other)
        {
            if(other.Name != Name) { return false; }
            foreach(Universe universe in Universes)
            {
                if(!other.Universes.Any(x => x.Equals(universe))) { return false; }
            }
            foreach (Universe universe in other.Universes)
            {
                if (!Universes.Any(x => x.Equals(universe))) { return false; }
            }
            return true;
        }

        public override string ToString()
        {
            return Name;
        }
    }

    public class VenueSkeleton
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
