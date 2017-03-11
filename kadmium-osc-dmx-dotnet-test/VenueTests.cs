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

            foreach (string venueName in FileAccess.GetVenueNames())
            {
                var venueSourceJson = await FileAccess.LoadVenue(venueName);
                var venue = Venue.Load(venueSourceJson);
                var destinationJson = venue.Serialize();

                Assert.Equal(venueSourceJson.ToString(), destinationJson.ToString());
            }
        }

        [Fact]
        public async void LoadAllIncludedVenues()
        {
            await MasterController.Initialise();
            foreach (string venueName in FileAccess.GetVenueNames())
            {
                await MasterController.Instance.LoadVenue(venueName);
            }
        }
    }
}
