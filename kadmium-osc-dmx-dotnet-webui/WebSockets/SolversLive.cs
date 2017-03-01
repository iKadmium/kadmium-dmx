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
                foreach (Universe universe in MasterController.Instance.Venue?.Universes.Values)
                {
                    universe.Updated += Universe_Updated;
                }
            }
        }

        public void UpdateAttribute(int universeID, int fixtureChannel, string attributeName, float attributeValue)
        {
            Universe universe = MasterController.Instance.Venue.Universes[universeID];
            if (universe != null)
            {
                Fixture fixture = universe.Fixtures.SingleOrDefault(x => x.StartChannel == fixtureChannel);
                if (fixture != null)
                {
                    fixture.Settables[attributeName].Value = attributeValue;
                }
            }
        }

        public void UpdateAttribute(JObject args)
        {
            UpdateAttribute(args["universeID"].Value<int>(), args["fixtureChannel"].Value<int>(), args["attributeName"].Value<string>(), args["attributeValue"].Value<float>());
        }

        private async void Universe_Updated(object sender, DMXEventArgs e)
        {
            Universe universe = sender as Universe;
            WebSocketMessage message = new WebSocketMessage("updateUniverse", new Dictionary<string, object>
            {
                ["universeID"] = universe.UniverseID,
                ["fixtures"] = from fixture in universe.Fixtures
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
            });
            await Send(message);
        }

        public override void Dispose()
        {
            foreach (Universe universe in MasterController.Instance.Venue?.Universes.Values)
            {
                universe.Updated -= Universe_Updated;
            }
        }
    }
}
