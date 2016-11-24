using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class DMXChannel : Attribute
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
        public int RelativeAddress { get; set; }

        public DMXChannel(string name, int relativeAddress, byte min = 0, byte max = 255) : base(name)
        {
            Min = min;
            Max = max;
            RelativeAddress = relativeAddress;
        }
        
        public static DMXChannel Load(JObject channelElement)
        {
            string name = channelElement["name"].Value<string>();
            byte min = channelElement["min"] != null ? channelElement["min"].Value<byte>() : (byte)0;
            byte max = channelElement["max"] != null ? channelElement["max"].Value<byte>() : (byte)255;
            int relativeAddress = channelElement["dmx"].Value<int>();
            DMXChannel channel = new DMXChannel(name, relativeAddress, min, max);
            return channel;
        }

        public override string ToString()
        {
            return Name + " -> " + ByteValue;
        }

        public override Attribute Clone()
        {
            DMXChannel other = new DMXChannel(Name, RelativeAddress, Min, Max);
            return other;
        }
    }
}