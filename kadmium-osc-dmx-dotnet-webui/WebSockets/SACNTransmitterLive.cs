﻿using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class SACNTransmitterLive : IDisposable
    {
        private static int RECEIVE_BUFFER_SIZE = 65535;
        public int UniverseID { get; set; }
        public WebSocket Socket { get; }

        public SACNTransmitterLive(WebSocket socket)
        {
            Socket = socket;
            var Transmitter = MasterController.Instance.Transmitter as SACNTransmitter;
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
                try
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
                catch(IOException)
                { 
                    Socket.Abort();
                }
            }
        }

        public void Dispose()
        {
            var Transmitter = MasterController.Instance.Transmitter as SACNTransmitter;
            Transmitter.OnTransmit -= Transmitter_OnTransmit;
        }

        static async Task Acceptor(HttpContext hc, Func<Task> n)
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;

            var socket = await hc.WebSockets.AcceptWebSocketAsync();
            using (var h = new SACNTransmitterLive(socket))
            {
                await h.RenderLoop();
            }
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(SACNTransmitterLive.Acceptor);
        }
    }
}
