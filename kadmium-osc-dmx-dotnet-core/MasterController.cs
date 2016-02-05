using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class MasterController
    {
        public List<Group> Groups { get; set; }
        public List<Transmitter> Transmitters { get; set; }
        public List<Universe> Universes { get; set; }

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
            instance.Groups = FileAccess.DeserializeGroups().ToList();
        }

        private MasterController()
        {
            Groups = new List<Group>();
            Transmitters = new List<Transmitter>();
            Universes = new List<Universe>();
        }
    }
}
