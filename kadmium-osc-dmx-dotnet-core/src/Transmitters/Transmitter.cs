using System;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public abstract class Transmitter
    {

        protected Transmitter(string name, int delay)
        {
            Name = name;
            Status = new Status();
            Delay = delay;
        }

        public int Delay { get; set; }
        public string Name { get; set; }
        public Status Status { get; set; }
        public virtual string DisplayName
        {
            get
            {
                return Name;
            }
        }

        public abstract void TransmitInternal(byte[] dmx, int transmitterID);
        public async void Transmit(byte[] dmx, int universeID)
        {
            if (Delay < 0)
            {
                await Task.Delay(Delay);
            }
            TransmitInternal(dmx, universeID);
        }

        internal static Transmitter Load(JObject element)
        {
            switch (element["type"].Value<string>())
            {
                case "sACN":
                    return SACNTransmitter.Load(element);
            }
            throw new ArgumentException("No such listener known as " + element["type"].Value<string>());
        }

        public abstract void Close();
        public abstract JObject Serialize();
    }
}
