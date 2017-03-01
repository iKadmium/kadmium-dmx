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
            WebSocketMessage message = new WebSocketMessage(
                "addMessage",
                new Dictionary<string, object>
                {
                    ["recognised"] = e.Recognised,
                    ["time"] = e.Time,
                    ["source"] = e.Source,
                    ["address"] = e.Address,
                    ["value"] = e.Value
                }
            );
            await Send(message);
        }

        public override void Dispose()
        {
            Listener.MessageReceived -= Listener_MessageReceived;
        }
    }
}
