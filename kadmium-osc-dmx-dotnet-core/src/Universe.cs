using kadmium_osc_dmx_dotnet_core.Fixtures;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Universe
    {
        public static int DMX_UNIVERSE_SIZE = 512;
        public string Name { get; set; }
        public int UniverseID { get; set; }
        public List<Fixture> Fixtures { get; }
        public byte[] DMX { get; }
        public event EventHandler<DMXEventArgs> Updated;
        public event EventHandler<DMXEventArgs> Rendered;

        public Universe(string name, int universeID, List<Fixture> fixtures)
        {
            Name = name;
            UniverseID = universeID;
            Fixtures = fixtures;
            DMX = new byte[DMX_UNIVERSE_SIZE];
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("universeID", UniverseID)
            );
            return obj;
        }

        public void Clear()
        {
            foreach (Fixture fixture in Fixtures)
            {
                fixture.Dispose();
            }
        }

        public JObject SerializeForVenue()
        {
            JObject obj = Serialize();
            obj.Add(
                new JProperty("fixtures",
                    from fixture in Fixtures
                    select fixture.Serialize()
                )
            );
            return obj;
        }

        public static async Task<Universe> Load(JObject universeElement)
        {
            string name = universeElement["name"].Value<string>();
            int universeID = universeElement["universeID"].Value<int>();
            IEnumerable<Task<Fixture>> fixturesQuery = from fixture in universeElement["fixtures"].Values<JObject>()
                                                       select Fixture.Load(fixture);


            List<Fixture> fixtures = (await Task.WhenAll(fixturesQuery)).ToList();

            Universe universe = new Universe(name, universeID, fixtures);
            return universe;
        }

        public void Update()
        {
            foreach (Fixture fixture in Fixtures)
            {
                fixture.Update();
                fixture.Render(DMX);
            }
            Updated?.Invoke(this, new DMXEventArgs(DMX));
        }

        public void Render()
        {
            MasterController.Instance.Transmitter.Transmit(DMX, UniverseID);
            Rendered?.Invoke(this, new DMXEventArgs(DMX));
        }
    }

    public class DMXEventArgs : EventArgs
    {
        public byte[] DMX { get; }
        public DMXEventArgs(byte[] dmx)
        {
            DMX = dmx;
        }
    }
}
