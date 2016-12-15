using Newtonsoft.Json.Linq;
using OSCforPCL;
using System;

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
        public event EventHandler<OSCListenerEventArgs> MessageReceived;

        public OSCListener(int port, string name) : base(name)
        {
            Port = port;

            try
            {
                listener = new OSCServer(port);
                listener.DefaultOnMessageReceived += Listener_PacketReceived;
                Status.Update(StatusCode.NotStarted, "No messages yet", this);
            }
            catch (Exception e)
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
            bool recognised = false;
            float value = 0.0f;
            if (MasterController.Instance.Groups.ContainsKey(groupName))
            {
                Group group = MasterController.Instance.Groups[groupName];
                value = (float)message.Arguments[0].GetValue();
                group.Set(attribute, value);
                Status.Update(StatusCode.Running, "Messages received", this);
                recognised = true;
            }
            MessageReceived?.Invoke(this, new OSCListenerEventArgs(recognised, DateTime.Now, sender.ToString(), e.Message.Address.Contents, value));
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

    public class OSCListenerEventArgs : EventArgs
    {
        public bool Recognised { get; }
        public DateTime Time { get; }
        public string Source { get; }
        public string Address { get; }
        public float Value { get; }

        public OSCListenerEventArgs(bool recognised, DateTime time, string source, string address, float value)
        {
            Recognised = recognised;
            Time = time;
            Source = source;
            Address = address;
            Value = value;
        }
    }
}
