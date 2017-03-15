using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace kadmium_osc_dmx_dotnet_core
{
    [JsonObject(MemberSerialization.OptOut) ]
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        [NotMapped]
        [JsonIgnore]
        public List<GroupSolver> Solvers { get; }
        [NotMapped]
        [JsonIgnore]
        public List<Fixture> Fixtures { get; }
        [NotMapped]
        [JsonIgnore]
        public Dictionary<string, Attribute> Settables { get; }
        [NotMapped]
        [JsonIgnore]
        public Dictionary<string, Attribute> FrameSettables { get; }
        
        public Group(string name, int order)
        {
            Name = name;
            Order = order;
            Fixtures = new List<Fixture>();
            Solvers = new List<GroupSolver>();
            Settables = new Dictionary<string, Attribute>();
            FrameSettables = new Dictionary<string, Attribute>();
            Solvers.AddRange(GroupSolver.GetDefaultSolvers(this, Enumerable.Empty<string>()));
        }

        public Group() : this("", int.MaxValue)
        {
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
            foreach (KeyValuePair<string, Attribute> kvp in Settables)
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

        public static Group Load(JObject groupObject)
        {
            string name = groupObject["name"].Value<string>();
            int order = groupObject["order"]?.Value<int>() ?? MasterController.Instance.Groups.Count + 1;
            return new Group(name, order);
        }

        public override string ToString()
        {
            return Name;
        }
    }
}
