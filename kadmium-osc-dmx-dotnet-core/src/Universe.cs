using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class TransmitterTarget
    {
        public string TransmitterName { get; set; }
        public int UniverseID { get; set; }

        public TransmitterTarget(string transmitterName, int universeID)
        {
            TransmitterName = transmitterName;
            UniverseID = universeID;
        }

        public static TransmitterTarget Load(JObject obj)
        {
            string name = obj["name"].Value<string>();
            int universeID = obj["universeID"].Value<int>();
            return new TransmitterTarget(name, universeID);
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", TransmitterName),
                new JProperty("universeID", UniverseID)
            );
            return obj;
        }

        public void Transmit(byte[] dmx)
        {
            if (MasterController.Instance.Transmitters.ContainsKey(TransmitterName))
            {
                MasterController.Instance.Transmitters[TransmitterName].Transmit(dmx, UniverseID);
            }
        }
    }

    public class Universe
    {
        public static int DMX_UNIVERSE_SIZE = 512;
        public string Name { get; set; }
        public IEnumerable<TransmitterTarget> TransmitterTargets { get; set; }
        public IEnumerable<Fixture> Fixtures { get; }
        public byte[] DMX { get; }
        public event EventHandler<DMXEventArgs> Updated;
        public event EventHandler<DMXEventArgs> Rendered;

        public Universe(string name, IEnumerable<TransmitterTarget> transmitterTargets, IEnumerable<Fixture> fixtures)
        {
            Name = name;
            TransmitterTargets = transmitterTargets;
            Fixtures = fixtures;
            DMX = new byte[DMX_UNIVERSE_SIZE];
        }
        
        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("transmitters",
                    from transmitter in TransmitterTargets
                    select transmitter.TransmitterName
                )
            );
            return obj;
        }

        public void Clear()
        {
            foreach(Fixture fixture in Fixtures)
            {
                fixture.Dispose();
            }
        }

        public JObject SerializeForVenue()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("fixtures",
                    from fixture in Fixtures
                    select fixture.Serialize()
                ),
                new JProperty("transmitters",
                    from transmitterTarget in TransmitterTargets
                    select transmitterTarget.Serialize()
                )
            );
            return obj;
        }
        
        public static Universe Load(JObject universeElement)
        {
            string name = universeElement["name"].Value<string>();
            IEnumerable<TransmitterTarget> transmitterTargetsQuery = from transmitterTarget in universeElement["transmitters"].Values<JObject>()
                                                                     select TransmitterTarget.Load(transmitterTarget);
            IEnumerable<Fixture> fixturesQuery = from fixture in universeElement["fixtures"].Values<JObject>()
                                                 select Fixture.Load(fixture);

            var transmitterTargets = transmitterTargetsQuery.ToList();
            var fixtures = fixturesQuery.ToList();

            Universe universe = new Universe(name, transmitterTargets, fixtures);
            return universe;
        }

        public void Update()
        {
            foreach(Fixture fixture in Fixtures)
            {
                fixture.Update();
                fixture.Render(DMX);
            }
            Updated?.Invoke(this, new DMXEventArgs(DMX));
        }

        public void Render()
        {
            foreach (TransmitterTarget transmitterTarget in TransmitterTargets)
            {
                transmitterTarget.Transmit(DMX);
            }
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
