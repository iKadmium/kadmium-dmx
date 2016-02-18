using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class Attribute
    {
        public float Value { get; set; }
        public string Name { get; set; }

        public Attribute(string name, float value = 0.0f)
        {
            Name = name;
            Value = value;
        }
    }
}
