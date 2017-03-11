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
        public int StartChannel { get; set; }
        public int EndChannel { get { return StartChannel + Definition.Channels.Max(x => x.Address); } }
        
        public FixtureDefinition Definition { get; set; }
        [NotMapped]
        public Dictionary<string, Solvers.Attribute> Settables { get; }
        [NotMapped]
        public Dictionary<string, Solvers.Attribute> FrameSettables { get; }
        [NotMapped]
        public Dictionary<string, MovementAxis> MovementAxis { get; }
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
        public Group Group { get; set; }

        public int Id { get; set; }

        public Fixture(FixtureDefinition definition, int startChannel, Group group, JObject options)
        {
            Definition = definition;
            Solvers = new List<FixtureSolver>();
            Settables = new Dictionary<string, Solvers.Attribute>();
            FrameSettables = new Dictionary<string, Solvers.Attribute>();
            foreach (Solvers.Attribute attribute in Definition.Channels)
            {
                Settables.Add(attribute.Name, attribute);
                FrameSettables.Add(attribute.Name, attribute);
            }
            MovementAxis = new Dictionary<string, MovementAxis>();
            foreach (var axis in Definition.Movements)
            {
                MovementAxis.Add(axis.Name, axis);
            }
            Solvers.AddRange(FixtureSolver.GetDefaultSolvers(this, options));
            Options = options;
            StartChannel = startChannel;
            Group = group;
            Group.Fixtures.Add(this);
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
                        new JProperty("manufacturer", Definition.Manufacturer),
                        new JProperty("model", Definition.Model)
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
            using (var context = new DatabaseContext())
            {
                definition = context.FixtureDefinitions.Single(x => x.Manufacturer == manufacturer && x.Model == model);
            }
            string groupName = obj["group"].Value<string>();
            Group group = MasterController.Instance.Groups.ContainsKey(groupName) ? MasterController.Instance.Groups[groupName] : MasterController.Instance.Groups.Values.First();
            JObject options = obj["options"].Value<JObject>();
            Fixture fixture = new Fixture(definition, startChannel, group, options);
            return fixture;
        }

        public void Render(byte[] dmx)
        {
            var channels = from channel in Definition.Channels
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
            return Definition.Model + " [" + StartChannel + " - " + EndChannel + "]";
        }
    }
}
