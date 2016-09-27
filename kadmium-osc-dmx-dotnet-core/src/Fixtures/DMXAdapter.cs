using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class DMXAdapter
    {
        public string Name { get; set; }
        public Dictionary<string, DMXChannel> Channels { get; set; }

        public void Update(byte[] dmx, int startChannel)
        {
            var channels = from channel in Channels.Values
                           group channel by channel.RelativeAddress into chanGroup
                           select chanGroup;

            foreach (var channelGroup in channels)
            {
                DMXChannel channel = channelGroup.OrderByDescending(chan => chan.Value).ThenByDescending(chan => chan.Min).First();
                dmx[channel.RelativeAddress + startChannel - 2] = channel.ByteValue;
            }
        }
        
        public DMXAdapter(Definition definition)
        {
            Channels = new Dictionary<string, DMXChannel>();
        }
        
        
    }
}
