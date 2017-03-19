using kadmium_osc_dmx_dotnet_core;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class VenueTests
    {
        [Fact]
        public async void LoadAllIncludedVenues()
        {
            await MasterController.Initialise();
            using (var context = new DatabaseContext())
            {
                foreach(var venue in context.Venues)
                {

                }
            }
                
        }
    }
}
