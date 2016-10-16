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
        public Transmitter Transmitter { get; }
        public int UniverseID { get; }

        public TransmitterTarget(Transmitter transmitter, int universeID)
        {
            Transmitter = transmitter;
            UniverseID = universeID;
        }

        public static TransmitterTarget Load(JObject obj)
        {
            string name = obj["name"].Value<string>();
            Transmitter transmitter = MasterController.Instance.Transmitters.Single(x => x.Name == name);
            int universeID = obj["universeID"].Value<int>();
            return new TransmitterTarget(transmitter, universeID);
        }

        public void Transmit(byte[] dmx)
        {
            Transmitter.Transmit(dmx, UniverseID);
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
                    select transmitter.Transmitter.Name
                )
            );
            return obj;
        }

        public JObject SerializeForVenue()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("fixtures",
                    from fixture in Fixtures
                    select fixture.Serialize()
                )
            );
            return obj;
        }
        
        public static Universe Load(JObject universeElement)
        {
            string name = universeElement["name"].Value<string>();
            IEnumerable<TransmitterTarget> transmitterTargets = from transmitterTarget in universeElement["transmitters"].Values<JObject>()
                                                                select TransmitterTarget.Load(transmitterTarget);
            IEnumerable<Fixture> fixtures = from fixture in universeElement["fixtures"].Values<JObject>()
                                            select Fixture.Load(fixture);
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
