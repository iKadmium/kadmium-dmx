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

namespace kadmium_dmx_core
{
    public class MasterController : IDisposable, IMasterController
    {
        public static int UPDATES_PER_SECOND = 40; // in hz
        public static int UPDATE_TIME = 1000 / UPDATES_PER_SECOND;
        public static TimeSpan UPDATE_TIME_SPAN = new TimeSpan(0, 0, 0, 0, UPDATE_TIME);
        public static long MEMORY_LIMIT = (1024 * 1024 * 256);

        public event EventHandler<EventArgs> VenueActivated;

        public Dictionary<string, Group> Groups { get; private set; }
        public List<Transmitter> Transmitters { get; private set; }
        public Listener Listener { get; private set; }
        public Venue Venue { get; private set; }
        public ISettings Settings { get; set; }
        public Strobe Strobe { get; }

        public Task RenderTask { get; set; }

        public bool Rendering { get; set; }
        public bool Solving { get; set; }
        private CancellationTokenSource CancellationTokenSource { get; set; }

        public event EventHandler OnUpdate;

        private bool solversEnabled;
        public bool SolversEnabled
        {
            get { return solversEnabled; }
            set
            {
                solversEnabled = value;
                if (value)
                {
                    int count = (from universe in Venue.Universes
                                 select universe.Fixtures.Count()).Sum();
                    SolverStatus.Update(StatusCode.Success, "Solving for " + count + " fixtures", this);
                }
                else
                {
                    SolverStatus.Update(StatusCode.Error, "Solvers are Disabled", this);
                }
            }
        }

        public bool RenderEnabled { get; set; }
        public Status SolverStatus { get; private set; }

        private async Task RenderLoop()
        {
            Stopwatch stopwatch = new Stopwatch();
            while (!CancellationTokenSource.IsCancellationRequested)
            {
                try
                {
                    stopwatch.Restart();
                    if (SolversEnabled)
                    {
                        Solving = true;
                        Update();
                        Solving = false;
                    }
                    if (RenderEnabled)
                    {
                        Rendering = true;
                        await Render();
                        Rendering = false;
                    }

                    stopwatch.Stop();
                    TimeSpan delayTime = UPDATE_TIME_SPAN - stopwatch.Elapsed;
                    if (delayTime > TimeSpan.Zero)
                    {
                        Thread.Sleep(delayTime);
                    }

                }
                catch (Exception e)
                {
                    Console.Error.WriteLine(e.StackTrace);
                }
            }
        }

        public MasterController(ISettings settings)
        {
            Strobe = new Strobe();
            this.SolverStatus = new Status("No Solvers Loaded");

            Settings = settings;
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
                                Fixtures = new List<IFixtureData>()
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
            solversEnabled = true;
            RenderEnabled = true;
            Rendering = false;
            Solving = false;
            CancellationTokenSource = new CancellationTokenSource();

            RenderTask = Task.Run(RenderLoop);
        }

        public void LoadVenue(IVenueData venue, IDictionary<FixtureDefinitionSkeleton, IFixtureDefinition> definitions)
        {
            SolversEnabled = false;
            Venue?.Dispose();
            Venue = new Venue(venue, definitions);
            Venue.Activate(true);
            VenueActivated?.Invoke(this, new EventArgs());
            SolversEnabled = true;
        }

        public void Update()
        {
            foreach (Group group in Groups.Values)
            {
                group.Update();
            }
            Venue?.Update();
            OnUpdate?.Invoke(this, new EventArgs());
        }

        public async Task Render()
        {
            await (Venue?.Render(Transmitters) ?? Task.CompletedTask);
        }

        public void Dispose()
        {
            RenderTask.Dispose();
            foreach (var transmitter in Transmitters)
            {
                transmitter?.Dispose();
            }
            Listener?.Dispose();
        }

        public void SetGroups(IEnumerable<IGroupData> groupData)
        {
            var groups = from grp in groupData
                         select new Group(grp);

            Groups = groups.ToDictionary(x => x.Name);
        }

        public async Task SetSettings(Settings value)
        {
            RenderEnabled = false;
            while (Rendering)
            {
                await Task.Delay(10);
            }
            foreach (var transmitter in Transmitters)
            {
                transmitter.Dispose();
            }
            Transmitters.Clear();

            Transmitters.Add(new SACNTransmitter(value.SacnTransmitter));
            Transmitters.Add(new EnttecProTransmitter(value.EnttecProTransmitter));
            RenderEnabled = true;
        }

    }
}
