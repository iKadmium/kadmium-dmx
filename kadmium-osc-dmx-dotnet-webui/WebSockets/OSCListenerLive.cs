using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
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
    public class OSCTransmitterLive
    {
        private static int RECEIVE_BUFFER_SIZE = 65535;
        public WebSocket Socket { get; }
        public OSCListener Listener { get; }
        
        public OSCTransmitterLive(WebSocket socket, string id)
        {
            Socket = socket;
            Listener = MasterController.Instance.Listeners[id] as OSCListener;
            Listener.MessageReceived += Listener_MessageReceived;
        }

        private async void Listener_MessageReceived(object sender, ListenerEventArgs e)
        {
            JObject obj = new JObject(
                new JProperty("type", "AttributeUpdate"),
                new JProperty("group", e.Group),
                new JProperty("attribute", e.Attribute),
                new JProperty("value", e.Value)
            );
            
            byte[] bytes = Encoding.UTF8.GetBytes(obj.ToString());

            ArraySegment<byte> segment = new ArraySegment<byte>(bytes);
            if (Socket.State == WebSocketState.Open)
            {
                await Socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
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
                            case "Init":
                                JObject initMessage = new JObject(
                                    new JProperty("type", "Init"),
                                    new JProperty("groups",
                                        new JArray(
                                            from groupName in MasterController.Instance.Groups.Keys
                                            select new JValue(groupName)
                                        )
                                    ),
                                    new JProperty("attributes",
                                        new JArray(
                                            "Hue", "Saturation", "Brightness", "Strobe", "Apeshit", 
                                            "UV", "Chase", "Program", "Pan", "Tilt", "RandomMove"
                                        )
                                    )
                                );
                                byte[] sendBuffer = Encoding.UTF8.GetBytes(initMessage.ToString());
                                ArraySegment <byte> sendSegment = new ArraySegment<byte>(sendBuffer);
                                await Socket.SendAsync(sendSegment, WebSocketMessageType.Text, true, CancellationToken.None);
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
            var h = new OSCTransmitterLive(socket, id);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(OSCTransmitterLive.Acceptor);
        }
    }
}
