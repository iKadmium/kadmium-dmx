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
        public ushort RelativeAddress { get; set; }
        private ushort FixtureAddress { get; }
        public ushort Address { get { return (ushort)(RelativeAddress + FixtureAddress - 1); } }

        public DMXChannel(IDMXChannelData data, ushort fixtureAddress) : base(data.Name)
        {
            Min = (byte)data.Min;
            Max = (byte)data.Max;
            RelativeAddress = (ushort)data.Address;
            FixtureAddress = fixtureAddress;
        }

        public override string ToString()
        {
            return Name + " -> " + ByteValue;
        }
    }
}