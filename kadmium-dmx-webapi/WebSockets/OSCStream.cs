using kadmium_dmx_core;
using kadmium_dmx_core.Listeners;

namespace kadmium_dmx_webapi.WebSockets
{
    public class OSCStreamSocketHandler : WebSocketHandler
    {
        public OSCListener Listener { get; }

        public OSCStreamSocketHandler()
        {
            Listener = MasterController.Instance.Listener as OSCListener;
            Listener.MessageReceived += Listener_MessageReceived;
        }

        private async void Listener_MessageReceived(object sender, OSCListenerEventArgs e)
        {
            var message = new OSCListenerUpdateMessage
            {
                Recognised = e.Recognised,
                Time = e.Time,
                Source = e.Source,
                Address = e.Address,
                Value = e.Value
            };
            await SendObject(message);
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
