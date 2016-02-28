using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using kadmium_osc_dmx_dotnet_core.Solvers;

namespace kadmium_osc_dmx_dotnet_core.Adapters
{
    class OPCAdapter : Adapter
    {
        public int StartAddress { get; set; }
        public override Dictionary<string, Attribute> Channels { get; set; }

        public override Dictionary<int, byte> Adapt()
        {
            var results = from DMXChannel channel in Channels.Values
                          select new KeyValuePair<int, byte>(channel.RelativeAddress + StartAddress, channel.ByteValue);
            return results.ToDictionary(x => x.Key, x => x.Value);
        }

        public OPCAdapter() : base(AdapterType.OPC)
        {

        }

        public static Adapter Load(XElement definition, int startChannel)
        {
            OPCAdapter adapter = new OPCAdapter();
            //adapter.Type = definition.Attribute("id")?.Value ?? "pixel";
            adapter.StartAddress = startChannel;
            foreach (XElement channelElement in definition.Elements("channel"))
            {
                DMXChannel channel = new DMXChannel(channelElement.Attribute("name").Value, adapter.Channels.Count + startChannel);
                adapter.Channels.Add(channel.Name, channel);
            }
            return adapter;
        }
    }
}
