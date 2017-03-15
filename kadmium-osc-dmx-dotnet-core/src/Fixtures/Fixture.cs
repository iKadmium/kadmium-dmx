using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Fixture
    {
        public int Id { get; set; }

        public int StartChannel { get; set; }
        public int EndChannel { get { return StartChannel + FixtureDefinition.Channels.Max(x => x.Address); } }

        private FixtureDefinition fixtureDefinition;
        public FixtureDefinition FixtureDefinition
        {
            get { return fixtureDefinition; }
            set
            {
                fixtureDefinition = value;
                Settables.Clear();
                FrameSettables.Clear();
                foreach (Solvers.Attribute attribute in FixtureDefinition.Channels)
                {
                    Settables.Add(attribute.Name, attribute);
                    FrameSettables.Add(attribute.Name, attribute);
                }
                MovementAxis.Clear();
                foreach (var axis in FixtureDefinition.Movements)
                {
                    MovementAxis.Add(axis.Name, axis);
                }
                Solvers.AddRange(FixtureSolver.GetDefaultSolvers(this, Options));
            }
        }
        [NotMapped]
        public Dictionary<string, Solvers.Attribute> Settables { get; }
        [NotMapped]
        public Dictionary<string, Solvers.Attribute> FrameSettables { get; }
        [NotMapped]
        public Dictionary<string, MovementAxis> MovementAxis { get; set; }
        [NotMapped]
        public List<FixtureSolver> Solvers { get; }
        [NotMapped]
        public JObject Options { get; set; }
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
        private Group group;
        public Group Group {
            get { return group; }
            set
            {
                if(group != null)
                {
                    group.Fixtures.Remove(this);
                }
                group = value;
                group.Fixtures.Add(this);
            }
        }

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

        public Fixture(FixtureDefinition definition, int startChannel, Group group, JObject options) : this()
        {
            FixtureDefinition = definition;
            Options = options;
            
            StartChannel = startChannel;
            Group = group;
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

        public JObject Serialize()
        {
            Group group = MasterController.Instance.Groups.Values.Single(x => x.Fixtures.Contains(this));

            JObject obj = new JObject(
                new JProperty("channel", StartChannel),
                new JProperty("type",
                    new JObject(
                        new JProperty("manufacturer", FixtureDefinition.Manufacturer),
                        new JProperty("model", FixtureDefinition.Model)
                    )
                ),
                new JProperty("group", group.Name),
                new JProperty("options", Options)
            );

            return obj;
        }

        public void Dispose()
        {
            Group.Fixtures.Remove(this);
        }

        public static Fixture Load(JObject obj)
        {
            int startChannel = obj["channel"].Value<int>();
            JObject type = obj["type"].Value<JObject>();
            string model = type["model"].Value<string>();
            string manufacturer = type["manufacturer"].Value<string>();
            FixtureDefinition definition = null;
            string groupName = obj["group"].Value<string>();
            Group group = null;
            using (var context = new DatabaseContext())
            {
                definition = context.FixtureDefinitions.Single(x => x.Manufacturer == manufacturer && x.Model == model);
                group = context.Groups.Single(x => x.Name == groupName);
            }
            
            JObject options = obj["options"].Value<JObject>();
            Fixture fixture = new Fixture(definition, startChannel, group, options);
            return fixture;
        }

        public void Render(byte[] dmx)
        {
            var channels = from channel in FixtureDefinition.Channels
                           group channel by channel.Address into chanGroup
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

        public override string ToString()
        {
            return FixtureDefinition.Model + " [" + StartChannel + " - " + EndChannel + "]";
        }
    }
}
