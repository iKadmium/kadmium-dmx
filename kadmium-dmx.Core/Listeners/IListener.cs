using kadmium_dmx_core.DataSubscriptions;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_core.Listeners
{
    public interface IListener: IDisposable
    {
        event EventHandler<StatusUpdate> StatusUpdate;
        event EventHandler<ListenerUpdate> MessageReceived;
        bool Enabled { get; set; }
    }
}
