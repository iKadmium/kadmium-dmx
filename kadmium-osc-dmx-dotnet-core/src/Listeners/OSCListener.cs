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
        public event EventHandler<ListenerEventArgs> MessageReceived;

        public OSCListener(int port, string name) : base(name)
        {
            Port = port;

            try
            {
                listener = new OSCServer(port);
                listener.DefaultOnMessageReceived += Listener_PacketReceived;
                Status.Update(StatusCode.NotStarted, "No messages yet", this);
            }
            catch(Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, this);
            }
        }

        private void Listener_PacketReceived(object sender, OSCMessageReceivedArgs e)
        {
            OSCMessage message = e.Message;

            string[] parts = message.Address.Contents.Split('/');
            string groupName = parts[2];
            string attribute = parts[3];
            if (MasterController.Instance.Groups.ContainsKey(groupName))
            {
                Group group = MasterController.Instance.Groups[groupName];
                float value = (float)message.Arguments[0].GetValue();
                group.Set(attribute, value);
                MessageReceived?.Invoke(this, new ListenerEventArgs(group.Name, attribute, value));
                Status.Update(StatusCode.Running, "Messages received", this);
            }
        }

        public override JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("type", "OSC"),
                new JProperty("port", Port)
            );
            return obj;
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
            listener?.Dispose();
        }
    }

    public class ListenerEventArgs : EventArgs
    {
        public string Attribute { get; }
        public string Group { get; }
        public float Value { get; }

        public ListenerEventArgs(string group, string attribute, float value)
        {
            Attribute = attribute;
            Group = group;
            Value = value;
        }
    }
}
