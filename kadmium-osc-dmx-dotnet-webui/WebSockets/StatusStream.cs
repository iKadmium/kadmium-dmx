using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class StatusStreamSocketHandler : WebSocketHandler
    {
        public StatusStreamSocketHandler()
        {
            MasterController.Instance.Listener.Status.Updated += ListenerStatusUpdated;
            foreach (var transmitter in MasterController.Instance.Transmitters)
            {
                transmitter.Status.Updated += TransmitterStatusUpdated;
            }
            Venue.Status.Updated += VenueStatusUpdated;
            MasterController.Instance.SolverStatus.Updated += SolverStatusUpdated;
        }

        public override void OnMessage(string message)
        {
            switch(message)
            {
                case "updateAll":
                    UpdateAll();
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
            await SendUpdate("Solvers", MasterController.Instance.SolverStatus.StatusCode, MasterController.Instance.SolverStatus.Message);
            await SendUpdate("OSCListeners", MasterController.Instance.Listener.Status.StatusCode, MasterController.Instance.Listener.Status.Message);
            foreach (var transmitter in MasterController.Instance.Transmitters)
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
            if (MasterController.Instance.Venue != null)
            {
                await SendUpdate("Venues", StatusCode.Success, MasterController.Instance.Venue.Name + " running");
            }
            else
            {
                await SendUpdate("Venues", StatusCode.Warning, "No venue loaded");
            }

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
            MasterController.Instance.Listener.Status.Updated -= ListenerStatusUpdated;
            foreach (var transmitter in MasterController.Instance.Transmitters)
            {
                transmitter.Status.Updated -= TransmitterStatusUpdated;
            }
            Venue.Status.Updated -= VenueStatusUpdated;
            MasterController.Instance.SolverStatus.Updated -= SolverStatusUpdated;
        }
    }

    public class DashboardUpdateMessage
    {
        public string Controller { get; set; }
        public string Code { get; set; }
        public string Message { get; set; }
    }
}
