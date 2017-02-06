using kadmium_osc_dmx_dotnet_core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class PreviewSocketHandler : IDisposable
    {
        private static int BUFFER_SIZE = 65535;
        public WebSocket Socket { get; }
        public byte[] DMX { get; }

        public PreviewSocketHandler(WebSocket socket)
        {
            Socket = socket;
            DMX = new byte[Universe.DMX_UNIVERSE_SIZE];
            foreach (Universe universe in MasterController.Instance.Venue?.Universes.Values ?? Enumerable.Empty<Universe>())
            {
                universe.Rendered += Universe_Updated;
            }
        }

        private async void Universe_Updated(object sender, DMXEventArgs e)
        {
            Universe universe = sender as Universe;
            JObject obj = new JObject(
                new JProperty("universe", universe.Name),
                new JProperty("values",
                    from channel in e.DMX
                    select new JValue((int)channel)
                )
            );

            string message = obj.ToString();

            byte[] bytes = Encoding.UTF8.GetBytes(message);

            ArraySegment<byte> segment = new ArraySegment<byte>(bytes);
            try
            {
                await Socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
            }
            catch (ObjectDisposedException)
            { }
        }

        async Task RenderLoop()
        {
            byte[] buffer = new byte[BUFFER_SIZE];
            ArraySegment<byte> segment = new ArraySegment<byte>(buffer);
            while (Socket.State == WebSocketState.Open)
            {
                try
                {
                    WebSocketReceiveResult received = await Socket.ReceiveAsync(segment, CancellationToken.None);
                }
                catch(System.IO.IOException)
                {}
            }
        }

        public void Dispose()
        {
            foreach (Universe universe in MasterController.Instance.Venue?.Universes.Values ?? Enumerable.Empty<Universe>())
            {
                universe.Rendered -= Universe_Updated;
            }
        }

        static async Task Acceptor(HttpContext hc, Func<Task> n)
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;

            var socket = await hc.WebSockets.AcceptWebSocketAsync();
            using (var h = new PreviewSocketHandler(socket))
            {
                await h.RenderLoop();
            }
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(PreviewSocketHandler.Acceptor);
        }
    }
}
