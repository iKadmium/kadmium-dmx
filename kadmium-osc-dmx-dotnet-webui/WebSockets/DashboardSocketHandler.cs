using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class DashboardSocketHandler : WebSocketHandler
    {
        public DashboardSocketHandler()
        {
            MasterController.Instance.Listener.Status.Updated += ListenerStatusUpdated;
            MasterController.Instance.Transmitter.Status.Updated += TransmitterStatusUpdated;
            Venue.Status.Updated += VenueStatusUpdated;
            MasterController.Instance.SolverStatus.Updated += SolverStatusUpdated;
        }

        public override async Task OnOpen()
        {
            await UpdateAll();
        }

        private async void VenueStatusUpdated(object sender, StatusUpdateEventArgs e)
        {
            await SendUpdate("Venues", e.StatusCode, e.Message);
            if (e.StatusCode == StatusCode.Success)
            {
                int fixtureCount = (from universe in (sender as Venue).Universes
                                    select universe.Fixtures.Count()).Sum();
                await SendUpdate("Fixtures", e.StatusCode, fixtureCount + " fixtures loaded");
            }
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

        private async Task UpdateAll()
        {
            await SendUpdate("Solvers", MasterController.Instance.SolverStatus.StatusCode, MasterController.Instance.SolverStatus.Message);
            await SendUpdate("OSCListeners", MasterController.Instance.Listener.Status.StatusCode, MasterController.Instance.Listener.Status.Message);
            await SendUpdate("SACNTransmitters", MasterController.Instance.Transmitter.Status.StatusCode, MasterController.Instance.Transmitter.Status.Message);
            if (MasterController.Instance.Venue != null)
            {
                await SendUpdate("Venues", StatusCode.Success, MasterController.Instance.Venue.Name + " running");
                int fixtureCount = (from universe in MasterController.Instance.Venue.Universes
                                    select universe.Fixtures.Count()).Sum();
                await SendUpdate("Fixtures", StatusCode.Success, fixtureCount + " fixtures loaded");
            }
            else
            {
                await SendUpdate("Venues", StatusCode.Warning, "No venue loaded");
                await SendUpdate("Fixtures", StatusCode.Warning, "No fixtures loaded");
            }

        }

        private async Task SendUpdate(string controller, StatusCode statusCode, string message)
        {
            WebSocketMessage socketMessage = new WebSocketMessage("updateStatus",
                new Dictionary<string, object>
                {
                    ["controller"] = controller,
                    ["code"] = Enum.GetName(typeof(StatusCode), statusCode),
                    ["message"] = message
                }
            );
            await Send(socketMessage);
        }

        public override void Dispose()
        {
            MasterController.Instance.Listener.Status.Updated += ListenerStatusUpdated;
            MasterController.Instance.Transmitter.Status.Updated += TransmitterStatusUpdated;
            Venue.Status.Updated += VenueStatusUpdated;
            MasterController.Instance.SolverStatus.Updated -= SolverStatusUpdated;
        }
    }
}
