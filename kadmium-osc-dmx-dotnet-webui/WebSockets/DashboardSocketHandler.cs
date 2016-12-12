using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class DashboardSocketHandler
    {
        private static int RECEIVE_BUFFER_SIZE = 65535;
        public WebSocket Socket { get; }
        
        public DashboardSocketHandler(WebSocket socket)
        {
            Socket = socket;
            MasterController.Instance.Listener.Status.Updated += ListenerStatusUpdated;
            MasterController.Instance.Transmitter.Status.Updated += TransmitterStatusUpdated;
            Venue.Status.Updated += Status_Updated;
        }

        private async void Status_Updated(object sender, StatusUpdateEventArgs e)
        {
            SendUpdate("Venues", e.StatusCode, e.Message);
            if(e.StatusCode == StatusCode.Running)
            {
                int tries = 0;
                while (MasterController.Instance.Venue == null && tries < 10)
                {
                    await Task.Delay(50);
                    tries++;
                }
                int fixtureCount = (from universe in MasterController.Instance.Venue.Universes.Values
                                    select universe.Fixtures.Count()).Sum();
                SendUpdate("Fixtures", e.StatusCode, fixtureCount + " fixtures loaded");
            }
            
        }

        private void TransmitterStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = sender.GetType().Name + "s";
            Transmitter transmitter = sender as Transmitter;
            SendUpdate(controller, e.StatusCode, e.Message);
        }

        private void ListenerStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = sender.GetType().Name + "s";
            Listener listener = sender as Listener;
            SendUpdate(controller, e.StatusCode, e.Message);
        }

        private void UpdateAll()
        {
            SendUpdate("OSCListeners", MasterController.Instance.Listener.Status.StatusCode, MasterController.Instance.Listener.Status.Message);
            SendUpdate("SACNTransmitters", MasterController.Instance.Transmitter.Status.StatusCode, MasterController.Instance.Transmitter.Status.Message);
            if(MasterController.Instance.Venue != null)
            {
                SendUpdate("Venues", StatusCode.Running, MasterController.Instance.Venue.Name + " running");
                int fixtureCount = (from universe in MasterController.Instance.Venue.Universes.Values
                                   select universe.Fixtures.Count()).Sum();
                SendUpdate("Fixtures", StatusCode.Running, fixtureCount + " fixtures loaded");
            }
            else
            {
                SendUpdate("Venues", StatusCode.NotStarted, "No venue loaded");
                SendUpdate("Fixtures", StatusCode.NotStarted, "No fixtures loaded");
            }
            
        }

        private async void SendUpdate(string controller, StatusCode statusCode, string message)
        {
            JObject obj = new JObject(
                new JProperty("controller", controller),
                new JProperty("code", statusCode.ToString()),
                new JProperty("message", message)
            );
            
            byte[] bytes = Encoding.UTF8.GetBytes(obj.ToString());

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
            byte[] receiveBuffer = new byte[RECEIVE_BUFFER_SIZE];
            ArraySegment<byte> receiveSegment = new ArraySegment<byte>(receiveBuffer);

            while (Socket.State != WebSocketState.Open)
            {
                await Task.Delay(100);
            }
            UpdateAll();
            while (Socket.State == WebSocketState.Open)
            {
                try
                {
                    WebSocketReceiveResult received = await Socket.ReceiveAsync(receiveSegment, CancellationToken.None);
                    switch (received.MessageType)
                    {
                        case WebSocketMessageType.Close:
                            Close();
                            break;
                    }
                }
                catch(IOException)
                {
                    Close();
                }
                
            }
        }

        private void Close()
        {
            MasterController.Instance.Listener.Status.Updated += ListenerStatusUpdated;
            MasterController.Instance.Transmitter.Status.Updated += TransmitterStatusUpdated;
            Venue.Status.Updated += Status_Updated;
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
