using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System.Collections.Concurrent;
using System.Threading;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using System;

namespace kadmium_osc_dmx_dotnet_core
{
    public class MasterController : IDisposable
    {
        static int UPDATES_PER_SECOND = 40; // in hz
        static int UPDATE_TIME = 1000 / UPDATES_PER_SECOND;

        public Dictionary<string, Group> Groups { get; private set; }
        public Transmitter Transmitter { get; private set; }
        public Listener Listener { get; private set; }
        public Venue Venue { get; private set; }
        public Strobe Strobe { get; }
        private bool updatesEnabled;
        public bool UpdatesEnabled
        {
            get { return updatesEnabled; }
            set
            {
                updatesEnabled = value;
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
        private Timer updateTimer;
        public Status SolverStatus { get; private set; }

        private static MasterController instance;

        public static MasterController Instance
        {
            get
            {
                return instance;
            }
        }

        public static async Task Initialise()
        {
            JObject settings = await FileAccess.LoadSettings();

            using (var context = new DatabaseContext())
            {
                instance = new MasterController()
                {
                    Groups = context.Groups.ToDictionary(x => x.Name),
                    Transmitter = SACNTransmitter.Load(settings["sacnTransmitter"].Value<JObject>()),
                    Listener = new OSCListener(settings["oscPort"].Value<int>(), "OSC Listener")
                };

                Venue.Status = new Status("No venue loaded");
            }
            instance.updateTimer = new Timer(Instance.UpdateTimer_Elapsed, null, UPDATE_TIME, UPDATE_TIME);
            
            //Instance.UpdatesEnabled = true;
        }

        private MasterController()
        {
            Strobe = new Strobe(20);
            this.SolverStatus = new Status("No Solvers Loaded");
        }

        public void LoadVenue(Venue venue, DatabaseContext context)
        {
            UpdatesEnabled = false;
            Venue?.Deactivate();
            Venue?.Dispose();
            Venue = venue;
            venue.Activate(context);
            UpdatesEnabled = true;
        }

        public void Update()
        {
            foreach (Group group in Groups.Values)
            {
                group.Update();
            }
            Venue?.Update();
        }

        public void Render()
        {
            Venue?.Render();
        }

        private void UpdateTimer_Elapsed(object state)
        {
            if (UpdatesEnabled)
            {
                Update();
            }
            Render();
        }

        public void Dispose()
        {
            updateTimer.Dispose();
            Transmitter?.Dispose();
            Listener?.Dispose();
        }
    }
}
