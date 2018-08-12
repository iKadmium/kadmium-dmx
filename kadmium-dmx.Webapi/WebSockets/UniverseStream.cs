using kadmium_dmx_core;
using kadmium_dmx_core.Transmitters;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using kadmium_dmx_core.Fixtures;
using System;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.Net.WebSockets;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace kadmium_dmx_webapi.WebSockets
{
    public class UniverseStreamSocketHandler : WebSocketHandler
    {
        public int UniverseID { get; set; }

        private IMasterController MasterController { get; }
        private IRenderer Renderer { get; }

        public UniverseStreamSocketHandler(IMasterController masterController, IRenderer renderer)
        {
            MasterController = masterController;
            Renderer = renderer;
            Renderer.OnUpdate += Instance_OnUpdate;
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
                var universe = MasterController.Venue.Universes.Single(x => x.UniverseID == UniverseID);
                await SendBinary(universe.DMX);
            }
            catch (Exception)
            { }
        }

        public void UpdateDMX(int universeID, int channel, int value)
        {
            Universe universe = MasterController.Venue.Universes.Single(x => x.UniverseID == universeID);
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
            Renderer.OnUpdate -= Instance_OnUpdate;
        }

        public static async Task Acceptor(HttpContext httpContext, Func<Task> n)
        {
            if (!httpContext.WebSockets.IsWebSocketRequest)
                return;

            var socket = await httpContext.WebSockets.AcceptWebSocketAsync();
            
            using (var h = new UniverseStreamSocketHandler(
                httpContext.RequestServices.GetService<IMasterController>(),
                httpContext.RequestServices.GetService<IRenderer>()
                ))
            {
                h.Socket = socket;
                while (socket.State != WebSocketState.Open)
                {
                    await Task.Delay(100);
                }
                await h.OnOpen(httpContext);
                await h.RenderLoop();
            }
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(UniverseStreamSocketHandler.Acceptor);
        }

    }

    public class SACNTransmitterUpdateMessage
    {
        public int UniverseID { get; set; }
        public List<byte> Values { get; set; }
    }
}
