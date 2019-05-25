using System;
using System.Threading.Tasks;
using kadmium_dmx_core.DataSubscriptions;

namespace kadmium_dmx_core.Transmitters
{
    public abstract class Transmitter : IDisposable, ITransmitter
    {
        protected Transmitter(int delay)
        {
            Delay = delay;
        }

        protected bool enabled;

        public event EventHandler<StatusUpdate> StatusUpdate;

        public bool Enabled
        {
            get { return enabled; }
            set
            {
                enabled = value;
                if (!value)
                {
                    StatusUpdate?.Invoke(this, new StatusUpdate("Transmission is disabled", StatusCode.Error));
                }
                else
                {
                    StatusUpdate?.Invoke(this, new StatusUpdate("Ready to transmit", StatusCode.Warning));
                }
            }
        }
        public int Delay { get; set; }

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
                    StatusUpdate?.Invoke(this, new StatusUpdate($"Transmitting on universe {universeID}", StatusCode.Success));
                }
                catch (Exception e)
                {
                    StatusUpdate?.Invoke(this, new StatusUpdate(e.Message, StatusCode.Error));
                }
            }
        }

        protected void OnStatusUpdate(object sender, StatusUpdate statusUpdate)
        {
            this.StatusUpdate?.Invoke(sender, statusUpdate);
        }

        public abstract void Dispose();
    }
}
