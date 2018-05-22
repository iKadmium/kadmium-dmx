using kadmium_dmx_core;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_webapi.Controllers;
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
            string testName = GetType() + nameof(TestPost);
            using (var context = DatabaseTests.GetContext(testName))
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
            using (var context = DatabaseTests.GetContext(testName))
            {
                venue = GetSingleFixtureVenue(definition, group);
                var controller = new VenueController(context);
                id = await controller.Post(venue);

                Assert.NotEqual(0, id);
            }

            using (var context = DatabaseTests.GetContext(testName))
            {
                var retrievedVenue = await context.LoadVenue(id);
                Assert.Equal(venue.Name, retrievedVenue.Name);
            }
        }

        [InlineData("Rehearsal Room")]
        [InlineData("The New Globe")]
        [InlineData("The Brightside")]
        [InlineData("The Woolly Mammoth")]
        [Theory]
        public async Task TestGet(string venueName)
        {
            Venue deserializedVenue = await GetDeserializedJSONVenue(venueName);
            int id;
            string testName = GetType() + nameof(TestGet);
            using (var context = DatabaseTests.GetContext(testName))
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
                await DatabaseTests.AddVenues(context);
                await context.SaveChangesAsync();

                await deserializedVenue.Initialize(context);
                id = (await context.Venues.SingleAsync(x => x.Name == venueName)).Id;
            }

            using (var context = DatabaseTests.GetContext(testName))
            {
                VenueController controller = new VenueController(context);
                Venue venue = await controller.Get(id);
                Assert.Equal(deserializedVenue, venue);
            }
        }

        [InlineData("ChangedVenueName", "ChangedUniverseName")]
        [Theory]
        public async Task TestPut_ChangedNames(string changedVenueName, string changedUniverseName)
        {
            int id;
            //setup the database
            string testName = GetType() + nameof(TestPut_ChangedNames);
            using (var context = DatabaseTests.GetContext(testName))
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
            using (var context = DatabaseTests.GetContext(testName))
            {
                Venue venue = await context.LoadVenue(id);
                Assert.NotEqual(changedVenueName, venue.Name);
                Assert.NotEqual(changedUniverseName, venue.Universes.First().Name);
                venue.Name = changedVenueName;
                venue.Universes.First().Name = changedUniverseName;
                await new VenueController(context).Put(id, venue);
            }

            //check that it's there
            using (var context = DatabaseTests.GetContext(testName))
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
            string testName = GetType() + nameof(TestPostGetPut_ChangedUniverses);
            //setup the database
            using (var context = DatabaseTests.GetContext(testName))
            {
                await DatabaseTests.ResetDatabase(context);
                await DatabaseTests.AddFixtureDefinitions(context);
                await DatabaseTests.AddGroups(context);
                await context.SaveChangesAsync();
                await DatabaseTests.AddVenues(context);
                await context.SaveChangesAsync();

                id = (await context.Venues.FirstAsync()).Id;
                firstDefinition = await context.LoadFixtureDefinition((await context.FixtureDefinitions.FirstAsync()).Id);
                secondDefinition = await context.LoadFixtureDefinition((await context.FixtureDefinitions.Skip(1).FirstAsync()).Id);
                secondGroup = await context.Groups.Skip(1).FirstAsync();
            }

            //get what was posted, modify it and post it back
            using (var context = DatabaseTests.GetContext(testName))
            {
                Venue retrievedVenue = await context.LoadVenue(id);
                retrievedVenue.Universes.Add(UniverseTests.GetSingleFixtureUniverse(secondDefinition, secondGroup, "New Universe"));
                expectedUniverseCount = retrievedVenue.Universes.Count;
                await new VenueController(context).Put(id, retrievedVenue);
            }

            //check that it's there
            using (var context = DatabaseTests.GetContext(testName))
            {
                var controller = new VenueController(context);
                var retrievedVenue = await controller.Get(id);

                Assert.Equal(expectedUniverseCount, retrievedVenue.Universes.Count);
                var newUniverse = retrievedVenue.Universes.Single(x => x.Name == "New Universe");
                Assert.Contains(newUniverse.Fixtures, x => x.FixtureDefinition.Equals(secondDefinition));
            }
        }

        [Fact]
        public async Task TestPostGetPut_ChangedFixtures()
        {
            FixtureDefinition firstDefinition, secondDefinition;
            Group group;
            int id, expectedFixtureCount, expectedUniverseCount;
            string testName = GetType() + nameof(TestPostGetPut_ChangedFixtures);
            //setup the database
            using (var context = DatabaseTests.GetContext(testName))
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
            using (var context = DatabaseTests.GetContext(testName))
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
            using (var context = DatabaseTests.GetContext(testName))
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

        public static async Task<Venue> GetDeserializedJSONVenue(string name)
        {
            string path = Path.Combine(AppContext.BaseDirectory, "data", "venues", name + ".json");
            Venue venue = await Task.Factory.StartNew(() =>
            {
                string content = File.ReadAllText(path);
                Venue deserialized = JsonConvert.DeserializeObject<Venue>(content);
                return deserialized;
            });
            return venue;
        }

        public static async Task<IEnumerable<Venue>> GetDeserializedJSONVenues()
        {
            var venues = await DatabaseTests.GetDeserializedJSONFiles<Venue>("venues");
            return venues;
        }
    }
}
