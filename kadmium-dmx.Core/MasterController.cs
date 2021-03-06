﻿using kadmium_dmx_core.Fixtures;
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

namespace kadmium_dmx_core
{
    public class MasterController : IDisposable, IMasterController
    {
        public static long MEMORY_LIMIT = (1024 * 1024 * 256);

        public event EventHandler<EventArgs> VenueActivated;

        public Dictionary<string, Group> Groups { get; private set; }
        public List<Transmitter> Transmitters { get; private set; }
        public Listener Listener { get; private set; }
        public Venue Venue { get; private set; }
        public ISettings Settings { get; private set; }
        public Renderer Renderer { get; }

        public MasterController(ISettings settings)
        {
            Settings = settings;
            ServiceLocator.Get<IStrobe>().Frequency = settings.StrobeEffectFrequency;
            Groups = new Dictionary<string, Group>();
            Transmitters = new List<Transmitter>{
                new SACNTransmitter(settings.SacnTransmitter)
            };
            Listener = new OSCListener(settings.OscPort, "OSC Listener", this);
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
                new Dictionary<FixtureDefinitionSkeleton, IFixtureDefinition>()
            );

            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                //instance.Transmitters.Add(EnttecProTransmitter.Load(settings.EnttecProTransmitter));
            }
            Venue.Activate(false);
            Renderer = new Renderer(this);
        }

        public async Task LoadVenue(IVenueData venue, IDictionary<FixtureDefinitionSkeleton, IFixtureDefinition> definitions, IEnumerable<IGroupData> groupData)
        {
            await Renderer.Stop();
            var groups = from grp in groupData
                         select new Group(grp);

            Groups = groups.ToDictionary(x => x.Name);
            Venue?.Dispose();
            Venue = new Venue(venue, definitions);
            var fixtureGroups = from universe in Venue.Universes
                                from fixture in universe.Fixtures
                                group fixture by fixture.Group into groupName
                                select groupName;
            foreach (var fixtureGroup in fixtureGroups)
            {
                Groups[fixtureGroup.Key].Fixtures.AddRange(fixtureGroup);
            }

            Venue.Activate(true);
            VenueActivated?.Invoke(this, new EventArgs());
            Renderer.Start();
        }

        public void Dispose()
        {
            Renderer.Dispose();
            foreach (var transmitter in Transmitters)
            {
                transmitter?.Dispose();
            }
            Listener?.Dispose();
        }

        public async Task SetSettings(Settings value)
        {
            await Renderer.Stop();
            foreach (var transmitter in Transmitters)
            {
                transmitter.Dispose();
            }
            Transmitters.Clear();

            Transmitters.Add(new SACNTransmitter(value.SacnTransmitter));
            ServiceLocator.Get<IStrobe>().Frequency = value.StrobeEffectFrequency;
            Renderer.Start();
        }

    }
}
