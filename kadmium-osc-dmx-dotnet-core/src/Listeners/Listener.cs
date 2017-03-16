using Newtonsoft.Json.Linq;
using System;

namespace kadmium_osc_dmx_dotnet_core.Listeners
{
    public abstract class Listener : IDisposable
    {
        public Listener(string name)
        {
            Name = name;
            Status = new Status();
        }

        private bool enabled;
        public bool Enabled
        {
            get { return enabled; }
            set
            {
                enabled = value;
                if (enabled)
                {
                    Status.Update(StatusCode.Warning, "Listening", this);
                }
                else
                {
                    Status.Update(StatusCode.Error, "Updates are disabled", this);
                }
            }
        }
        public string Name { get; set; }
        public Status Status { get; set; }
        public string DisplayName { get { return Name; } }

        internal static Listener Load(JObject listenerElement)
        {
            switch (listenerElement["type"].Value<string>())
            {
                case "OSC":
                    return OSCListener.Load(listenerElement);
            }
            throw new ArgumentException("No such listener known as " + listenerElement["type"].Value<string>());
        }

        public abstract void Dispose();
        public abstract JObject Serialize();
    }
}
