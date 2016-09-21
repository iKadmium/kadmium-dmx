using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Solvers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Pixel
    {
        public List<DMXAdapter> Adapters { get; set; }
        public List<PixelSolver> Solvers { get; set; }

        public event EventHandler Updated;

        public Dictionary<string, Solvers.Attribute> Settables
        {
            get
            {
                var adapterChannels = Adapters.SelectMany(x => x.Channels.Values);
                var solverChannels = Solvers.SelectMany(x => x.Attributes.Values);
                var allChannels = adapterChannels.Union(solverChannels).ToDictionary(x => x.Name, x => x);
                return allChannels;
            }
        }
        
        public Pixel()
        {
            Adapters = new List<DMXAdapter>();
            Solvers = new List<PixelSolver>();
        }

        public void Update()
        {
            foreach(Solver solver in Solvers)
            {
                solver.Solve();
            }
        }

        internal void MarkUpdated()
        {
            Updated?.Invoke(this, new EventArgs());
        }
    }
}
