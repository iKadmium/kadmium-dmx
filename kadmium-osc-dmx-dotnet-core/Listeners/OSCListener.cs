using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Rug.Osc;

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

        private OscListener listener;

        public OSCListener(int port, string name) : base(name)
        {
            Port = port;
            listener = new OscListener(port);
            listener.UnknownAddress += Listener_UnknownAddress;
            listener.Connect();
            Status.Update(StatusCode.NotStarted, "Listening on port " + Port + " - no messages yet");
        }

        private void Listener_UnknownAddress(object sender, UnknownAddressEventArgs e)
        {
            listener.Attach(e.Address, (ev) =>
            {
                string[] parts = ev.Address.Split('/');
                string groupName = parts[2];
                string attribute = parts[3];
                Group group = MasterController.Instance.Groups[groupName];
                float value = (float)ev[0];

                group.Set(attribute, value);
            });
            e.Retry = true;
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
            listener.Close();
        }
    }
}
