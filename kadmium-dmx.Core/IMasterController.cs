using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Settings;
using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public interface IMasterController
    {
        Dictionary<string, Group> Groups { get; }
        Venue Venue { get; }
        ITransmitter Transmitter { get; }
        IListener Listener { get; }
        event EventHandler<VenueStatusUpdate> VenueStatusUpdated;
        
        Task LoadVenue(VenueData venue, IDictionary<FixtureDefinitionSkeleton, IFixtureDefinition> definitions, IEnumerable<IGroupData> groups);
        Task SetSettings(Settings value);
    }
}
