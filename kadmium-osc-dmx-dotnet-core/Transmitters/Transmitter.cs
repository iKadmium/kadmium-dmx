using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public abstract class Transmitter
    {
        public bool Enabled { get; set; }
        public int Delay { get; set; }

        public abstract void TransmitInternal(IEnumerable<byte> dmx);
        public void Transmit(IEnumerable<byte> dmx)
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
    }
}
