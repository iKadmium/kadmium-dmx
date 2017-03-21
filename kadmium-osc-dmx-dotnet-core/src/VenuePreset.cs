using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System;
using System.Threading.Tasks;

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

        public async Task Initialize(DatabaseContext context)
        {
            foreach(Fixture fixture in Fixtures)
            {
                await fixture.Initialize(context);
            }
        }
    }
}
