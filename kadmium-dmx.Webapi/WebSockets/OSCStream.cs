using kadmium_dmx_core;
using kadmium_dmx_core.Listeners;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.WebSockets
{
    public class OSCStreamSocketHandler : WebSocketHandler
    {
        public OSCListener Listener { get; }

        IMasterController MasterController { get; }

        public OSCStreamSocketHandler(IMasterController masterController)
        {
            MasterController = masterController;
            Listener = MasterController.Listener as OSCListener;
            Listener.MessageReceived += Listener_MessageReceived;
        }

        private async void Listener_MessageReceived(object sender, OSCListenerEventArgs e)
        {
            var message = new OSCListenerUpdateMessage
            {
                Recognised = e.Recognised,
                Time = e.Time,
                Source = e.Source,
                Address = e.Address,
                Value = e.Value
            };
            await SendObject(message);
        }

        public override void Dispose()
        {
            Listener.MessageReceived -= Listener_MessageReceived;
        }

        public static async Task Acceptor(HttpContext httpContext, Func<Task> n)
        {
            if (!httpContext.WebSockets.IsWebSocketRequest)
                return;

            var socket = await httpContext.WebSockets.AcceptWebSocketAsync();

            using (var h = new OSCStreamSocketHandler(httpContext.RequestServices.GetService<IMasterController>()))
            {
                h.Socket = socket;
                while (socket.State != WebSocketState.Open)
                {
                    await Task.Delay(100);
                }
                await h.OnOpen(httpContext);
                await h.RenderLoop();
            }
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(OSCStreamSocketHandler.Acceptor);
        }


    }

    public class OSCListenerUpdateMessage
    {
        public bool Recognised { get; set; }
        public System.DateTime Time { get; set; }
        public string Source { get; set; }
        public string Address { get; set; }
        public float Value { get; set; }
    }
}
