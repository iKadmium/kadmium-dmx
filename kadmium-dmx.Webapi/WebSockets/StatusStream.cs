using kadmium_dmx_core;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_core.Transmitters;
using System.Linq;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Builder;
using System.Net.WebSockets;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;

namespace kadmium_dmx_webapi.WebSockets
{
    public class StatusStreamSocketHandler : WebSocketHandler
    {
        IMasterController MasterController { get; }

        public StatusStreamSocketHandler(IMasterController masterController)
        {
            MasterController = masterController;
        
            MasterController.Listener.Status.Updated += ListenerStatusUpdated;
            foreach (var transmitter in MasterController.Transmitters)
            {
                transmitter.Status.Updated += TransmitterStatusUpdated;
            }
            Venue.Status.Updated += VenueStatusUpdated;
        }

        public async override void OnMessage(JObject message)
        {
            switch (message.Value<string>())
            {
                case "updateAll":
                    await UpdateAll();
                    break;
            }

        }

        private async void VenueStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            await SendUpdate("Venues", e.StatusCode, e.Message);
        }

        private async void TransmitterStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = sender.GetType().Name + "s";
            Transmitter transmitter = sender as Transmitter;
            await SendUpdate(controller, e.StatusCode, e.Message);
        }

        private async void ListenerStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = sender.GetType().Name + "s";
            Listener listener = sender as Listener;
            await SendUpdate(controller, e.StatusCode, e.Message);
        }

        private async void SolverStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            string controller = "Solvers";
            Listener listener = sender as Listener;
            await SendUpdate(controller, e.StatusCode, e.Message);
        }

        public async Task UpdateAll()
        {
            await SendUpdate("OSCListeners", MasterController.Listener.Status.StatusCode, MasterController.Listener.Status.Message);
            foreach (var transmitter in MasterController.Transmitters)
            {
                if (transmitter is EnttecProTransmitter)
                {
                    await SendUpdate("EnttecProTransmitters", transmitter.Status.StatusCode, transmitter.Status.Message);
                }
                else if (transmitter is SACNTransmitter)
                {
                    await SendUpdate("SACNTransmitters", transmitter.Status.StatusCode, transmitter.Status.Message);
                }
            }
            await SendUpdate("Venues", Venue.Status.StatusCode, Venue.Status.Message);
        }

        private async Task SendUpdate(string controller, StatusCode statusCode, string message)
        {
            var msg = new
            {
                Controller = controller,
                Code = Enum.GetName(typeof(StatusCode), statusCode),
                Message = message
            };
            await SendObject(msg);
        }

        public override void Dispose()
        {
            MasterController.Listener.Status.Updated -= ListenerStatusUpdated;
            foreach (var transmitter in MasterController.Transmitters)
            {
                transmitter.Status.Updated -= TransmitterStatusUpdated;
            }
            Venue.Status.Updated -= VenueStatusUpdated;
        }

        public static async Task Acceptor(HttpContext httpContext, Func<Task> n)
        {
            if (!httpContext.WebSockets.IsWebSocketRequest)
                return;

            var socket = await httpContext.WebSockets.AcceptWebSocketAsync();

            using (var h = new StatusStreamSocketHandler(httpContext.RequestServices.GetService<IMasterController>()))
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
            app.Use(StatusStreamSocketHandler.Acceptor);
        }
    }

    public class DashboardUpdateMessage
    {
        public string Controller { get; set; }
        public string Code { get; set; }
        public string Message { get; set; }
    }
}
