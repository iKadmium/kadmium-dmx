using System;

namespace kadmium_dmx_core.Fixtures
{
    public class Strobe
    {
        private static int TICKS_PER_MILLISECOND = 10000;

        public double Frequency { get; set; }
        private double PeriodMillis { get { return 1000.0 / Frequency; } }
        private double HalfPeriodMillis { get { return PeriodMillis / 2.0; } }

        public Strobe(double frequency)
        {
            Frequency = frequency;
        }

        public bool GetValue()
        {
            return GetValue(DateTime.Now);
        }

        public bool GetValue(DateTime time)
        {
            long milliseconds = time.Ticks / TICKS_PER_MILLISECOND;
            double modulus = milliseconds % PeriodMillis;
            return modulus > HalfPeriodMillis;
        }
    }
}
