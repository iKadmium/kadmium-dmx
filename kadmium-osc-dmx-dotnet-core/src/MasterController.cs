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
        public Dictionary<string, Group> Groups { get; set; }
        public List<Listener> Listeners { get; set; }
        public List<Transmitter> Transmitters { get; set; }
        public List<Universe> Universes { get; set; }
        public Strobe Strobe { get; set; }
        public Random Random { get; set; }
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
            instance.Random = new Random();
            instance.Strobe = new Strobe(20);
            instance.Groups = FileAccess.LoadGroups().ToDictionary(x => x.Name, x => x);
            instance.Listeners = FileAccess.LoadListeners().ToList();
            instance.Transmitters = FileAccess.LoadTransmitters().ToList();
        }

        private MasterController()
        {
            Groups = new Dictionary<string, Group>();
            Transmitters = new List<Transmitter>();
            Universes = new List<Universe>();
        }

        public void LoadVenue(string venue)
        {
            Universes.AddRange(FileAccess.LoadVenue(venue));
        }

        public void Update()
        {
            foreach(Group group in Groups.Values)
            {
                group.Update();
            }
            foreach(Universe universe in Universes)
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
