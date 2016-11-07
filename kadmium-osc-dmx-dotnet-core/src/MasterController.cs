using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;


namespace kadmium_osc_dmx_dotnet_core
{
    public class MasterController
    {
        static int UPDATES_PER_SECOND = 40; // in hz
        static int UPDATE_TIME = 1000 / UPDATES_PER_SECOND;

        public ConcurrentDictionary<string, Group> Groups { get; private set; }
        public ConcurrentDictionary<string, Listener> Listeners { get; private set; }
        public ConcurrentDictionary<string, Transmitter> Transmitters { get; private set; }
        public Venue Venue { get; private set; }
        public Strobe Strobe { get; }
        public Random Random { get; }
        public bool UpdatesEnabled { get; set; }
        public bool RenderEnabled { get; set; }
        private Timer updateTimer;

        private static MasterController instance;

        public static MasterController Instance
        {
            get
            {
                return instance;
            }
        }

        public static void Initialise()
        {
            instance = new MasterController();
            Instance.Groups = new ConcurrentDictionary<string, Group>();
            foreach(Group group in FileAccess.LoadGroups())
            {
                Instance.Groups.TryAdd(group.Name, group);
            }
            Instance.Transmitters = new ConcurrentDictionary<string, Transmitter>();
            foreach(Transmitter transmitter in FileAccess.LoadTransmitters())
            {
                Instance.Transmitters.TryAdd(transmitter.Name, transmitter);
            }
            Instance.Listeners = new ConcurrentDictionary<string, Listener>();
            foreach(Listener listener in FileAccess.LoadListeners())
            {
                Instance.Listeners.TryAdd(listener.Name, listener);
            }
            Instance.updateTimer = new Timer(Instance.UpdateTimer_Elapsed, null, UPDATE_TIME, UPDATE_TIME);
            Venue.Status = new Status("No Venue Loaded");
        }

        private MasterController()
        {
            Random = new Random();
            Strobe = new Strobe(20);
        }

        public void LoadVenue(string venue)
        {
            Venue?.Clear();
            Venue = Venue.Load(FileAccess.LoadVenue(venue));
        }

        public void Update()
        {
            foreach(Group group in Groups.Values)
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
            if(UpdatesEnabled)
            {
                Update();
            }
            Render();
        }

        public void Close()
        {
            updateTimer.Dispose();
            foreach (Transmitter transmitter in Transmitters.Values)
            {
                transmitter.Close();
            }
            foreach (Listener listener in Listeners.Values)
            {
                listener.Close();
            }
        }
    }
}
