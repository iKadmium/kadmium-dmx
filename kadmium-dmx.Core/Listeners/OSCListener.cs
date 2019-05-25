using kadmium_dmx_core.DataSubscriptions;
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

        private OSCServer listener;

        public override event EventHandler<ListenerUpdate> MessageReceived;

        public OSCListener(int port, IMasterController masterController) : base()
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
                OnStatusUpdate(this, new StatusUpdate(e.Message, StatusCode.Error));
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
                
                MessageReceived?.Invoke(this, new ListenerUpdate(recognised, DateTime.Now, sender.ToString(), e.Message.Address.Contents, value));
            }
        }

        private bool GroupMessageReceived(string groupName, string attribute, float value)
        {
            if (masterController.Groups.ContainsKey(groupName))
            {
                Group group = masterController.Groups[groupName];
                group.Set(attribute, value);
                OnStatusUpdate(this, new StatusUpdate("Messages received", StatusCode.Success));
                return true;
            }
            return false;

        }

        public override void Dispose()
        {
            listener?.Dispose();
        }
    }

}
