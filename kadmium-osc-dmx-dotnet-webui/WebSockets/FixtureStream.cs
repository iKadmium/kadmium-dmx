using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Collections.Generic;
using System;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.WebSockets
{
    public class FixtureStreamSocketHandler : WebSocketHandler
    {
        public int FixtureID { get; set; }
        public bool Sending { get; set; }

        public FixtureStreamSocketHandler()
        {
            Sending = false;
            MasterController.Instance.OnUpdate += Instance_OnUpdate;
        }

        private async void Instance_OnUpdate(object sender, System.EventArgs e)
        {
            try
            {
                var matches = from universe in MasterController.Instance.Venue.Universes
                              from fixture in universe.Fixtures
                              where fixture.Id == FixtureID
                              select fixture;

                var match = matches.Single();

                var message =
                        from attribute in match.Settables.Values
                        where attribute is FixtureSolverAttribute
                        select new SolversLiveAttributeUpdate
                        {
                            Name = attribute.Name,
                            Value = attribute.Value
                        };
                
                await SendObject(message);
            }
            catch(Exception)
            { }
        }

        public override Task OnOpen(HttpContext httpContext)
        {
            var parts = httpContext.Request.Path.Value.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            FixtureID = int.Parse(parts.Last());
            return Task.Delay(0);
        }

        public override void OnMessage(string message)
        {
            FixtureUpdateMessage msg = JsonConvert.DeserializeObject<FixtureUpdateMessage>(message);
            UpdateAttribute(msg.FixtureID, msg.AttributeName, msg.AttributeValue);
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
            MasterController.Instance.OnUpdate -= Instance_OnUpdate;
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

    public class FixtureUpdateMessage
    {
        public int FixtureID { get; set; }
        public string AttributeName { get; set; }
        public float AttributeValue { get; set; }
    }
}
