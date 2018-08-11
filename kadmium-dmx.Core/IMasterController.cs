using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Settings;
using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public interface IMasterController
    {
        void SetGroups(IEnumerable<IGroupData> data);
        Dictionary<string, Group> Groups { get; }
        Venue Venue { get; }
        List<Transmitter> Transmitters { get; }
        Listener Listener { get; }
        Status SolverStatus { get; }

        event EventHandler OnUpdate;

        void LoadVenue(IVenueData venue, IDictionary<FixtureDefinitionSkeleton, IFixtureDefinition> definitions);
        Task SetSettings(Settings value);
    }
}
