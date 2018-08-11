using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_core.Transmitters;

namespace kadmium_dmx_core
{
    public class Venue : IDisposable
    {
        public string Name { get; set; }
        public static Status Status { get; set; }
        public List<Universe> Universes { get; set; }

        public Venue(IVenueData data, IDictionary<FixtureDefinitionSkeleton, FixtureDefinition> fixtureDefinitions)
        {
            Name = data.Name;
            var universes = from universeData in data.Universes
                            select new Universe(universeData, fixtureDefinitions);
            Universes = universes.ToList();
        }

        internal void Update()
        {
            foreach (Universe universe in Universes)
            {
                universe.Render();
            }
        }
        
        public async Task Render(IEnumerable<Transmitter> transmitters)
        {
            foreach (Universe universe in Universes)
            {
                await universe.Transmit(transmitters);
            }
        }

        public void Dispose()
        {
            foreach (Universe universe in Universes)
            {
                universe.Dispose();
            }
        }
        
        public void Activate(bool updateStatus = true)
        {
            if (Status == null)
            {
                Status = new Status();
            }
            if (updateStatus)
            {
                Status.Update(StatusCode.Success, Name + " running", this);
            }
        }

        public override string ToString()
        {
            return Name;
        }
    }
}
