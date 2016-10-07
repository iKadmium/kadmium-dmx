﻿using kadmium_osc_dmx_dotnet_core;
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
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class Preview2DSocketHandler
    {
        public WebSocket Socket { get; }
        public byte[] DMX { get; }
        
        public Preview2DSocketHandler(WebSocket socket)
        {
            Socket = socket;
            DMX = new byte[Universe.DMX_UNIVERSE_SIZE ];
            foreach(Universe universe in MasterController.Instance.Universes.Values)
            {
                universe.Rendered += Universe_Updated;
            }
        }

        private async void Universe_Updated(object sender, DMXEventArgs e)
        {
            JArray arr = new JArray(
                from channel in e.DMX
                select new JValue((int)channel)
            );

            string message = arr.ToString();

            byte[] bytes = Encoding.UTF8.GetBytes(message);

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
            var h = new Preview2DSocketHandler(socket);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(Preview2DSocketHandler.Acceptor);
        }
    }
}
