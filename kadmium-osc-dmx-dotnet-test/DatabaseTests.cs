using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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

        public static async Task AddVenues(DatabaseContext context)
        {
            var venues = await VenueTests.GetVenues();
            foreach(Venue venue in venues)
            {
                await venue.Initialize(context);
                await context.Venues.AddAsync(venue);
            }
        }

        public static async Task<IEnumerable<string>> GetJSONFilePaths(string sourcePath)
        {
            string dataPath = Path.Combine(AppContext.BaseDirectory, "data", sourcePath);
            IEnumerable<string> result = await Task.Factory.StartNew(() =>
            {
                List<string> paths = new List<string>();
                foreach (string file in Directory.GetFiles(dataPath, "*.json", SearchOption.AllDirectories).Where(x => !x.Contains("schema")))
                {
                    paths.Add(file);
                }
                return paths;
            });

            return result;
        }

        public static async Task<IEnumerable<T>> GetDeserializedJSONFiles<T>(string sourcePath)
        {
            List<T> objects = new List<T>();
            foreach (var path in await GetJSONFilePaths(sourcePath))
            {
                T deserialized = await Task.Factory.StartNew(() =>
                {
                    string contents = File.ReadAllText(path);
                    T def = JsonConvert.DeserializeObject<T>(contents);
                    return def;
                });
                objects.Add(deserialized);
            }
            return objects;
        }
        
    }
}
