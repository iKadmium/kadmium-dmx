using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
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
    public class DashboardSocketHandler
    {
        public WebSocket Socket { get; }
        
        public DashboardSocketHandler(WebSocket socket)
        {
            Socket = socket;
            foreach(Listener listener in MasterController.Instance.Listeners.Values)
            {
                listener.Status.Updated += ListenerStatusUpdated;
            }
            foreach(Transmitter transmitter in MasterController.Instance.Transmitters.Values)
            {
                transmitter.Status.Updated += TransmitterStatusUpdated;
            }
        }

        private void TransmitterStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = sender.GetType().Name + "s";
            Transmitter transmitter = sender as Transmitter;
            SendUpdate(controller, transmitter.Name, e.StatusCode, e.Message);
        }

        private void ListenerStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = sender.GetType().Name + "s";
            Listener listener = sender as Listener;
            SendUpdate(controller, listener.Name, e.StatusCode, e.Message);
        }

        private void UpdateAll()
        {
            foreach (Listener listener in MasterController.Instance.Listeners.Values)
            {
                string controller = listener.GetType().Name + "s";
                SendUpdate(controller, listener.Name, listener.Status.StatusCode, listener.Status.Message);
            }
            foreach (Transmitter transmitter in MasterController.Instance.Transmitters.Values)
            {
                string controller = transmitter.GetType().Name + "s";
                SendUpdate(controller, transmitter.Name, transmitter.Status.StatusCode, transmitter.Status.Message);
            }
        }

        private async void SendUpdate(string controller, string id, StatusCode statusCode, string message)
        {
            JObject obj = new JObject(
                new JProperty("controller", controller),
                new JProperty("name", id),
                new JProperty("code", statusCode.ToString()),
                new JProperty("message", message)
            );
            
            byte[] bytes = Encoding.UTF8.GetBytes(obj.ToString());

            ArraySegment<byte> segment = new ArraySegment<byte>(bytes);
            await Socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
        }

        async Task RenderLoop()
        {
            while (Socket.State != WebSocketState.Open)
            {
                await Task.Delay(100);
            }
            UpdateAll();
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
            var h = new DashboardSocketHandler(socket);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(DashboardSocketHandler.Acceptor);
        }
    }
}
