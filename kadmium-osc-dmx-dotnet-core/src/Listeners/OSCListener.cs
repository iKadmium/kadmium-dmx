using kadmium_osc_dmx_dotnet_core.Looks;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using OSCforPCL;
using System;
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
        public event EventHandler<OSCListenerEventArgs> MessageReceived;

        public OSCListener(int port, string name) : base(name)
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
                Status.Update(StatusCode.Error, e.Message, this);
            }
        }

        private async void Listener_PacketReceived(object sender, OSCMessageReceivedArgs e)
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
                        case "look":
                            recognised = await LookMessageReceived(System.Net.WebUtility.UrlDecode(parts[2]), value);
                            break;
                        case "venue":
                            recognised = await VenueMessageReceived(System.Net.WebUtility.UrlDecode(parts[2]), value);
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

        private async Task<bool> VenueMessageReceived(string venueName, float value)
        {
            if (value == 1)
            {
                try
                {
                    var context = DatabaseContext.GetContext();
                    var venue = await context.LoadVenue(venueName);
                    MasterController.Instance.LoadVenue(venue, context);
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
            return false;
        }

        private async Task<bool> LookMessageReceived(string lookName, float value)
        {
            using (var context = DatabaseContext.GetContext())
            {
                Look look = await context.Looks.SingleOrDefaultAsync(x => x.Name == lookName);
                if (look != null)
                {
                    look = await context.LoadLook(look.Id);
                    look.Activate(value);
                    return true;
                }
                else
                {
                    return false;
                }
            }

        }

        private bool GroupMessageReceived(string groupName, string attribute, float value)
        {
            if (MasterController.Instance.Groups.ContainsKey(groupName))
            {
                Group group = MasterController.Instance.Groups[groupName];
                group.Set(attribute, value);
                if (Status.StatusCode != StatusCode.Success)
                {
                    Status.Update(StatusCode.Success, "Messages received", this);
                }
                return true;
            }
            return false;

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
