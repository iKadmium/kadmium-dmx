using kadmium_osc_dmx_dotnet_core;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class VenueTests
    {
        [Fact]
        public void LoadAllIncludedVenues()
        {
            MasterController.Initialise();
            foreach (string venueName in FileAccess.GetVenueNames())
            {
                MasterController.Instance.LoadVenue(venueName);
            }
        }
    }
}
