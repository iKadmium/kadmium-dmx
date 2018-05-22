using Microsoft.EntityFrameworkCore;
using kadmium_dmx_core.Fixtures;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using kadmium_dmx_core.Looks;

namespace kadmium_dmx_core
{
    public class DatabaseContext : DbContext
    {
        private static string ProductionConnectionString => "Filename=" + FileAccess.ProductionDatabasePath;
        private static string DebugConnectionString => "Filename=" + FileAccess.DebugDatabasePath;
        private static string TestingConnectionString => "Filename=" + FileAccess.TestingDatabasePath;

        public static Action<DbContextOptionsBuilder<DatabaseContext>> SetConnection { get; set; }

        public virtual DbSet<FixtureDefinition> FixtureDefinitions { get; set; }
        public virtual DbSet<Venue> Venues { get; set; }
        public virtual DbSet<Universe> Universes { get; set; }
        public virtual DbSet<Fixture> FixtureInstances { get; set; }
        public virtual DbSet<Group> Groups { get; set; }
        public virtual DbSet<Look> Looks { get; set; }
        public virtual DbSet<ColorLookSetting> ColorLookSettings { get; set; }
        public virtual DbSet<AttributeLookSetting> AttributeLookSettings { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        { }

        public static DatabaseContext GetContext()
        {
            var builder = new DbContextOptionsBuilder<DatabaseContext>();
            SetConnection(builder);
            var context = new DatabaseContext(builder.Options);
            return context;
        }

        public static void SetConnectionEnvironment(string environmentName)
        {
            switch (environmentName)
            {
                case "Development":
                    SetConnection = (builder) => builder.UseSqlite(DebugConnectionString);
                    break;
                case "Production":
                    SetConnection = (builder) => builder.UseSqlite(ProductionConnectionString);
                    break;
            }
        }

        public static void SetTestingConnectionString(string testName)
        {
            SetConnection = (builder) => builder.UseInMemoryDatabase(testName);
        }

        private void DeleteData()
        {
            var tables = new[] { "ColorWheelEntry", "DMXChannel", "Fixture", "MovementAxis", "Universe",
                "VenuePresets", "Venues", "FixtureDefinitions", "Groups" };
            foreach (string table in tables)
            {
                Database.ExecuteSqlCommand("delete from " + table);
            }
        }

        public void UpdateCollection<TObject, TKey>(ICollection<TObject> original, IEnumerable<TObject> modified, Func<TObject, TKey> getKey)
            where TObject : class
        {
            foreach (var item in modified)
            {
                var key = getKey(item);
                TObject originalItem = original.SingleOrDefault(x => getKey(x).Equals(key));
                if (originalItem == null)
                {
                    original.Add(item);
                }
                else
                {
                    Entry(originalItem).CurrentValues.SetValues(item);
                }
            }

            var toDelete = from originalItem in original
                           where !modified.Any(x => getKey(x).Equals(getKey(originalItem)))
                           select originalItem;

            foreach (TObject item in toDelete)
            {
                original.Remove(item);
            }
        }

        public async Task UpdateCollection<TObject, TKey>(DbSet<TObject> original, IEnumerable<TObject> modified, Func<TObject, TKey> getKey)
            where TObject : class
        {
            foreach (var item in modified)
            {
                var key = getKey(item);
                TObject originalItem = await original.SingleOrDefaultAsync(x => getKey(x).Equals(key));
                if (originalItem == null)
                {
                    original.Add(item);
                }
                else
                {
                    Entry(originalItem).CurrentValues.SetValues(item);
                }
            }

            var toDelete = from originalItem in original
                           where !modified.Any(x => getKey(x).Equals(getKey(originalItem)))
                           select originalItem;

            foreach (TObject item in toDelete)
            {
                original.Remove(item);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FixtureDefinition>()
                .HasMany(x => x.Channels)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FixtureDefinition>()
                .HasMany(x => x.ColorWheel)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FixtureDefinition>()
                .HasMany(x => x.Movements)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Fixture>()
                .HasOne(x => x.FixtureDefinition)
                .WithMany()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Fixture>()
                .HasOne(x => x.Group)
                .WithMany()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Venue>()
                .HasMany(x => x.Universes)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Universe>()
                .HasMany(x => x.Fixtures)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }

        public async Task<Venue> LoadVenue(int id)
        {
            var venue = await Venues.FindAsync(id);

            await Entry(venue).Collection(x => x.Universes).LoadAsync();
            foreach (var universe in venue.Universes)
            {
                await Entry(universe).Collection(x => x.Fixtures).LoadAsync();
                foreach (var fixture in universe.Fixtures)
                {
                    await Entry(fixture).Reference(x => x.Group).LoadAsync();
                    await Entry(fixture).Reference(x => x.FixtureDefinition).LoadAsync();
                    foreach (var collection in Entry(fixture.FixtureDefinition).Collections)
                    {
                        await collection.LoadAsync();
                    }
                    fixture.Skeleton = fixture.FixtureDefinition.GetSkeleton();
                    fixture.GroupString = fixture.Group.Name;
                }
            }

            return venue;
        }

        public async Task<Venue> LoadVenue(string name)
        {
            var venueRef = await Venues.SingleAsync(x => x.Name == name);
            var venue = await LoadVenue(venueRef.Id);

            return venue;
        }

        public async Task<Group> LoadGroup(string groupName)
        {
            var grp = await Groups.SingleAsync(x => x.Name == groupName);
            return grp;
        }

        public async Task<FixtureDefinition> LoadFixtureDefinition(string manufacturer, string model)
        {
            var definition = await FixtureDefinitions.SingleAsync(x => x.Manufacturer == manufacturer && x.Model == model);
            foreach (var collection in Entry(definition).Collections)
            {
                await collection.LoadAsync();
            }
            return definition;
        }

        public async Task<FixtureDefinition> LoadFixtureDefinition(int id)
        {
            var definition = await FixtureDefinitions.FindAsync(id);
            foreach (var collection in Entry(definition).Collections)
            {
                await collection.LoadAsync();
            }
            return definition;
        }

        public async Task<Look> LoadLook(int id)
        {
            var look = await Looks.FindAsync(id);
            foreach (var collection in Entry(look).Collections)
            {
                await collection.LoadAsync();
            }
            foreach (var lookSetting in look.AttributeLookSettings)
            {
                await Entry(lookSetting).Reference(x => x.Group).LoadAsync();
                lookSetting.GroupString = lookSetting.Group.Name;
            }
            foreach (var lookSetting in look.ColorLookSettings)
            {
                await Entry(lookSetting).Reference(x => x.Group).LoadAsync();
                lookSetting.GroupString = lookSetting.Group.Name;
            }
            return look;
        }
    }

    public class DatabaseLogger : ILoggerProvider
    {
        public ILogger CreateLogger(string categoryName)
        {
            return new MyLogger();
        }

        public void Dispose()
        { }

        private class MyLogger : ILogger
        {
            public bool IsEnabled(LogLevel logLevel)
            {
                return true;
            }

            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                Console.WriteLine(formatter(state, exception));
            }

            public IDisposable BeginScope<TState>(TState state)
            {
                return null;
            }
        }
    }

}