using kadmium_dmx_core.Solvers;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace kadmium_dmx_core.Fixtures
{
    public class Fixture : System.IEquatable<Fixture>
    {
        public int Id { get; set; }

        [JsonProperty(PropertyName = "address")]
        public int StartChannel { get; set; }

        [NotMapped]
        [JsonIgnore]
        public FixtureDefinition FixtureDefinition { get; set; }
        [NotMapped]
        [JsonProperty(PropertyName = "type")]
        public FixtureDefinitionSkeleton Skeleton { get; set; }
        [NotMapped]
        [JsonIgnore]
        public Dictionary<string, Solvers.Attribute> Settables { get; }
        [NotMapped]
        [JsonIgnore]
        public Dictionary<string, Solvers.Attribute> FrameSettables { get; }
        [NotMapped]
        [JsonIgnore]
        public Dictionary<string, MovementAxis> MovementAxis { get; set; }
        [NotMapped]
        [JsonIgnore]
        public List<FixtureSolver> Solvers { get; }
        [NotMapped]
        public JObject Options { get; set; }
        [JsonIgnore]
        public string OptionsString
        {
            get
            {
                return Options.ToString();
            }
            set
            {
                Options = JObject.Parse(value);
            }
        }
        [JsonIgnore]
        public Group Group { get; set; }
        [NotMapped]
        [JsonProperty(PropertyName = "group")]
        public string GroupString { get; set; }

        public Fixture()
        {
            Solvers = new List<FixtureSolver>();
            Settables = new Dictionary<string, Attribute>();
            FrameSettables = new Dictionary<string, Attribute>();
            MovementAxis = new Dictionary<string, Fixtures.MovementAxis>();
            StartChannel = 1;
            Options = new JObject()
            {
                new JProperty("maxBrightness", 1.0f)
            };
        }

        public Fixture(int startChannel, JObject options) : this()
        {
            Options = options;
            StartChannel = startChannel;
        }

        public void Update()
        {
            foreach (KeyValuePair<string, Solvers.Attribute> kvp in Settables)
            {
                FrameSettables[kvp.Key].Value = kvp.Value.Value;
            }

            foreach (FixtureSolver solver in Solvers.Where(solver => solver != null))
            {
                solver.Solve(FrameSettables);
            }
        }

        public void Dispose()
        {
            Group.Fixtures.Remove(this);
        }

        public void Render(byte[] dmx)
        {
            var channels = from channel in FrameSettables.Values
                           where channel is DMXChannel
                           group (channel as DMXChannel) by (channel as DMXChannel).Address into chanGroup
                           select chanGroup;

            foreach (var channelGroup in channels)
            {
                DMXChannel channel;
                if (channelGroup.Count() > 1)
                {
                    var channelsWithValue = channelGroup.Where(x => x.Value > 0);

                    if (channelsWithValue.Count() > 0)
                    {
                        channel = channelsWithValue.OrderByDescending(x => x.Min).First();
                    }
                    else
                    {
                        channel = channelGroup.First();
                    }
                }
                else
                {
                    channel = channelGroup.Single();
                }
                dmx[channel.Address + StartChannel - 2] = channel.ByteValue;
            }
        }

        public void Activate()
        {
            var grp = MasterController.Instance.Groups.Values.Single(x => x.Id == Group.Id);
            grp.Fixtures.Add(this);
        }

        public void Deactivate()
        {
            var grp = MasterController.Instance.Groups.Values.Single(x => x.Id == Group.Id);
            grp.Fixtures.Remove(this);
        }

        public override string ToString()
        {
            return string.Format("{0} {1} [{2}]", Skeleton.Manufacturer, Skeleton.Model, StartChannel);
        }

        public void Initialize(FixtureDefinition definition, Group group)
        {
            InitializeFixtureDefinition(definition);
            InitializeGroup(group);
        }

        public async Task Initialize(DatabaseContext context)
        {
            await InitializeFixtureDefinition(context);
            InitializeGroup(context);
        }

        private void InitializeFixtureDefinition(FixtureDefinition definition)
        {
            FixtureDefinition = definition;
            Settables.Clear();
            FrameSettables.Clear();
            Solvers.Clear();
            foreach (Solvers.Attribute attribute in FixtureDefinition.Channels)
            {
                Settables.Add(attribute.Name, attribute.Clone());
                FrameSettables.Add(attribute.Name, attribute.Clone());
            }
            MovementAxis.Clear();
            foreach (var axis in FixtureDefinition.Movements)
            {
                MovementAxis.Add(axis.Name, axis.Clone());
            }
            Solvers.AddRange(FixtureSolver.GetDefaultSolvers(this, Options));
        }

        private async Task InitializeFixtureDefinition(DatabaseContext context)
        {
            FixtureDefinition fixtureDefinition;
            if (Skeleton.Id == 0)
            {
                fixtureDefinition = await context.LoadFixtureDefinition(Skeleton.Manufacturer, Skeleton.Model);
            }
            else
            {
                fixtureDefinition = await context.LoadFixtureDefinition(Skeleton.Id);
            }
            InitializeFixtureDefinition(fixtureDefinition);
        }

        private void InitializeGroup(DatabaseContext context)
        {
            var group = context.Groups.Single(x => x.Name == GroupString);
            InitializeGroup(group);
        }

        private void InitializeGroup(Group group)
        {
            Group = group;
        }

        public bool Equals(Fixture other)
        {
            if (other.StartChannel != StartChannel) { return false; }
            if (other.OptionsString != OptionsString) { return false; }
            if (other.FixtureDefinition == null || FixtureDefinition == null)
            {
                if (other.Skeleton != null && this.Skeleton != null)
                {

                    if (!other.Skeleton.Equals(Skeleton)) { return false; }
                }
            }
            else
            {
                if (!other.FixtureDefinition.Equals(FixtureDefinition)) { return false; }
            }
            return true;
        }
    }
}
