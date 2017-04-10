using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System.Linq;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class SACNTransmitterLive : WebSocketHandler
    {
        public SACNTransmitterLive()
        {
            var Transmitter = MasterController.Instance.Transmitters.Single(x => x is SACNTransmitter) as SACNTransmitter;
            Transmitter.OnTransmit += Transmitter_OnTransmit;
        }

        private async void Transmitter_OnTransmit(object sender, TransmitterEventArgs e)
        {
            WebSocketMessage<SACNTransmitterUpdateMessage> message = new WebSocketMessage<SACNTransmitterUpdateMessage>("updateUniverse",
                new SACNTransmitterUpdateMessage
                {
                    UniverseID = e.UniverseID,
                    Values = e.DMX.ToList()
                }
            );

            await Send(message);

        }

        public override void Dispose()
        {
            var Transmitter = MasterController.Instance.Transmitters.Single(x => x is SACNTransmitter) as SACNTransmitter;
            Transmitter.OnTransmit -= Transmitter_OnTransmit;
        }

    }

    public class SACNTransmitterUpdateMessage
    {
        public int UniverseID { get; set; }
        public List<byte> Values { get; set; }
    }
}
