using kadmium_dmx_core.Solvers;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using MongoDB.Bson.Serialization.Attributes;
using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;

namespace kadmium_dmx_core.Fixtures
{
    public class Fixture
    {
        public FixtureDefinitionSkeleton FixtureDefinitionSkeleton { get; set; }
        public Dictionary<string, FixtureAttribute> Settables { get; }
        public Dictionary<string, FixtureAttribute> FrameSettables { get; }
        public Dictionary<string, MovementAxis> MovementAxis { get; set; }
        public List<ColorWheelEntry> ColorWheel { get; set; }
        public List<FixtureSolver> Solvers { get; }

        public string Group { get; set; }
        public int Address { get; set; }
        public JObject Options { get; set; }
        
        public Fixture(IFixtureData data, IFixtureDefinition definition)
        {
            Group = data.Group;
            Options = JObject.Parse(data.Options);
            Address = data.Address;
            FixtureDefinitionSkeleton = definition.Skeleton;

            Settables = new Dictionary<string, FixtureAttribute>();
            FrameSettables = new Dictionary<string, FixtureAttribute>();
            foreach (var attributeData in definition.Channels)
            {
                Settables.Add(attributeData.Name, new DMXChannel(attributeData));
                FrameSettables.Add(attributeData.Name, new DMXChannel(attributeData));
            }
            MovementAxis = new Dictionary<string, Fixtures.MovementAxis>();
            foreach (var axis in definition.Movements)
            {
                MovementAxis.Add(axis.Name, new MovementAxis(axis));
            }
            var colorWheelEntries = from entryData in definition.ColorWheel
                          select new ColorWheelEntry(entryData);
            ColorWheel = colorWheelEntries.ToList();

            Solvers = FixtureSolver.GetDefaultSolvers(this, definition, Options).ToList();
        }

        public void Update()
        {
            foreach (KeyValuePair<string, FixtureAttribute> kvp in Settables)
            {
                FrameSettables[kvp.Key].Value = kvp.Value.Value;
            }

            foreach (FixtureSolver solver in Solvers.Where(solver => solver != null))
            {
                solver.Solve(FrameSettables);
            }
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
                dmx[channel.Address + Address - 2] = channel.ByteValue;
            }
        }

        public override string ToString()
        {
            return $"{FixtureDefinitionSkeleton.Manufacturer} {FixtureDefinitionSkeleton.Model} [{Address}]";
        }
    }
}
