using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class DMXChannel : Attribute, System.IEquatable<DMXChannel>
    {
        public byte ByteValue
        {
            get
            {
                int range = Max - Min;
                float scaled = range * Value;
                return (byte)(scaled + Min);
            }
        }

        public byte Min { get; set; }
        public byte Max { get; set; }
        public int Address { get; set; }

        public int Id { get; set; }
        public int FixtureDefinitionId { get; set; }

        public DMXChannel() : base("")
        {
            Name = "";
            Min = 0;
            Max = 255;
            Address = 1;
        }

        public DMXChannel(string name, int relativeAddress, byte min = 0, byte max = 255) : base(name)
        {
            Min = min;
            Max = max;
            Address = relativeAddress;
        }

        public static DMXChannel Load(JObject channelElement)
        {
            string name = channelElement["name"].Value<string>();
            byte min = channelElement["min"] != null ? channelElement["min"].Value<byte>() : (byte)0;
            byte max = channelElement["max"] != null ? channelElement["max"].Value<byte>() : (byte)255;
            int relativeAddress = channelElement["address"].Value<int>();
            DMXChannel channel = new DMXChannel(name, relativeAddress, min, max);
            return channel;
        }

        public override string ToString()
        {
            return Name + " -> " + ByteValue;
        }

        public override Attribute Clone()
        {
            DMXChannel other = new DMXChannel(Name, Address, Min, Max);
            return other;
        }

        public override bool Equals(object obj)
        {
            var other = obj as DMXChannel;
            if(other == null)
            {
                return false;
            }
            return Equals(other);
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode() ^ Min ^ Max ^ Address;
        }

        public bool Equals(DMXChannel other)
        {
            return (other.Min == Min
                && other.Max == Max
                && other.Value == Value
                && other.Address == Address);
        }
    }
}