using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Strobe
    {
        public double Frequency { get; set; }

        public Strobe(double frequency)
        {
            Frequency = frequency * 2;
        }

        public bool GetValue()
        {
            DateTime time = DateTime.Now;

            double angle = time.Millisecond / 1000.0 * Math.PI * 2 * Frequency;
            double cycle = Math.Sin(angle);
            return cycle > 0;
        }
    }
}
