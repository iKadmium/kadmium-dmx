using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Adapters
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

        public DMXChannel(string name, int relativeAddress, byte min = 0, byte max = 255) : base(name, AttributeType.Natural)
        {
            Min = min;
            Max = max;
            RelativeAddress = relativeAddress;
        }
        
        public static DMXChannel Load(XElement channelElement)
        {
            string name = channelElement.Attribute("name").Value;
            byte min = byte.Parse(channelElement.Attribute("min").Value);
            byte max = byte.Parse(channelElement.Attribute("max").Value);
            int relativeAddress = int.Parse(channelElement.Attribute("dmx").Value);
            DMXChannel channel = new DMXChannel(name, relativeAddress, min, max);
            return channel;
        }

        public override string ToString()
        {
            return Name + " -> " + ByteValue;
        }
    }
}