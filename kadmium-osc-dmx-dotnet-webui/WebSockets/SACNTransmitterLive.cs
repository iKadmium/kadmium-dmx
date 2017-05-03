using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;

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

        public void UpdateAttribute(int fixtureID, string attributeName, float attributeValue)
        {
            var fixtures = from universe in MasterController.Instance.Venue.Universes
                           from fixture in universe.Fixtures
                           where fixture.Id == fixtureID
                           select fixture;

            fixtures.Single().Settables[attributeName].Value = attributeValue;
        }

        public void UpdateDMX(int universeID, int channel, int value)
        {
            Universe universe = MasterController.Instance.Venue.Universes.Single(x => x.UniverseNumber == universeID);
            universe.DMX[channel] = (byte)value;
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
