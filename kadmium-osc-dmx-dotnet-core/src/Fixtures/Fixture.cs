using kadmium_osc_dmx_dotnet_core.Solvers;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Fixture
    {
        public int StartChannel { get; set; }
        public int EndChannel { get { return StartChannel + Definition.Channels.Max(x => x.RelativeAddress); } }

        public Definition Definition { get; }
        public Dictionary<string, Solvers.Attribute> Settables { get; }
        public Dictionary<string, Solvers.Attribute> FrameSettables { get; }
        public Dictionary<string, MovementAxis> MovementAxis { get; }
        public List<FixtureSolver> Solvers { get; }
        
        public Fixture(Definition definition, IEnumerable<string> options)
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
            foreach(var axis in Definition.Axis)
            {
                MovementAxis.Add(axis.Name, axis);
            }

            foreach(var solver in FixtureSolver.GetDefaultSolvers(this, options))
            {
                Solvers.Add(solver);
            }
        }

        public JObject RenderToJSON()
        {
            var relevant = new string[] { "", "" };
            var color = new OSCforPCL.Values.Color(
                (byte)Math.Round(FrameSettables["Red"].Value * 255),
                (byte)Math.Round(FrameSettables["Green"].Value * 255),
                (byte)Math.Round(FrameSettables["Blue"].Value * 255),
                255);

            JObject obj = new JObject(
                new JProperty("address", StartChannel),
                new JProperty("color", string.Format("#{0:X2}{1:X2}{2:X2}", color.Red, color.Green, color.Blue)),
                new JProperty("channels",
                    from channel in Definition.Channels
                    select new JObject(
                        new JProperty(channel.RelativeAddress + StartChannel - 1 + "", channel.ByteValue)
                    )
                ),
                new JProperty("movements",
                    from movement in MovementAxis.Values
                    select new JObject(
                        new JProperty("name", movement.Name),
                        new JProperty("value", FrameSettables[movement.Name + "Coarse"].Value)
                    )
                )
            );

            return obj;
        }

        internal void Update()
        {
            foreach(KeyValuePair<string, Solvers.Attribute> kvp in Settables)
            {
                FrameSettables[kvp.Key].Value = kvp.Value.Value;
            }

            foreach(FixtureSolver solver in Solvers.Where(solver => solver != null))
            {
                solver.Solve(FrameSettables);
            }
        }

        public void Render(byte[] dmx)
        {
            var channels = from channel in Definition.Channels
                           group channel by channel.RelativeAddress into chanGroup
                           select chanGroup;

            foreach (var channelGroup in channels)
            {
                DMXChannel channel = channelGroup.OrderByDescending(chan => chan.Value).ThenByDescending(chan => chan.Min).First();
                dmx[channel.RelativeAddress + StartChannel - 2] = channel.ByteValue;
            }
        }

        public override string ToString()
        {
            return Definition.Name + " [" + StartChannel + " - " + EndChannel + "]";
        }
    }
}
