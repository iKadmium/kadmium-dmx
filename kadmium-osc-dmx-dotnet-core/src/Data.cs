using Microsoft.EntityFrameworkCore;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core
{
    public class Data : DbContext
    {
        public DbSet<FixtureDefinition> FixtureDefinitions { get; set; }
        public DbSet<Venue> Venues { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./DMX.db");
        }

        public async Task<int> FilchData()
        {
            await FilchFixtureDefinitions();
            await FilchVenues();
            var count = SaveChanges();
            return count;
        }

        private async Task FilchFixtureDefinitions()
        {
            Database.ExecuteSqlCommand("delete from FixtureDefinitions");
            foreach (var fixtureKey in FileAccess.GetAllFixtures())
            {
                var definitionJson = await FileAccess.LoadFixtureDefinition(fixtureKey.Item1, fixtureKey.Item2);
                var definition = FixtureDefinition.Load(definitionJson);
                FixtureDefinitions.Add(definition);
            }
        }

        private async Task FilchVenues()
        {
            Database.ExecuteSqlCommand("delete from Venues");
            foreach (var venueName in FileAccess.GetVenueNames())
            {
                var venueJson = await FileAccess.LoadVenue(venueName);
                var venue = await Venue.Load(venueJson);
                Venues.Add(venue);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FixtureDefinition>()
                .HasMany(x => x.Channels)
                .WithOne();

            modelBuilder.Entity<FixtureDefinition>()
                .HasMany(x => x.ColorWheel)
                .WithOne();

            modelBuilder.Entity<FixtureDefinition>()
                .HasMany(x => x.Axis)
                .WithOne();

            modelBuilder.Entity<Venue>()
                .HasMany(x => x.Universes)
                .WithOne();

            modelBuilder.Entity<Universe>()
                .HasMany(x => x.Fixtures)
                .WithOne();

            modelBuilder.Entity<FixtureDefinition>()
                .HasKey(x => new { x.Manufacturer, x.Model });

            modelBuilder.Entity<DMXChannel>()
                .HasKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel", "Name");

            modelBuilder.Entity<MovementAxis>()
                .HasKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel", "Name");

            modelBuilder.Entity<ColorWheelEntry>()
                .HasKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel", "Name");

            modelBuilder.Entity<Venue>()
                .HasKey(x => x.Name);
            
            modelBuilder.Entity<Universe>()
                .HasKey(x => new { x.VenueName, x.UniverseNumber });

            modelBuilder.Entity<Fixture>()
                .HasKey("UniverseNumber", "UniverseVenueName", "StartChannel");
        }
    }
}