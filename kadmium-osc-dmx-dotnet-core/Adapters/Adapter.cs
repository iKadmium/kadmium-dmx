using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Adapters
{
    public abstract class Adapter
    {
        public AdapterType AdapterType { get; set; }
        public abstract Dictionary<string, Attribute> Channels { get; set; }
        
        public Adapter(AdapterType adapterType)
        {
            AdapterType = adapterType;
            Channels = new Dictionary<string, Attribute>();
        }
        public abstract Dictionary<int, byte> Adapt();
    }
}
