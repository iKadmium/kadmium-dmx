using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Xml.Linq;
using kadmium_osc_dmx_dotnet_core;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class DMXAdapter
    {
        public int StartChannel { get; set; }
        public string Type { get; set; }
        public Dictionary<string, DMXChannel> Channels { get; set; }

        public Dictionary<int, byte> DMXData
        {
            get
            {
                Dictionary<int, byte> channelsReturned = new Dictionary<int, byte>();

                var channels = from channel in Channels.Values
                               group channel by channel.RelativeAddress into chanGroup
                               select chanGroup;

                foreach(var channelGroup in channels)
                {
                    DMXChannel channel = channelGroup.OrderByDescending(chan => chan.Value).First();
                    channelsReturned.Add(channel.RelativeAddress + StartChannel - 2, channel.ByteValue);
                }

                return channelsReturned;
            }
        }

        public string DebugNames
        {
            get
            {
                StringBuilder builder = new StringBuilder();
                foreach(DMXChannel channel in Channels.Values)
                {
                    builder.AppendLine(channel.Name + " -> " + channel.ByteValue);
                }
                return builder.ToString();
            }
        }

        public string DebugNumbers
        {
            get
            {
                StringBuilder builder = new StringBuilder();
                foreach (DMXChannel channel in Channels.Values)
                {
                    builder.AppendLine(channel.RelativeAddress + StartChannel - 1 + " -> " + channel.ByteValue);
                }
                return builder.ToString();
            }
        }

        public string DisplayName { get { return Type + " " + StartChannel + " - " + EndChannel; } }
        public int EndChannel { get { return Channels.Values.Max(x => x.RelativeAddress) + StartChannel; } }

        public DMXAdapter()
        {
            Channels = new Dictionary<string, DMXChannel>();
        }
        
        internal static DMXAdapter Load(string model, int startChannel)
        {
            DMXAdapter adapter = new DMXAdapter();
            adapter.Type = model;
            adapter.StartChannel = startChannel;
            XElement modelElement = FileAccess.LoadFixtureModel(model);
            foreach (XElement channelElement in modelElement.Elements("channel"))
            {
                DMXChannel channel = DMXChannel.Load(channelElement);
                adapter.Channels.Add(channel.Name, channel);
            }
            return adapter;
        }
    }
}
