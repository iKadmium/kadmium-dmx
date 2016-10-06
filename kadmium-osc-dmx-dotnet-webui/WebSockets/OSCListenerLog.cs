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
    public class OSCListenerLog
    {
        public WebSocket Socket { get; }
        public OSCListener Listener { get; }
        
        public OSCListenerLog(WebSocket socket, string id)
        {
            Socket = socket;
            Listener = MasterController.Instance.Listeners.Single(x => x.Name == id) as OSCListener;
            Listener.MessageReceived += Listener_MessageReceived;
        }

        private async void Listener_MessageReceived(object sender, ListenerEventArgs e)
        {
            JObject obj = new JObject(
                new JProperty("group", e.Group),
                new JProperty("attribute", e.Attribute),
                new JProperty("value", e.Value)
            );
            
            byte[] bytes = Encoding.UTF8.GetBytes(obj.ToString());

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
            var h = new OSCListenerLog(socket, id);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(OSCListenerLog.Acceptor);
        }
    }
}
