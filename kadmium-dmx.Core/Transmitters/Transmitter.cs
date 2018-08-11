using System;
using System.Threading.Tasks;

namespace kadmium_dmx_core.Transmitters
{
    public abstract class Transmitter : IDisposable
    {
        protected Transmitter(int delay)
        {
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
        public Status Status { get; set; }

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
                try
                {
                    await TransmitInternal(dmx, universeID);
                    OnTransmit?.Invoke(this, new TransmitterEventArgs(universeID, dmx));
                    if (Status.StatusCode != StatusCode.Success)
                    {
                        Status.Update(StatusCode.Success, "Transmitting", this);
                    }
                }
                catch (Exception e)
                {
                    if (Status.StatusCode != StatusCode.Error)
                    {
                        Status.Update(StatusCode.Error, e.Message, this);
                    }
                }
            }
        }

        public abstract void Dispose();
    }
}
