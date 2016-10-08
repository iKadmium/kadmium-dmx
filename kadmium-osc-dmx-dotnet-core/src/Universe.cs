﻿using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Universe
    {
        public static int DMX_UNIVERSE_SIZE = 512;
        public string Name { get; set; }
        public IEnumerable<Transmitter> TransmitterTargets { get; set; }
        public List<Fixture> Fixtures { get; }
        public byte[] DMX { get; }
        public event EventHandler<DMXEventArgs> Updated;
        public event EventHandler<DMXEventArgs> Rendered;

        public Universe(string name, IEnumerable<Transmitter> transmitterTargets)
        {
            Name = name;
            TransmitterTargets = transmitterTargets;
            Fixtures = new List<Fixture>();
            DMX = new byte[DMX_UNIVERSE_SIZE];
        }

        public Universe() : this("", Enumerable.Empty<Transmitter>())
        {
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("transmitters",
                    from transmitter in TransmitterTargets
                    select transmitter.Name
                )
            );
            return obj;
        }

        public static Universe Load(JObject universeElement)
        {
            var targets = from transmitterName in universeElement["transmitters"].Values<string>()
                          select MasterController.Instance.Transmitters.Single(x => x.Name == transmitterName);
            string name = universeElement["name"].Value<string>();
            Universe universe = new Universe(name, targets);
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
            foreach (Transmitter transmitter in TransmitterTargets)
            {
                transmitter.Transmit(DMX);
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