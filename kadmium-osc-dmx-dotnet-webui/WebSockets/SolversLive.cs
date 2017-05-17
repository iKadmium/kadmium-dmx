﻿using kadmium_osc_dmx_dotnet_core;
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
                SubscribeToUpdates();
            }
            MasterController.Instance.VenueActivated += Instance_VenueActivated;
        }

        private void Instance_VenueActivated(object sender, System.EventArgs e)
        {
            
        }

        private void SubscribeToUpdates()
        {
            foreach (Universe universe in MasterController.Instance.Venue?.Universes)
            {
                universe.Updated += Universe_Updated;
            }
        }

        private async void Universe_Updated(object sender, UpdateEventArgs e)
        {
            try
            {
                WebSocketMessage<SolversLiveUpdateMessage> message = new WebSocketMessage<SolversLiveUpdateMessage>("updateAttributes", new SolversLiveUpdateMessage
                {
                    UniverseID = e.UniverseID,
                    Fixtures = from fixture in e.Fixtures
                               orderby fixture.StartChannel
                               select new SolversLiveFixtureUpdate
                               {
                                   Id = fixture.Id,
                                   Attributes =
                                           from attribute in fixture.Settables.Values
                                           where attribute is FixtureSolverAttribute
                                           select new SolversLiveAttributeUpdate
                                           {
                                               Name = attribute.Name,
                                               Value = attribute.Value
                                           }

                               }
                });
                await Send(message);
            }
            catch(System.NullReferenceException)
            {

            }
        }

        public void UpdateAttribute(int fixtureID, string attributeName, float attributeValue)
        {
            var fixtures = from universe in MasterController.Instance.Venue.Universes
                           from fixture in universe.Fixtures
                           where fixture.Id == fixtureID
                           select fixture;

            fixtures.Single().Settables[attributeName].Value = attributeValue;
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
        public int Id { get; set; }
        public IEnumerable<SolversLiveAttributeUpdate> Attributes { get; set; }
    }

    public class SolversLiveAttributeUpdate
    {
        public string Name { get; set; }
        public float Value { get; set; }
    }
}
