using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;


namespace kadmium_osc_dmx_dotnet_core
{
    public class MasterController
    {
        public Dictionary<string, Group> Groups { get; private set; }
        public List<Listener> Listeners { get; private set; }
        public List<Transmitter> Transmitters { get; private set; }
        public Dictionary<string, Universe> Universes { get; private set; }
        public Venue Venue { get; private set; }
        public Strobe Strobe { get; }
        public Random Random { get; }
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
            Instance.Groups = FileAccess.LoadGroups().ToDictionary(x => x.Name, x => x);
            Instance.Transmitters = FileAccess.LoadTransmitters().ToList();
            Instance.Universes = FileAccess.LoadUniverses().ToDictionary(x => x.Name, x => x);
            Instance.Listeners = FileAccess.LoadListeners().ToList();
        }

        private MasterController()
        {
            Random = new Random();
            Strobe = new Strobe(20);
        }

        public void LoadVenue(string venue)
        {
            foreach(Group group in Groups.Values)
            {
                group.Clear();
            }
            Venue = Venue.Load(FileAccess.LoadVenue(venue));
            Venue.Activate();
        }

        public void Update()
        {
            foreach(Group group in Groups.Values)
            {
                group.Update();
            }
            foreach(Universe universe in Universes.Values)
            {
                universe.Update();
            }
        }

        public void Start()
        {
            updateTimer = new Timer(UpdateTimer_Elapsed, null, 0, 25);
        }

        private void UpdateTimer_Elapsed(object state)
        {
            Update();
        }

        public void Close()
        {
            updateTimer.Dispose();
            foreach (Transmitter transmitter in Transmitters)
            {
                transmitter.Close();
            }
            foreach (Listener listener in Listeners)
            {
                listener.Close();
            }
        }
    }
}
