using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public abstract class WebSocketHandler : IDisposable
    {
        private static int RECEIVE_BUFFER_SIZE = 65535;

        private WebSocket Socket { get; set; }
        public WebSocketHandler()
        { }

        public abstract void Dispose();
        public async Task RenderLoop()
        {
            while (Socket.State == WebSocketState.Open)
            {
                byte[] receiveBuffer = new byte[RECEIVE_BUFFER_SIZE];
                ArraySegment<byte> receiveSegment = new ArraySegment<byte>(receiveBuffer);
                try
                {
                    WebSocketReceiveResult received = await Socket.ReceiveAsync(receiveSegment, CancellationToken.None);
                    switch (received.MessageType)
                    {
                        case WebSocketMessageType.Text:
                            string messageString = System.Text.Encoding.UTF8.GetString(receiveBuffer, 0, received.Count);
                            JObject message = JObject.Parse(messageString);
                            string methodName = message["method"].Value<string>();
                            MethodInfo info = this.GetType().GetMethod(methodName, new[] { typeof(JObject) });

                            JObject parameters = message["args"].Value<JObject>();
                            info.Invoke(this, new[] { parameters });
                            break;
                        case WebSocketMessageType.Close:
                            break;
                    }

                }
                catch (IOException)
                {
                    Socket.Abort();
                }
            }
        }

        public async Task Send(WebSocketMessage message)
        {
            byte[] messageBytes = System.Text.Encoding.UTF8.GetBytes(message.JObject.ToString());
            ArraySegment<byte> segment = new ArraySegment<byte>(messageBytes);
            try
            {
                await Socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
            }
            catch (ObjectDisposedException)
            {
                Socket.Abort();
            }
        }

        public virtual Task OnOpen()
        {
            return Task.Run(() => { });
        }

        public static async Task Acceptor<Handler>(HttpContext hc, Func<Task> n) where Handler : WebSocketHandler, new()
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;

            var socket = await hc.WebSockets.AcceptWebSocketAsync();
            using (var h = new Handler())
            {
                h.Socket = socket;
                while (socket.State != WebSocketState.Open)
                {
                    await Task.Delay(100);
                }
                await h.OnOpen();
                await h.RenderLoop();
            }
        }

        public static void Map<Handler>(IApplicationBuilder app) where Handler : WebSocketHandler, new()
        {
            app.Use(WebSocketHandler.Acceptor<Handler>);
        }
    }

    public class WebSocketMessage
    {
        public string MethodName { get; set; }
        public Dictionary<string, object> Args { get; set; }

        public WebSocketMessage(string methodName, Dictionary<string, object> args)
        {
            MethodName = methodName;
            Args = args;
        }

        public JObject JObject
        {
            get
            {
                return new JObject(
                    new JProperty("method", MethodName),
                    new JProperty("args",
                        new JObject(
                            from entry in Args
                            select new JProperty(entry.Key, entry.Value)
                        )
                    )
                );
            }
        }
    }
}