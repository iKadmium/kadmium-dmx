using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
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
    public class RawDMXSocketHandler
    {
        private static int BUFFER_SIZE = 65535;
        private static List<RawDMXSocketHandler> AllSocketHandlers;
        private Universe Universe { get; }
        private TransmitterTarget TransmitterTarget { get; }
        private Timer RenderTimer { get; }

        public WebSocket Socket { get; }

        public RawDMXSocketHandler(WebSocket socket)
        {
            Socket = socket;
            if (AllSocketHandlers == null)
            {
                AllSocketHandlers = new List<RawDMXSocketHandler>();
            }
            TransmitterTarget = new TransmitterTarget(MasterController.Instance.Transmitters.Values.First()?.Name ?? "", 1);
            Universe = new Universe("Raw DMX Universe", new[] { TransmitterTarget }, Enumerable.Empty<Fixture>());

            RenderTimer = new Timer((object state) => 
            {
                Universe.Render();
            }, null, 0, 25);
        }
        
        async Task RenderLoop()
        {
            byte[] buffer = new byte[BUFFER_SIZE];
            ArraySegment<byte> segment = new ArraySegment<byte>(buffer);
            MasterController.Instance.UpdatesEnabled = false;
            MasterController.Instance.RenderEnabled = false;
            AllSocketHandlers.Add(this);
            while (Socket.State == WebSocketState.Open)
            {
                WebSocketReceiveResult received = await Socket.ReceiveAsync(segment, CancellationToken.None);
                switch(received.MessageType)
                {
                    case WebSocketMessageType.Close:
                        AllSocketHandlers.Remove(this);
                        MasterController.Instance.UpdatesEnabled = (AllSocketHandlers.Where(x => x.Socket.State == WebSocketState.Open).Count() == 0);
                        MasterController.Instance.RenderEnabled = (AllSocketHandlers.Where(x => x.Socket.State == WebSocketState.Open).Count() == 0);
                        break;
                    case WebSocketMessageType.Text:
                        string message = Encoding.UTF8.GetString(segment.Array, segment.Offset, received.Count);
                        JObject obj = JObject.Parse(message);
                        switch(obj["type"].Value<string>())
                        {
                            case "TransmitterUpdate":
                                TransmitterTarget.TransmitterName = obj["transmitter"].Value<string>();
                                break;
                            case "UniverseIDUpdate":
                                TransmitterTarget.UniverseID = obj["universeID"].Value<int>();
                                break;
                            case "ChannelUpdate":
                                int channel = obj["channel"].Value<int>();
                                byte value = obj["value"].Value<byte>();
                                Universe.DMX[channel] = value;
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
            var h = new RawDMXSocketHandler(socket);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(Acceptor);
        }
    }
}
