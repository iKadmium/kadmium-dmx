using kadmium_osc_dmx_dotnet_core.Transmitters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public abstract class Transmitter
    {
        
        protected Transmitter(string name, string address, bool enabled)
        {
            Name = name;
            Address = address;
            Status = new Status();
            Enabled = enabled;
        }

        public string Address { get; set; }
        public bool Enabled { get; set; }
        public int Delay { get; set; }
        public string Name { get; set; }
        public Status Status { get; set; }
        public string DisplayName {
            get
            {
                return Name;
            }
        }

        public abstract void TransmitInternal(byte[] dmx);
        public void Transmit(byte[] dmx)
        {
            if(Enabled)
            {
                if(Delay < 0)
                {
                    Thread.Sleep(Delay);
                }
                TransmitInternal(dmx);
            }   
        }

        internal static Transmitter Load(XElement element)
        {
            switch (element.Name.LocalName)
            {
                case "sacnTransmitter":
                    return SACNTransmitter.Load(element);
                case "enttecTransmitter":
                    return EnttecProTransmitter.Load(element);
            }
            throw new ArgumentException("No such listener known as " + element.Name.LocalName);
        }

        public abstract void Close();

    }
}
