using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_test
{
    class DatabaseTests
    {
        public static DbContextOptionsBuilder<DatabaseContext> GetBuilder()
        {
            var builder = new DbContextOptionsBuilder<DatabaseContext>();
            DatabaseContext.SetConnectionString("Testing", builder);
            return builder;
        }

        public static DatabaseContext GetContext()
        {
            var builder = GetBuilder();
            var context = new DatabaseContext(builder.Options);
            return context;
        }

        public static async Task ResetDatabase(DatabaseContext context)
        {
            await context.Database.EnsureDeletedAsync();
            await context.Database.EnsureCreatedAsync();
        }

        public static async Task AddFixtureDefinitions(DatabaseContext context)
        {
            var definitions = await FixtureDefinitionTests.GetDeserializedJSONFixtures();
            await context.FixtureDefinitions.AddRangeAsync(definitions);
        }

        public static async Task AddGroups(DatabaseContext context)
        {
            var groups = GroupTests.GetGroups();
            await context.Groups.AddRangeAsync(groups);
        }
    }
}
