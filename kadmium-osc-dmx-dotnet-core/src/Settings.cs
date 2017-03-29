using System.Collections.Generic;
using System.Linq;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Settings
    {
        public int WebPort { get; set; }
        public int OscPort { get; set; }
        public EnttecProTransmitterSettings EnttecProTransmitter { get; set; }
        public SacnTransmitterSettings SacnTransmitter {get;set;}

        public Settings()
        {
            WebPort = 5000;
            OscPort = 9001;
            SacnTransmitter = new SacnTransmitterSettings();
            EnttecProTransmitter = new EnttecProTransmitterSettings();
        }   
    }

    public class SacnTransmitterSettings
    {
        public int Delay { get; set; }
        public bool Multicast { get; set; }
        public IEnumerable<string> Unicast { get; set; }

        public SacnTransmitterSettings()
        {
            Delay = 0;
            Multicast = true;
            Unicast = Enumerable.Empty<string>();
        }
    }

    public class EnttecProTransmitterSettings
    {
        public int Delay { get; set; }
        public string Port { get; set; }

        public EnttecProTransmitterSettings()
        {
            Delay = 0;
            Port = "";
        }
    }
}
