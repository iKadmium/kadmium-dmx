using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
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
    public class FixturesLive
    {
        private static int RECEIVE_BUFFER_SIZE = 65535;
        public int UniverseID { get; set; }
        public WebSocket Socket { get; }
        
        public FixturesLive(WebSocket socket)
        {
            Socket = socket;
        }

        private JObject GetInitMessage()
        {
            JObject obj = new JObject(
                new JProperty("messageType", "init"),
                new JProperty("universes", 
                    new JArray(
                        from universe in MasterController.Instance.Venue?.Universes.Values ?? Enumerable.Empty<Universe>()
                        select new JObject(
                            new JProperty("universeID", universe.UniverseID),
                            new JProperty("name", universe.Name),
                            new JProperty("fixtures", 
                                new JArray(
                                    from fixture in universe.Fixtures
                                    select new JObject(
                                        new JProperty("type", fixture.Definition.Name),
                                        new JProperty("channel", fixture.StartChannel),
                                        new JProperty("attributes", 
                                            new JArray(
                                                from attribute in fixture.Settables.Values
                                                where (attribute is DMXChannel || attribute is FixtureSolverAttribute)
                                                select new JObject(
                                                    new JProperty("name", attribute.Name),
                                                    new JProperty("value", attribute.Value),
                                                    new JProperty("dmxMin", (attribute as DMXChannel)?.Min ?? 0),
                                                    new JProperty("dmxMax", (attribute as DMXChannel)?.Max ?? 0),
                                                    new JProperty("controlled", (attribute as DMXChannel)?.Controlled ?? false),
                                                    new JProperty("dmx", attribute is DMXChannel)
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );

            return obj;
        }

        async Task RenderLoop()
        {
            byte[] receiveBuffer = new byte[RECEIVE_BUFFER_SIZE];
            ArraySegment<byte> receiveSegment = new ArraySegment<byte>(receiveBuffer);
            
            if(Socket.State == WebSocketState.Open)
            {
                JObject initMessage = GetInitMessage();
                byte[] sendBuffer = Encoding.UTF8.GetBytes(initMessage.ToString());
                ArraySegment<byte> sendSegment = new ArraySegment<byte>(sendBuffer);
                await Socket.SendAsync(sendSegment, WebSocketMessageType.Text, true, CancellationToken.None);
                foreach(Universe universe in MasterController.Instance.Venue?.Universes.Values ?? Enumerable.Empty<Universe>())
                {
                    universe.Updated += Universe_Updated;
                }
            }

            while (Socket.State == WebSocketState.Open)
            {
                WebSocketReceiveResult received = await Socket.ReceiveAsync(receiveSegment, CancellationToken.None);
                switch (received.MessageType)
                {
                    case WebSocketMessageType.Text:
                        string message = Encoding.UTF8.GetString(receiveSegment.Array, receiveSegment.Offset, received.Count);
                        JObject obj = JObject.Parse(message);
                        switch(obj["messageType"].Value<string>())
                        {
                            case "attributeUpdate":
                                int universeID = obj["universeID"].Value<int>();
                                int channel = obj["fixtureChannel"].Value<int>();
                                string attributeName = obj["attributeName"].Value<string>();
                                float attributeValue = obj["attributeValue"].Value<float>();
                                Universe universe = MasterController.Instance.Venue.Universes[universeID];
                                if (universe != null)
                                {
                                    Fixture fixture = universe.Fixtures.SingleOrDefault(x => x.StartChannel == channel);
                                    if(fixture != null)
                                    {
                                        fixture.Settables[attributeName].Value = attributeValue;
                                    }
                                }
                                break;
                        }
                        break;
                    case WebSocketMessageType.Close:
                        foreach (Universe universe in MasterController.Instance.Venue?.Universes.Values)
                        {
                            universe.Updated -= Universe_Updated;
                        }
                        break;
                }
            }
        }

        private async void Universe_Updated(object sender, DMXEventArgs e)
        {
            Universe universe = sender as Universe;
            JObject obj = new JObject(
                new JProperty("messageType", "universeUpdate"),
                new JProperty("universeID", universe.UniverseID),
                new JProperty("fixtures",
                    new JArray(
                        from fixture in universe.Fixtures
                        select new JObject(
                            new JProperty("channel", fixture.StartChannel),
                            new JProperty("attributes", 
                                new JArray(
                                    from attribute in fixture.Settables.Values
                                    where (attribute is FixtureSolverAttribute || attribute is DMXChannel)
                                    select new JObject(
                                        new JProperty("name", attribute.Name),
                                        new JProperty("value", attribute.Value)
                                    )
                                )
                            )
                        )
                    )
                )
            );
            byte[] sendBuffer = Encoding.UTF8.GetBytes(obj.ToString());
            ArraySegment<byte> sendSegment = new ArraySegment<byte>(sendBuffer);
            try
            {
                await Socket.SendAsync(sendSegment, WebSocketMessageType.Text, true, CancellationToken.None);
            }
            catch(Exception)
            { }
        }

        static async Task Acceptor(HttpContext hc, Func<Task> n)
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;

            var socket = await hc.WebSockets.AcceptWebSocketAsync();
            var h = new FixturesLive(socket);
            await h.RenderLoop();
        }

        public static void Map(IApplicationBuilder app)
        {
            app.Use(FixturesLive.Acceptor);
        }
    }
}
