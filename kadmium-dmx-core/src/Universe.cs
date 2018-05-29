using kadmium_dmx_core.Fixtures;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_core
{
    public class Universe : IDisposable, IEquatable<Universe>
    {
        public static int DMX_UNIVERSE_SIZE = 512;

        public int Id { get; set; }
        public string Name { get; set; }
        [JsonProperty(PropertyName = "universeID")]
        public int UniverseNumber { get; set; }
        public List<Fixture> Fixtures { get; }
        [NotMapped]
        [JsonIgnore]
        public byte[] DMX { get; }
        public event EventHandler<UpdateEventArgs> Rendered;
        public event EventHandler<DMXEventArgs> Transmitted;

        public Universe()
        {
            Name = "";
            UniverseNumber = 1;
            Fixtures = new List<Fixture>();
            DMX = new byte[DMX_UNIVERSE_SIZE];
        }

        public Universe(string name, int universeID, List<Fixture> fixtures) : this()
        {
            Name = name;
            UniverseNumber = universeID;
            Fixtures.AddRange(fixtures);
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("universeID", UniverseNumber)
            );
            return obj;
        }

        public void Dispose()
        {
            foreach (Fixture fixture in Fixtures)
            {
                fixture.Dispose();
            }
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
            Rendered?.Invoke(this, new UpdateEventArgs(UniverseNumber, Fixtures));
        }

        public async Task Initialize(DatabaseContext context)
        {
            foreach (Fixture fixture in Fixtures)
            {
                await fixture.Initialize(context);
            }
        }

        public async Task Transmit()
        {
            foreach (var transmitter in MasterController.Instance.Transmitters)
            {
                await transmitter.Transmit(DMX, UniverseNumber);
            }
            Transmitted?.Invoke(this, new DMXEventArgs(DMX));
        }

        public void Activate()
        {
            Fixtures.ForEach(x => x.Activate());
        }

        public void Deactivate()
        {
            Fixtures.ForEach(x => x.Deactivate());
        }

        public override string ToString()
        {
            return Name;
        }

        public bool Equals(Universe other)
        {
            if (other.Name != Name) { return false; }
            if (other.UniverseNumber != UniverseNumber) { return false; }
            foreach (Fixture fixture in Fixtures)
            {
                if (!other.Fixtures.Any(x => x.Equals(fixture))) { return false; }
            }
            foreach (Fixture fixture in other.Fixtures)
            {
                if (!Fixtures.Any(x => x.Equals(fixture))) { return false; }
            }
            return true;
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
