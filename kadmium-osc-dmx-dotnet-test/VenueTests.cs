using kadmium_osc_dmx_dotnet_core;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class VenueTests
    {
        [Fact]
        public async void TestSerialization()
        {
            await MasterController.Initialise();

            using (DatabaseContext context = new DatabaseContext())
            {
                foreach (string venueName in FileAccess.GetVenueNames())
                {
                    var venueSourceJson = await FileAccess.LoadVenue(venueName);
                    var venue = Venue.Load(venueSourceJson, context);
                    var destinationJson = venue.Serialize();

                    Assert.Equal(venueSourceJson.ToString(), destinationJson.ToString());
                }
            }
        }

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
