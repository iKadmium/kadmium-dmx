using Newtonsoft.Json.Linq;
using OSCforPCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        private OSCServer listener;

        public OSCListener(int port, string name) : base(name)
        {
            Port = port;

            listener = new OSCServer(port);
            listener.DefaultOnMessageReceived += Listener_PacketReceived;
            Status.Update(StatusCode.NotStarted, "Listening on " + string.Join(",", listener.GetListenAddresses()) + ":" + Port + " - no messages yet");
        }

        private void Listener_PacketReceived(object sender, OSCMessageReceivedArgs e)
        {
            OSCMessage message = e.Message;

            string[] parts = message.Address.Contents.Split('/');
            string groupName = parts[2];
            string attribute = parts[3];
            Group group = MasterController.Instance.Groups[groupName];
            float value = (float)message.Arguments[0].GetValue();
            group.Set(attribute, value);
            Status.Update(StatusCode.Running, "Messages received");
        }
        
        public static new OSCListener Load(JObject element)
        {
            int port = element["port"].Value<int>();
            string name = element["name"].Value<string>();
            OSCListener listener = new OSCListener(port, name);
            return listener;
        }

        public override void Close()
        {
            listener.Dispose();
        }
    }
    
}
