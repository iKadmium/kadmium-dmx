using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class MovementAxis
    {
        public MovementAxis(string name, int min, int max)
        {
            Name = name;
            Min = min;
            Max = max;
        }

        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
    }
}
