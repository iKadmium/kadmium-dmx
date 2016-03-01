using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Rug.Osc;
using System.Net.Sockets;
using EventSocket;

namespace kadmium_osc_dmx_dotnet_core.Listeners
{
    public class OSCListener : Listener
    {
        public int Port { get; set; }
        public new string DisplayName
        {
            get
            {
                return "OSC Listener [" + Name + "] : " + Port;
            }
        }

        private EventClient listener;

        public OSCListener(int port, string name) : base(name)
        {
            Port = port;

            listener = new EventClient(Port);
            listener.PacketReceived += Listener_PacketReceived;
            Status.Update(StatusCode.NotStarted, "Listening on port " + Port + " - no messages yet");
            
        }

        private void Listener_PacketReceived(object sender, PacketReceivedArgs e)
        {
            OscBundle bundle = OscPacket.Read(e.Packet, e.Packet.Length) as OscBundle;
            foreach(OscMessage message in bundle)
            {
                string[] parts = message.Address.Split('/');
                string groupName = parts[2];
                string attribute = parts[3];
                Group group = MasterController.Instance.Groups[groupName];
                float value = (float)message[0];
                group.Set(attribute, value);
            }
            Status.Update(StatusCode.Running, "Messages received");
        }
        
        public static new OSCListener Load(XElement element)
        {
            int port = int.Parse(element.Attribute("port").Value);
            string name = element.Attribute("id").Value;
            OSCListener listener = new OSCListener(port, name);
            return listener;
        }

        public override void Close()
        {
            listener.StopListening();
            listener.Close();
        }
    }
    
}
