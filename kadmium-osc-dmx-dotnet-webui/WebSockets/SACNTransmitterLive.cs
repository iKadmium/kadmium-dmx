using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class SACNTransmitterLive
    {
        public WebSocket Socket { get; }
        public SACNTransmitter Transmitter { get; }

        public SACNTransmitterLive(WebSocket socket, string id)
        {
            Socket = socket;
            Transmitter = MasterController.Instance.Transmitters.Single(x => x.Name == id) as SACNTransmitter;
            Transmitter.OnTransmit += Transmitter_OnTransmit;
        }

        private async void Transmitter_OnTransmit(object sender, TransmitterEventArgs e)
        {
            JArray arr = new JArray(
                from value in e.DMX
                select new JValue(value)
            );

            byte[] bytes = Encoding.UTF8.GetBytes(arr.ToString());

            ArraySegment<byte> segment = new ArraySegment<byte>(bytes);
            await Socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
        }

        async Task RenderLoop()
        {
            while (Socket.State == WebSocketState.Open)
            {
                await Task.Delay(100);
            }
        }

        static async Task Acceptor(HttpContext hc, Func<Task> n)
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;

            var socket = await hc.WebSockets.AcceptWebSocketAsync();
            string id = hc.Request.Path.Value.Split('/').Last();
            var h = new SACNTransmitterLive(socket, id);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(SACNTransmitterLive.Acceptor);
        }
    }
}
