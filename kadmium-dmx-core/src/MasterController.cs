using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace kadmium_dmx_core
{
    public class MasterController : IDisposable
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
        public Settings Settings { get; set; }
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

        public static MasterController Instance { get; private set; }

        public static void Initialise(Settings settings)
        {
            Instance = new MasterController()
            {
                Settings = settings,
                Groups = new Dictionary<string, Group>(),
                Transmitters = new List<Transmitter>{
                    SACNTransmitter.Load(settings.SacnTransmitter)
                },
                Listener = new OSCListener(settings.OscPort, "OSC Listener"),
                Venue = new Venue("No Venue", Enumerable.Empty<Universe>())
            };
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                //instance.Transmitters.Add(EnttecProTransmitter.Load(settings.EnttecProTransmitter));
            }
            Instance.Venue.Activate(false);
            Instance.solversEnabled = true;
            Instance.RenderEnabled = true;
            Instance.Rendering = false;
            Instance.Solving = false;
            Instance.CancellationTokenSource = new CancellationTokenSource();

            Instance.RenderTask = Task.Run(async () =>
            {
                Stopwatch stopwatch = new Stopwatch();
                while (!Instance.CancellationTokenSource.IsCancellationRequested)
                {
                    try
                    {
                        stopwatch.Restart();
                        if (Instance.SolversEnabled)
                        {
                            Instance.Solving = true;
                            Instance.Update();
                            Instance.Solving = false;
                        }
                        if (Instance.RenderEnabled)
                        {
                            Instance.Rendering = true;
                            await Instance.Render();
                            Instance.Rendering = false;
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
            });
        }

        public async Task Initialise(DatabaseContext context)
        {
            await context.Database.MigrateAsync();
            Groups.Clear();
            foreach (var grp in context.Groups)
            {
                Groups.Add(grp.Name, grp);
            }
        }

        private MasterController()
        {
            Strobe = new Strobe(20);
            this.SolverStatus = new Status("No Solvers Loaded");
        }

        public void LoadVenue(Venue venue, DatabaseContext context)
        {
            SolversEnabled = false;
            Venue?.Deactivate();
            Venue?.Dispose();
            Venue = venue;
            venue.Activate();
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
            await (Venue?.Render() ?? Task.CompletedTask);
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

        public async Task SetGroups(IEnumerable<Group> groups, DatabaseContext context)
        {
            bool oldUpdatesEnabled = solversEnabled;
            SolversEnabled = false;
            Venue?.Deactivate();
            Groups.Clear();
            foreach (Group grp in groups)
            {
                Groups.Add(grp.Name, grp);
            }
            await (Venue?.Initialize(context) ?? Task.CompletedTask);
            Venue?.Activate();
            if (oldUpdatesEnabled)
            {
                SolversEnabled = true;
            }
        }
    }
}
