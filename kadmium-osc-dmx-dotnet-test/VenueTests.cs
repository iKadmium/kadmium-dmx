using kadmium_osc_dmx_dotnet_core;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class VenueTests
    {
        [Fact]
        public void TestSerialization()
        {
            MasterController.Initialise();

            foreach (string venueName in FileAccess.GetVenueNames())
            {
                var venueSourceJson = FileAccess.LoadVenue(venueName);
                var venue = Venue.Load(venueSourceJson);
                var destinationJson = venue.Serialize();

                Assert.Equal(venueSourceJson.ToString(), destinationJson.ToString());
            }
        }

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
