using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public class Venue : IDisposable
    {
        public string Name { get; set; }
        public List<Universe> Universes { get; set; }
        private event EventHandler<VenueStatusUpdate> VenueStatusUpdated;
        public IVenueData SourceData { get; }

        public Venue(IVenueData data, IDictionary<FixtureDefinitionSkeleton, IFixtureDefinition> fixtureDefinitions, EventHandler<VenueStatusUpdate> venueStatusUpdated)
        {
            Name = data.Name;
            var universes = from universeData in data.Universes
                            select new Universe(universeData, fixtureDefinitions);
            Universes = universes.ToList();
            VenueStatusUpdated = venueStatusUpdated;
            SourceData = data;
        }

        internal void Update()
        {
            foreach (Universe universe in Universes)
            {
                universe.Render();
            }
        }
        
        public async Task Render(ITransmitter transmitter)
        {
            foreach (Universe universe in Universes)
            {
                await universe.Transmit(transmitter);
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
            VenueStatusUpdate statusUpdate = new VenueStatusUpdate(Name + " running", StatusCode.Success, SourceData);
            VenueStatusUpdated?.Invoke(this, statusUpdate);
        }

        public override string ToString()
        {
            return Name;
        }
    }
}
