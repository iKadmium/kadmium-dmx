using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Transmitters;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public class Universe : IDisposable
    {
        public static int DMX_UNIVERSE_SIZE = 512;

        public string Name { get; set; }
        public int UniverseID { get; set; }
        public List<Fixture> Fixtures { get; }
        public byte[] DMX { get; }
        public event EventHandler<UpdateEventArgs> Rendered;
        public event EventHandler<DMXEventArgs> Transmitted;

        public Universe(IUniverseData data, IDictionary<FixtureDefinitionSkeleton, FixtureDefinition> fixtureDefinitions)
        {
            Name = data.Name;
            UniverseID = data.UniverseID;
            var fixtures = from fixtureData in data.Fixtures
                           select new Fixture(fixtureData, fixtureDefinitions[fixtureData.Type]);
            Fixtures = fixtures.ToList();
            DMX = new byte[DMX_UNIVERSE_SIZE];

            Name = data.Name;
            UniverseID = data.UniverseID;
        }

        public void Dispose()
        {
            foreach (var client in Transmitted?.GetInvocationList() ?? Enumerable.Empty<Delegate>())
            {
                Transmitted -= (client as EventHandler<DMXEventArgs>);
            }
            foreach (var client in Rendered?.GetInvocationList() ?? Enumerable.Empty<Delegate>())
            {
                Rendered -= (client as EventHandler<UpdateEventArgs>);
            }
        }

        public void Render()
        {
            foreach (Fixture fixture in Fixtures)
            {
                fixture.Update();
                fixture.Render(DMX);
            }
            Rendered?.Invoke(this, new UpdateEventArgs(UniverseID, Fixtures));
        }

        public async Task Transmit(IEnumerable<Transmitter> transmitters)
        {
            foreach (var transmitter in transmitters)
            {
                await transmitter.Transmit(DMX, UniverseID);
            }
            Transmitted?.Invoke(this, new DMXEventArgs(DMX));
        }
        
        public override string ToString()
        {
            return Name;
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

    public class UpdateEventArgs : EventArgs
    {
        public int UniverseID { get; set; }
        public IEnumerable<Fixture> Fixtures { get; set; }

        public UpdateEventArgs(int universeID, IEnumerable<Fixture> fixtures)
        {
            this.UniverseID = universeID;
            this.Fixtures = fixtures;
        }
    }
}
