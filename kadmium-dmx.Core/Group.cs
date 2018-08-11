using kadmium_dmx_core.Fixtures;
using kadmium_dmx_core.Solvers;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using System.Runtime.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using kadmium_dmx_data.Types;

namespace kadmium_dmx_core
{
    [JsonObject(MemberSerialization.OptOut) ]
    [DataContract]
    public class Group
    {
        public string Name { get; set; }
        public int Order { get; set; }
        public List<GroupSolver> Solvers { get; }
        public List<Fixture> Fixtures { get; }
        public Dictionary<string, FixtureAttribute> Settables { get; }
        public Dictionary<string, FixtureAttribute> FrameSettables { get; }
        
        public Group(IGroupData data)
        {
            Name = data.Name;
            Order = data.Order;
            Fixtures = new List<Fixture>();
            Solvers = new List<GroupSolver>();
            Settables = new Dictionary<string, FixtureAttribute>();
            FrameSettables = new Dictionary<string, FixtureAttribute>();
            Solvers.AddRange(GroupSolver.GetDefaultSolvers(this, Enumerable.Empty<string>()));
        }

        public void Set(string attribute, float value)
        {
            if (Settables.ContainsKey(attribute))
            {
                Settables[attribute].Value = value;
            }

            foreach (Fixture fixture in Fixtures)
            {
                if (fixture.Settables.ContainsKey(attribute))
                {
                    fixture.Settables[attribute].Value = value;
                }
            }
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("order", Order)
            );
            return obj;
        }

        internal void Update()
        {
            foreach (KeyValuePair<string, FixtureAttribute> kvp in Settables)
            {
                FrameSettables[kvp.Key].Value = kvp.Value.Value;
            }
            foreach (GroupSolver solver in Solvers)
            {
                solver.Solve(FrameSettables);
            }
        }

        public void Clear()
        {
            Fixtures.Clear();
        }
        
        public override string ToString()
        {
            return Name;
        }
    }
}
