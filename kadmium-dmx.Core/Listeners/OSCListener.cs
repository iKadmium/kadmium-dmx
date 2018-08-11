using Newtonsoft.Json.Linq;
using OSCforPCL;
using System;
using System.Threading.Tasks;

namespace kadmium_dmx_core.Listeners
{
    public class OSCListener : Listener
    {
        private IMasterController masterController;

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

        public OSCListener(int port, string name, IMasterController masterController) : base(name)
        {
            this.masterController = masterController;
            Port = port;

            try
            {
                listener = new OSCServer(port);
                listener.DefaultOnMessageReceived += Listener_PacketReceived;
                Enabled = true;
            }
            catch (Exception e)
            {
                Status.Update(StatusCode.Error, e.Message, this);
            }
        }

        private void Listener_PacketReceived(object sender, OSCMessageReceivedArgs e)
        {
            if (Enabled)
            {
                bool recognised = false;
                float value = 0.0f;
                try
                {
                    OSCMessage message = e.Message;

                    string[] parts = message.Address.Contents.Split('/');
                    value = (float)message.Arguments[0].GetValue();
                    switch (parts[1])
                    {
                        case "group":
                            recognised = GroupMessageReceived(System.Net.WebUtility.UrlDecode(parts[2]), System.Net.WebUtility.UrlDecode(parts[3]), value);
                            break;
                    }
                }
                catch (Exception)
                {
                    recognised = false;
                }
                MessageReceived?.Invoke(this, new OSCListenerEventArgs(recognised, DateTime.Now, sender.ToString(), e.Message.Address.Contents, value));
            }
        }

        private bool GroupMessageReceived(string groupName, string attribute, float value)
        {
            if (masterController.Groups.ContainsKey(groupName))
            {
                Group group = masterController.Groups[groupName];
                group.Set(attribute, value);
                if (Status.StatusCode != StatusCode.Success)
                {
                    Status.Update(StatusCode.Success, "Messages received", this);
                }
                return true;
            }
            return false;

        }

        public override void Dispose()
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
