using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class OSCListenerLive : WebSocketHandler
    {
        public OSCListener Listener { get; }

        public OSCListenerLive()
        {
            Listener = MasterController.Instance.Listener as OSCListener;
            Listener.MessageReceived += Listener_MessageReceived;
        }

        private async void Listener_MessageReceived(object sender, OSCListenerEventArgs e)
        {
            WebSocketMessage<OSCListenerUpdateMessage> message = new WebSocketMessage<OSCListenerUpdateMessage>(
                "addMessage",
                new OSCListenerUpdateMessage
                {
                    Recognised = e.Recognised,
                    Time = e.Time,
                    Source = e.Source,
                    Address = e.Address,
                    Value = e.Value
                }
            );
            await Send(message);
        }

        public override void Dispose()
        {
            Listener.MessageReceived -= Listener_MessageReceived;
        }
    }

    public class OSCListenerUpdateMessage
    {
        public bool Recognised { get; set; }
        public System.DateTime Time { get; set; }
        public string Source { get; set; }
        public string Address { get; set; }
        public float Value { get; set; }
    }
}
