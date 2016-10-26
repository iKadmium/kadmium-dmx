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
        private static int RECEIVE_BUFFER_SIZE = 65535;
        public int UniverseID { get; set; }
        public WebSocket Socket { get; }
        public SACNTransmitter Transmitter { get; }

        public SACNTransmitterLive(WebSocket socket, string id)
        {
            Socket = socket;
            Transmitter = MasterController.Instance.Transmitters[id] as SACNTransmitter;
            UniverseID = 1;
            Transmitter.OnTransmit += Transmitter_OnTransmit;
        }

        private async void Transmitter_OnTransmit(object sender, TransmitterEventArgs e)
        {
            if (e.UniverseID == UniverseID)
            {
                JArray arr = new JArray(
                    from value in e.DMX
                    select new JValue(value)
                );

                byte[] bytes = Encoding.UTF8.GetBytes(arr.ToString());

                ArraySegment<byte> segment = new ArraySegment<byte>(bytes);
                if (Socket.State == WebSocketState.Open)
                {
                    await Socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
                }
            }
        }

        async Task RenderLoop()
        {
            byte[] receiveBuffer = new byte[RECEIVE_BUFFER_SIZE];
            ArraySegment<byte> receiveSegment = new ArraySegment<byte>(receiveBuffer);

            while (Socket.State == WebSocketState.Open)
            {
                WebSocketReceiveResult received = await Socket.ReceiveAsync(receiveSegment, CancellationToken.None);
                switch (received.MessageType)
                {
                    case WebSocketMessageType.Text:
                        string message = Encoding.UTF8.GetString(receiveSegment.Array, receiveSegment.Offset, received.Count);
                        JObject obj = JObject.Parse(message);
                        switch (obj["type"].Value<string>())
                        {
                            case "SetUniverseID":
                                UniverseID = obj["universeID"].Value<int>();
                                break;
                        }
                        break;
                }
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
