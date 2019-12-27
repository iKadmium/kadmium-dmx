using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using kadmium_dmx_data.Types.Settings;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types;
using System.Collections.Concurrent;
using kadmium_dmx_core.DataSubscriptions;

namespace kadmium_dmx_core
{
    public class MasterController : IDisposable, IMasterController
    {
        public Dictionary<string, Group> Groups { get; private set; }
        public ITransmitter Transmitter { get; }
        public IListener Listener { get; private set; }
        public Venue Venue { get; private set; }
        public ISettings Settings { get; private set; }
        public Renderer Renderer { get; }
        public event EventHandler<VenueStatusUpdate> VenueStatusUpdated;

        public MasterController(ISettings settings, ITransmitter transmitter, IListener listener)
        {
            Settings = settings;
            ServiceLocator.Get<IStrobe>().Frequency = settings.StrobeEffectFrequency;
            Groups = new Dictionary<string, Group>();
            Transmitter = transmitter;
            Listener = listener;
            Listener.MessageReceived += Listener_MessageReceived;
            Venue = new Venue(
                new VenueData
                {
                    Name = "No Venue",
                    Universes = new[] {
                            new UniverseData
                            {
                                Name = "Default Universe",
                                UniverseID = 1,
                                Fixtures = new List<FixtureData>()
                            }
                    }
                },
                new Dictionary<FixtureDefinitionSkeleton, IFixtureDefinition>(),
                VenueStatusUpdated
            );

            Venue.Activate();
            Renderer = new Renderer(this);
        }

        private void Listener_MessageReceived(object sender, ListenerMessage e)
        {
            var addressParts = e.Address.Split("/", StringSplitOptions.RemoveEmptyEntries);
            switch(addressParts[0])
            {
                case "group":
                    var groupName = addressParts[1];
                    if(this.Groups.ContainsKey(groupName))
                    {
                        var attribute = addressParts[2];
                        this.Groups[groupName].Set(attribute, e.Value);
                    }
                    break;
            }
        }

        public async Task LoadVenue(VenueData venue, IDictionary<FixtureDefinitionSkeleton, IFixtureDefinition> definitions, IEnumerable<IGroupData> groupData)
        {
            await Renderer.Stop();
            var groups = from grp in groupData
                         select new Group(grp);

            Groups = groups.ToDictionary(x => x.Name);
            Venue?.Dispose();
            Venue = new Venue(venue, definitions, VenueStatusUpdated);
            var fixtureGroups = from universe in Venue.Universes
                                from fixture in universe.Fixtures
                                group fixture by fixture.Group into groupName
                                select groupName;
            foreach (var fixtureGroup in fixtureGroups)
            {
                Groups[fixtureGroup.Key].Fixtures.AddRange(fixtureGroup);
            }

            Venue.Activate();
            Renderer.Start();
        }

        public void Dispose()
        {
            Renderer.Dispose();
            Transmitter?.Dispose();
            Listener?.Dispose();
        }

        public async Task SetSettings(Settings value)
        {
            await Renderer.Stop();
            Transmitter?.Dispose();

            Transmitter.SetSettings(value);
            ServiceLocator.Get<IStrobe>().Frequency = value.StrobeEffectFrequency;
            Renderer.Start();
        }

    }
}
