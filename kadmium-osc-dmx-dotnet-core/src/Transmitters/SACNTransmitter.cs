using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using kadmium_sacn_core;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public class SACNTransmitter : Transmitter
    {
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
                return "SACN Transmitter [" + Name + "] - Universe " + UniverseID;
            }
        }

        public override void TransmitInternal(byte[] dmx)
        {
            SACNClient.Send(UniverseID, dmx);
        }

        public SACNTransmitter(Guid uuid, Int16 universeID, string name, bool enabled, int port) : base(name, enabled)
        {
            Port = port;
            UniverseID = universeID;
            SACNClient = new SACNSender(uuid, SOURCE_NAME, port);

            Status.Update(StatusCode.Running, "Multicast Sending", this);
        }

        public new static SACNTransmitter Load(JObject element)
        {
            Int16 universeID = element["universeID"].Value<Int16>();
            string id = element["name"].Value<string>();
            bool enabled = true;// bool.Parse(element.Attribute("enabled").Value);
            int port = 6454;//int.Parse(element.Attribute("port").Value);
            SACNTransmitter transmitter = new SACNTransmitter(Guid.NewGuid(), universeID, id, enabled, port);
            return transmitter;
        }

        public override void Close()
        {
            SACNClient.Close();
        }

        public override JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("universeID", UniverseID),
                new JProperty("description", SACNClient.SourceName),
                new JProperty("delay", Delay)
            );

            return obj;
        }
    }

    
}
