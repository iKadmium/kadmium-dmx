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
    public class OSCListenerLive
    {
        private static int RECEIVE_BUFFER_SIZE = 65535;
        public WebSocket Socket { get; }
        public OSCListener Listener { get; }
        
        public OSCListenerLive(WebSocket socket, string id)
        {
            Socket = socket;
            Listener = MasterController.Instance.Listener as OSCListener;
            Listener.MessageReceived += Listener_MessageReceived;
        }

        private async void Listener_MessageReceived(object sender, OSCListenerEventArgs e)
        {
            JObject obj = new JObject(
                new JProperty("recognised", e.Recognised),
                new JProperty("time", e.Time),
                new JProperty("source", e.Source),
                new JProperty("address", e.Address),
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
                    case WebSocketMessageType.Close:
                        Listener.MessageReceived -= Listener_MessageReceived;
                        break;
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
                                            from grp in MasterController.Instance.Groups.Values
                                            orderby grp.Order
                                            select new JValue(grp.Name)
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
                                try
                                {
                                    await Socket.SendAsync(sendSegment, WebSocketMessageType.Text, true, CancellationToken.None);
                                }
                                catch (ObjectDisposedException)
                                { }
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
            var h = new OSCListenerLive(socket, id);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(OSCListenerLive.Acceptor);
        }
    }
}
