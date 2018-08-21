using System;
using System.IO;
using System.Net.WebSockets;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;

namespace kadmium_dmx_webapi.WebSockets
{
    public abstract class WebSocketHandler : IDisposable
    {
        private static readonly int RECEIVE_BUFFER_SIZE = 65535;
        
        protected WebSocket Socket { get; set; }
        public WebSocketHandler()
        { }

        public abstract void Dispose();
        public async Task RenderLoop()
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
                            string message = System.Text.Encoding.UTF8.GetString(receiveSegment.Array, receiveSegment.Offset, received.Count);
                            var messageObject = JToken.Parse(message);
                            OnMessage(messageObject);
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
        
        public async Task SendBinary(byte[] messageBytes)
        {
            ArraySegment<byte> segment = new ArraySegment<byte>(messageBytes);
            try
            {
                await Socket.SendAsync(segment, WebSocketMessageType.Binary, true, CancellationToken.None);
            }
            catch (ObjectDisposedException)
            {
                Socket.Abort();
            }
        }

        public async Task SendText(string message)
        {
            byte[] messageBytes = System.Text.Encoding.UTF8.GetBytes(message);
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

        public async Task SendObject<T>(T message)
        {
            string serialized = JsonConvert.SerializeObject(message, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });
            await SendText(serialized);
        }

        public virtual Task OnOpen(HttpContext httpContext)
        {
            return Task.Run(() => { });
        }

        public virtual void OnMessage(JToken message)
        {

        }

        
    }
}
