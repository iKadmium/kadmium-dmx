using kadmium_dmx_core.DataSubscriptions;
using Newtonsoft.Json.Linq;
using OSCforPCL;
using System;
using System.Threading.Tasks;

namespace kadmium_dmx_core.Listeners
{
    public class OSCListener : Listener
    {
        public int Port { get; set; }

        private OSCServer listener;

        public override event EventHandler<ListenerMessage> MessageReceived;

        public OSCListener(int port) : base()
        {
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
                
                MessageReceived?.Invoke(this, new ListenerMessage(DateTime.Now, sender.ToString(), e.Message.Address.Contents, value));
            }
        }

        private bool GroupMessageReceived(string groupName, string attribute, float value)
        {
                OnStatusUpdate(this, new StatusUpdate("Messages received", StatusCode.Success));
                return true;
        }

        public override void Dispose()
        {
            listener?.Dispose();
        }
    }

}
