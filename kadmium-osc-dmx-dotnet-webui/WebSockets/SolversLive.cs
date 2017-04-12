using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class SolversLiveSocketHandler : WebSocketHandler
    {
        public int UniverseID { get; set; }
        public bool Sending { get; set; }

        public SolversLiveSocketHandler()
        {
            Sending = false;
            if (MasterController.Instance.Venue != null)
            {
                foreach (Universe universe in MasterController.Instance.Venue?.Universes)
                {
                    universe.Updated += Universe_Updated;
                }
            }
        }
        
        private async void Universe_Updated(object sender, UpdateEventArgs e)
        {
            WebSocketMessage<SolversLiveUpdateMessage> message = new WebSocketMessage<SolversLiveUpdateMessage>("updateUniverse", new SolversLiveUpdateMessage
            {
                UniverseID = e.UniverseID,
                Fixtures = from fixture in e.Fixtures
                           orderby fixture.StartChannel
                           select new SolversLiveFixtureUpdate
                           {
                               Address = fixture.StartChannel,
                               Attributes = 
                                       from attribute in fixture.Settables.Values
                                       where !attribute.Controlled && attribute is FixtureSolverAttribute
                                       select new SolversLiveAttributeUpdate
                                       {
                                           Name = attribute.Name,
                                           Value = attribute.Value
                                       }
                               
                           }
            });
            await Send(message);
        }

        public override void Dispose()
        {
            foreach (Universe universe in MasterController.Instance.Venue?.Universes ?? Enumerable.Empty<Universe>())
            {
                universe.Updated -= Universe_Updated;
            }
        }
    }

    public class SolversLiveUpdateMessage
    {
        public int UniverseID { get; set; }
        public IEnumerable<SolversLiveFixtureUpdate> Fixtures { get; set; }
    }

    public class SolversLiveFixtureUpdate
    {
        public int Address { get; set; }
        public IEnumerable<SolversLiveAttributeUpdate> Attributes { get; set; }
    }

    public class SolversLiveAttributeUpdate
    {
        public string Name { get; set; }
        public float Value { get; set; }
    }
}
