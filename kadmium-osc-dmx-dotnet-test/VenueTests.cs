using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_test.Solvers;
using kadmium_osc_dmx_dotnet_webui;
using kadmium_osc_dmx_dotnet_webui.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_osc_dmx_dotnet_test
{
    public class VenueTests
    {
        [Fact]
        public async Task TestLoading()
        {
            FixtureDefinition definition = FixtureDefinitionTests.GetRGBFixtureDefinition();
            Group group = GroupTests.GetGroup();
            Venue venue = GetSingleFixtureVenue(definition, group);

            var builder = DatabaseTests.GetBuilder();
            using (var context = new DatabaseContext(builder.Options))
            {
                context.FixtureDefinitions.Add(definition);
                context.Groups.Add(group);
                context.SaveChanges();

                var controller = new VenueController(context);
                await controller.Post(venue);

                Assert.Contains(venue, context.Venues);
            }    
        }

        public static Venue GetSingleFixtureVenue(FixtureDefinition definition, Group group)
        {
            Venue venue = new Venue()
            {
                Name = "Test Venue",
                Universes = new List<Universe>()
                {
                    new Universe("Test Universe", 1, new List<Fixture>()
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
