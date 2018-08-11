using kadmium_dmx_core.Solvers;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using Newtonsoft.Json;

namespace kadmium_dmx_core.Fixtures
{
    public class DMXChannel : FixtureAttribute
    {
        [JsonIgnore]
        public byte ByteValue
        {
            get
            {
                int range = Max - Min;
                float scaled = range * Value;
                double rounded = System.Math.Round(scaled + Min);
                return (byte)(rounded);
            }
        }

        public byte Min { get; set; }
        public byte Max { get; set; }
        public ushort Address { get; set; }

        public DMXChannel(IDMXChannelData data) : base(data.Name)
        {
            Min = data.Min;
            Max = data.Max;
            Address = data.Address;
        }

        public override string ToString()
        {
            return Name + " -> " + ByteValue;
        }
    }
}