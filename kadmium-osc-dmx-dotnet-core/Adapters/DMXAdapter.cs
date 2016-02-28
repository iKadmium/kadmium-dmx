using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Xml.Linq;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;

namespace kadmium_osc_dmx_dotnet_core.Adapters
{
    public class DMXAdapter : Adapter
    {
        public int StartChannel { get; set; }
        public string Type { get; set; }
        public override Dictionary<string, Attribute> Channels { get; set; }

        public override Dictionary<int, byte> Adapt()
        {
            Dictionary<int, byte> channelsReturned = new Dictionary<int, byte>();

            var channels = from DMXChannel channel in Channels.Values
                           group channel by channel.RelativeAddress into chanGroup
                           select chanGroup;

            foreach(var channelGroup in channels)
            {
                DMXChannel channel = channelGroup.OrderByDescending(chan => chan.Value).ThenByDescending(chan => chan.Min).First();
                channelsReturned.Add(channel.RelativeAddress + StartChannel - 1, channel.ByteValue);
            }

            return channelsReturned;
        }
                
        public int EndChannel { get { return Channels.Values.Max(x => (x as DMXChannel).RelativeAddress) + StartChannel - 1; } }

        public DMXAdapter() : base(AdapterType.DMX) { }

        internal static DMXAdapter Load(XElement definition, int startChannel)
        {
            DMXAdapter adapter = new DMXAdapter();
            adapter.Type = definition.Attribute("id")?.Value ?? "pixel";
            adapter.StartChannel = startChannel;
            foreach (XElement channelElement in definition.Elements("channel"))
            {
                DMXChannel channel = DMXChannel.Load(channelElement);
                adapter.Channels.Add(channel.Name, channel);
            }
            return adapter;
        }
        
    }
}
