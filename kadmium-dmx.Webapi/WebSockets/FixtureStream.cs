using kadmium_dmx_core;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Collections.Generic;
using System;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using System.Net.WebSockets;
using Microsoft.AspNetCore.Builder;

namespace kadmium_dmx_webapi.WebSockets
{
    public class FixtureStreamSocketHandler : WebSocketHandler
    {
        public int UniverseID { get; set; }
        public int FixtureAddress { get; set; }
        public bool Sending { get; set; }

        private IMasterController MasterController { get; }
        private IRenderer Renderer { get; }

        public FixtureStreamSocketHandler(IMasterController masterController, IRenderer renderer)
        {
            MasterController = masterController;
            Renderer = renderer;
            Sending = false;
            Renderer.OnUpdate += Instance_OnUpdate;
        }

        private async void Instance_OnUpdate(object sender, System.EventArgs e)
        {
            try
            {
                var matches = from universe in MasterController.Venue.Universes
                              where universe.UniverseID == UniverseID
                              from fixture in universe.Fixtures
                              where fixture.Address == FixtureAddress
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
            UniverseID = int.Parse(parts[parts.Length - 2]);
            FixtureAddress = int.Parse(parts[parts.Length - 1]);
            return Task.Delay(0);
        }

        public override void OnMessage(string message)
        {
            FixtureUpdateMessage msg = JsonConvert.DeserializeObject<FixtureUpdateMessage>(message);
            UpdateAttribute(msg.UniverseID, msg.FixtureAddress, msg.AttributeName, msg.AttributeValue);
        }

        public void UpdateAttribute(int universeID, int fixtureAddress, string attributeName, float attributeValue)
        {
            var fixtures = from universe in MasterController.Venue.Universes
                           where universe.UniverseID == universeID
                           from fixture in universe.Fixtures
                           where fixture.Address == fixtureAddress
                           select fixture;

            fixtures.Single().Settables[attributeName].Value = attributeValue;
        }

        public override void Dispose()
        {
            Renderer.OnUpdate -= Instance_OnUpdate;
        }

        public static async Task Acceptor(HttpContext httpContext, Func<Task> n)
        {
            if (!httpContext.WebSockets.IsWebSocketRequest)
                return;

            var socket = await httpContext.WebSockets.AcceptWebSocketAsync();

            using (var h = new FixtureStreamSocketHandler(
                httpContext.RequestServices.GetService<IMasterController>(),
                httpContext.RequestServices.GetService<IRenderer>()))
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
            app.Use(FixtureStreamSocketHandler.Acceptor);
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
        public int UniverseID { get; set; }
        public int FixtureAddress { get; set; }
        public string AttributeName { get; set; }
        public float AttributeValue { get; set; }
    }
}
