using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class UniverseStreamSocketHandler : WebSocketHandler
    {
        public int UniverseID { get; set; }

        public UniverseStreamSocketHandler()
        {
            MasterController.Instance.OnUpdate += Instance_OnUpdate;
        }

        public override void OnMessage(string message)
        {
            JObject obj = JObject.Parse(message);
            int universeID = obj["universeID"].Value<int>();
            int channel = obj["channel"].Value<int>();
            int value = obj["value"].Value<int>();

            this.UpdateDMX(universeID, channel, value);
        }

        private async void Instance_OnUpdate(object sender, EventArgs e)
        {
            try
            {
                var universe = MasterController.Instance.Venue.Universes.Single(x => x.UniverseNumber == UniverseID);
                await SendBinary(universe.DMX);
            }
            catch (Exception)
            { }
        }

        public void UpdateDMX(int universeID, int channel, int value)
        {
            Universe universe = MasterController.Instance.Venue.Universes.Single(x => x.UniverseNumber == universeID);
            universe.DMX[channel] = (byte)value;
        }

        public async override Task OnOpen(HttpContext httpContext)
        {
            var path = httpContext.Request.Path.Value;
            var parts = path.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            UniverseID = int.Parse(parts[parts.Length - 1]);

            await Task.Delay(0);
        }

        public override void Dispose()
        {
            MasterController.Instance.OnUpdate -= Instance_OnUpdate;
        }

    }

    public class SACNTransmitterUpdateMessage
    {
        public int UniverseID { get; set; }
        public List<byte> Values { get; set; }
    }
}
