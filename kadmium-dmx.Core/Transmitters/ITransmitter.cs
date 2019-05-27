using kadmium_dmx_core.DataSubscriptions;
using kadmium_dmx_data.Types.Settings;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_dmx_core.Transmitters
{
    public interface ITransmitter : IDisposable
    {
        event EventHandler<StatusUpdate> StatusUpdate;
        bool Enabled { get; set; }
        int Delay { get; set; }
        Task Transmit(byte[] dmx, int universeID);
        void SetSettings(Settings value);
    }
}
