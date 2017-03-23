using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_test.Solvers;
using kadmium_osc_dmx_dotnet_webui;
using kadmium_osc_dmx_dotnet_webui.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
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

            int id;
            Venue venue;
            using (var context = DatabaseTests.GetContext())
            {
                venue = GetSingleFixtureVenue(definition, group);
                var controller = new VenueController(context);
                id = await controller.Post(venue);

                Assert.NotEqual(0, id);
            }

            using (var context = DatabaseTests.GetContext())
            {
                var retrievedVenue = await context.LoadVenue(id);
                Assert.Equal(venue.Name, retrievedVenue.Name);
            }
        }

        [Fact]
        public async Task TestGet()
        {
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
                await DatabaseTests.AddVenues(context);
                await context.SaveChangesAsync();
            }

            using (var context = DatabaseTests.GetContext())
            {
                VenueController controller = new VenueController(context);
                var skeletons = await controller.Get();
                Assert.True(skeletons.Count() > 0);
                var skeleton = skeletons.Single(x => x.Name == "Rehearsal Room");
                Venue venue = await controller.Get(skeleton.Id);
                Assert.Equal(skeleton.Name, venue.Name);
                Assert.Equal(1, venue.Universes.Count);
                var universe = venue.Universes.First();
                Assert.NotEmpty(universe.Name);
                Assert.NotEqual(0, universe.UniverseNumber);
                Assert.True(universe.Fixtures.Count > 0);
                foreach(var fixture in universe.Fixtures)
                {
                    Assert.True(fixture.StartChannel > 0);
                    Assert.NotNull(fixture.FixtureDefinition);
                    Assert.Equal(fixture.Skeleton.Manufacturer, fixture.FixtureDefinition.Manufacturer);
                    Assert.Equal(fixture.Skeleton.Model, fixture.FixtureDefinition.Model);
                    Assert.NotEmpty(fixture.FixtureDefinition.Channels);
                    Assert.NotNull(fixture.Group);
                    Assert.Equal(fixture.GroupString, fixture.Group.Name);
                }
            }
        }
        
        [InlineData("ChangedVenueName", "ChangedUniverseName")]
        [Theory]
        public async Task TestPut_ChangedNames(string changedVenueName, string changedUniverseName)
        {
            int id;
            //setup the database
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
                await DatabaseTests.AddVenues(context);
                await context.SaveChangesAsync();
                id = (await context.Venues.FirstAsync()).Id;
            }
            
            //get what was posted, modify it and post it back
            using (var context = DatabaseTests.GetContext())
            {
                Venue venue = await context.LoadVenue(id);
                Assert.NotEqual(changedVenueName, venue.Name);
                Assert.NotEqual(changedUniverseName, venue.Universes.First().Name);
                venue.Name = changedVenueName;
                venue.Universes.First().Name = changedUniverseName;
                await new VenueController(context).Put(id, venue);
            }

            //check that it's there
            using (var context = DatabaseTests.GetContext())
            {
                Venue venue = await context.LoadVenue(id);
                Assert.Equal(changedVenueName, venue.Name);
                Assert.Equal(changedUniverseName, venue.Universes.First().Name);
            }
        }

        [Fact]
        public async Task TestPostGetPut_ChangedUniverses()
        {
            FixtureDefinition firstDefinition, secondDefinition;
            Group secondGroup;
            int id;
            int expectedUniverseCount;
            //setup the database
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
                await DatabaseTests.AddVenues(context);
                await context.SaveChangesAsync();

                id = (await context.Venues.FirstAsync()).Id;
                firstDefinition = await context.FixtureDefinitions.FirstAsync();
                secondDefinition = await context.FixtureDefinitions.Skip(1).FirstAsync();
                secondGroup = await context.Groups.Skip(1).FirstAsync();
            }

            //get what was posted, modify it and post it back
            using (var context = DatabaseTests.GetContext())
            {
                Venue retrievedVenue = await context.LoadVenue(id);
                retrievedVenue.Universes.First().Name = "Changed Universe";
                retrievedVenue.Universes.Add(UniverseTests.GetSingleFixtureUniverse(secondDefinition, secondGroup, "New Universe"));
                expectedUniverseCount = retrievedVenue.Universes.Count;
                await new VenueController(context).Put(id, retrievedVenue);
            }

            //check that it's there
            using (var context = DatabaseTests.GetContext())
            {
                var controller = new VenueController(context);
                var retrievedVenue = await controller.Get(id);

                Assert.Equal(expectedUniverseCount, retrievedVenue.Universes.Count);
                var newUniverse = retrievedVenue.Universes.Single(x => x.Name == "New Universe");
                var changedUniverse = retrievedVenue.Universes.Single(x => x.Name == "Changed Universe");
                Assert.Contains(newUniverse.Fixtures, x => x.FixtureDefinition.Id == secondDefinition.Id);
                Assert.Contains(changedUniverse.Fixtures, x => x.FixtureDefinition.Id == firstDefinition.Id);
            }
        }

        [Fact]
        public async Task TestPostGetPut_ChangedFixtures()
        {
            FixtureDefinition firstDefinition, secondDefinition;
            Group group;
            int id, expectedFixtureCount, expectedUniverseCount;
            //setup the database
            using (var context = DatabaseTests.GetContext())
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
                await DatabaseTests.AddVenues(context);
                await context.SaveChangesAsync();

                firstDefinition = await context.FixtureDefinitions.FirstAsync();
                secondDefinition = await context.FixtureDefinitions.Skip(1).FirstAsync();
                group = await context.Groups.FirstAsync();
                id = (await context.Venues.FirstAsync()).Id;
            }
            
            //get what was posted, modify it and post it back
            using (var context = DatabaseTests.GetContext())
            {
                Venue retrievedVenue = await new VenueController(context).Get(id);
                retrievedVenue.Universes.First().Fixtures.Remove(retrievedVenue.Universes.First().Fixtures.First());
                retrievedVenue.Universes.First().Fixtures.First().StartChannel = 25;
                retrievedVenue.Universes.First().Fixtures.Add(FixtureTests.GetFixture(secondDefinition, 50, group));
                expectedFixtureCount = retrievedVenue.Universes.First().Fixtures.Count;
                expectedUniverseCount = retrievedVenue.Universes.Count;
                await new VenueController(context).Put(id, retrievedVenue);
            }

            //check that it's there
            using (var context = DatabaseTests.GetContext())
            {
                var retrievedVenue = await context.LoadVenue(id);

                Assert.Equal(expectedUniverseCount, retrievedVenue.Universes.Count);
                Assert.Equal(expectedFixtureCount, retrievedVenue.Universes.First().Fixtures.Count);
                Assert.Contains(retrievedVenue.Universes.First().Fixtures, x => x.StartChannel == 25);
                Assert.Contains(retrievedVenue.Universes.First().Fixtures, x => x.StartChannel == 50);
            }
        }

        public static Venue GetSingleFixtureVenue(FixtureDefinition definition, Group group, string venueName = "Test Venue", string universeName = "Test Universe")
        {
            Venue venue = new Venue()
            {
                Name = venueName,
                Universes = new List<Universe>()
                {
                    UniverseTests.GetSingleFixtureUniverse(definition, group, universeName)
                }
            };
            return venue;
        }

        public static async Task<IEnumerable<Venue>> GetVenues()
        {
            var venues = await DatabaseTests.GetDeserializedJSONFiles<Venue>("venues");
            return venues;
        }
    }
}
