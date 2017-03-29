using System;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Transmitters
{
    public abstract class Transmitter : IDisposable
    {
        protected Transmitter(string name, int delay)
        {
            Name = name;
            Status = new Status();
            Delay = delay;
        }

        protected bool enabled;
        public bool Enabled
        {
            get { return enabled; }
            set
            {
                enabled = value;
                if (!value)
                {
                    Status.Update(StatusCode.Error, "Transmission is disabled", this);
                }
                else
                {
                    Status.Update(StatusCode.Warning, "Ready to transmit", this);
                }
            }
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

        public event EventHandler<TransmitterEventArgs> OnTransmit;

        public abstract Task TransmitInternal(byte[] dmx, int universeID);
        public async Task Transmit(byte[] dmx, int universeID)
        {
            if (Delay > 0)
            {
                await Task.Delay(Delay);
            }
            if (Enabled)
            {
                await TransmitInternal(dmx, universeID);
                try
                {
                    OnTransmit?.Invoke(this, new TransmitterEventArgs(universeID, dmx));
                    if (Status.StatusCode != StatusCode.Success)
                    {
                        Status.Update(StatusCode.Success, "Transmitting", this);
                    }
                }
                catch(Exception e)
                {
                    if(Status.StatusCode != StatusCode.Error)
                    {
                        Status.Update(StatusCode.Error, e.Message, this);
                    }
                }
            }
        }

        public abstract void Dispose();
    }
}
