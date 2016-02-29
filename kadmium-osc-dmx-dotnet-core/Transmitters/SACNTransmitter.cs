using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using kadmium_sacn;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    class SACNTransmitter : Transmitter
    {
        static String MULTICAST_ADDRESS = "multicast";
        static string SOURCE_NAME = "Kadmium-OSC-DMX";
        public Int16 UniverseID { get; set; }
        private SACNSender SACNClient { get; set; }
        public IPAddress UnicastAddress { get; set; }
        public bool Multicast { get { return UnicastAddress != null; } }
        public int Port { get; set; }

        public new string DisplayName
        {
            get
            {
                return "SACN Transmitter [" + Name + "] : " + Address + ":" + Port;
            }
        }

        public override void TransmitInternal(byte[] dmx)
        {
            SACNClient.Send(UniverseID, dmx);
        }

        public SACNTransmitter(Guid uuid, Int16 universeID, string address, string name, bool enabled, int port) : base(name, address, enabled)
        {
            Port = port;
            UniverseID = universeID;
            SACNClient = new SACNSender(uuid, SOURCE_NAME, port);
            
            if(address == MULTICAST_ADDRESS)
            {
                Status.Update(StatusCode.Running, "Multicast Sending");
            }
            else
            {
                Status.Update(StatusCode.Running, "Unicast Sending");
                UnicastAddress = IPAddress.Parse(address);
            }
            
        }

        public new static SACNTransmitter Load(XElement element)
        {
            Guid uuid = Guid.Parse(element.Attribute("uuid").Value);
            Int16 universeID = Int16.Parse(element.Attribute("universeID").Value);
            string address = element.Attribute("address").Value;
            string id = element.Attribute("id").Value;
            bool enabled = bool.Parse(element.Attribute("enabled").Value);
            int port = int.Parse(element.Attribute("port").Value);
            SACNTransmitter transmitter = new SACNTransmitter(uuid, universeID, address, id, enabled, port);
            return transmitter;
        }

        public override void Close()
        {
            SACNClient.Close();
        }
    }

    
}
