using kadmium_dmx_core.DataSubscriptions;
using Newtonsoft.Json.Linq;
using System;

namespace kadmium_dmx_core.Listeners
{
    public abstract class Listener : IListener
    {
        public Listener()
        {
        }

        private bool enabled;

        public event EventHandler<StatusUpdate> StatusUpdate;
        public abstract event EventHandler<ListenerMessage> MessageReceived;

        public bool Enabled
        {
            get { return enabled; }
            set
            {
                enabled = value;
                if (enabled)
                {
                    StatusUpdate?.Invoke(this, new StatusUpdate("Listening", StatusCode.Warning));
                }
                else
                {
                    StatusUpdate?.Invoke(this, new StatusUpdate("Updates are disabled", StatusCode.Error));
                }
            }
        }

        internal static Listener Load(JObject listenerElement)
        {
            switch (listenerElement["type"].Value<string>())
            {
                case "OSC":
                    return OSCListener.Load(listenerElement);
            }
            throw new ArgumentException("No such listener known as " + listenerElement["type"].Value<string>());
        }

        protected virtual void OnStatusUpdate(object sender, StatusUpdate statusUpdate)
        {
            StatusUpdate?.Invoke(sender, statusUpdate);
        }

        public abstract void Dispose();
    }
}
