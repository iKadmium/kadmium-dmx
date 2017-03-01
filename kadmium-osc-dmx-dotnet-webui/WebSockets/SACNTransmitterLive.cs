using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class SACNTransmitterLive : WebSocketHandler
    {
        public SACNTransmitterLive()
        {
            var Transmitter = MasterController.Instance.Transmitter as SACNTransmitter;
            Transmitter.OnTransmit += Transmitter_OnTransmit;
        }

        private async void Transmitter_OnTransmit(object sender, TransmitterEventArgs e)
        {
            WebSocketMessage message = new WebSocketMessage("updateUniverse",
                new Dictionary<string, object>
                {
                    ["universeID"] = e.UniverseID,
                    ["values"] = new JArray(
                                    from value in e.DMX
                                    select new JValue(value)
                    )
                }
            );

            await Send(message);

        }

        public override void Dispose()
        {
            var Transmitter = MasterController.Instance.Transmitter as SACNTransmitter;
            Transmitter.OnTransmit -= Transmitter_OnTransmit;
        }

    }
}
