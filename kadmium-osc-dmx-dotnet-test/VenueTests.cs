using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_test.Solvers;
using kadmium_osc_dmx_dotnet_webui;
using kadmium_osc_dmx_dotnet_webui.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class VenueTests
    {
        [Fact]
        public async Task TestPost()
        {
            FixtureDefinition definition;
            Group group;
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();

                definition = await context.FixtureDefinitions.FirstAsync();
                group = await context.Groups.FirstAsync();
            }
            
            using (var context = DatabaseTests.GetContext())
            {
                Venue venue = GetSingleFixtureVenue(definition, group);
                var controller = new VenueController(context);
                int id = await controller.Post(venue);

                Assert.NotEqual(0, id);
                Assert.Contains(venue, context.Venues);
                Assert.Equal(venue.Id, id);
            }    
        }
        
        [InlineData("InitialVenueName", "InitialUniverseName", "ChangedVenueName", "ChangedUniverseName")]
        [Theory]
        public async Task TestPostGetPut_ChangedNames(string initialVenueName, string initialUniverseName, string changedVenueName, string changedUniverseName)
        {
            FixtureDefinition firstDefinition;
            Group firstGroup;
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();

                firstDefinition = await context.FixtureDefinitions.FirstAsync();
                firstGroup = await context.Groups.FirstAsync();
            }

            int id;
            using (var context = DatabaseTests.GetContext())
            {
                Venue initialVenue = GetSingleFixtureVenue(firstDefinition, firstGroup, initialVenueName, initialUniverseName);
                var controller = new VenueController(context);
                id = await controller.Post(initialVenue);
            }

            using (var context = DatabaseTests.GetContext())
            {
                var controller = new VenueController(context);
                Venue retrievedVenue = await controller.Get(id);

                Assert.Equal(initialVenueName, retrievedVenue.Name);
                Assert.Equal(initialUniverseName, retrievedVenue.Universes.First().Name);
            }
            
            using (var context = DatabaseTests.GetContext())
            {
                var controller = new VenueController(context);
                Venue replacementVenue = await controller.Get(id);
                replacementVenue.Name = changedVenueName;
                replacementVenue.Universes.First().Name = changedUniverseName;
                await controller.Put(id, replacementVenue);
            }

            using (var context = DatabaseTests.GetContext())
            {
                var controller = new VenueController(context);
                var retrievedVenue = await controller.Get(id);

                Assert.Equal(changedVenueName, retrievedVenue.Name);
                Assert.Equal(changedUniverseName, retrievedVenue.Universes.First().Name);
            }
        }

        public static Venue GetSingleFixtureVenue(FixtureDefinition definition, Group group, string venueName = "Test Venue", string universeName = "Test Universe")
        {
            Venue venue = new Venue()
            {
                Name = venueName,
                Universes = new List<Universe>()
                {
                    new Universe(universeName, 1, new List<Fixture>()
                    {
                        new Fixture()
                        {
                            StartChannel = 1,
                            GroupString = group.Name,
                            Skeleton = definition.GetSkeleton()
                        }
                    })
                }
            };
            return venue;
        }
    }
}
