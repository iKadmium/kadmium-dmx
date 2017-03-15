using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmiumoscdmxdotnetcore.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20170315080339_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.ColorWheelEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ColorString");

                    b.Property<int?>("FixtureDefinitionId");

                    b.Property<int>("Max");

                    b.Property<int>("Min");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("FixtureDefinitionId");

                    b.ToTable("ColorWheelEntry");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.DMXChannel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Address");

                    b.Property<int>("FixtureDefinitionId");

                    b.Property<byte>("Max");

                    b.Property<byte>("Min");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("FixtureDefinitionId");

                    b.ToTable("DMXChannel");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.Fixture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("FixtureDefinitionId");

                    b.Property<int?>("GroupId");

                    b.Property<string>("OptionsString");

                    b.Property<int>("StartChannel");

                    b.Property<int?>("UniverseId");

                    b.Property<int?>("VenuePresetId");

                    b.HasKey("Id");

                    b.HasIndex("FixtureDefinitionId");

                    b.HasIndex("GroupId");

                    b.HasIndex("UniverseId");

                    b.HasIndex("VenuePresetId");

                    b.ToTable("Fixture");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float>("BeamAngle");

                    b.Property<float>("Lux");

                    b.Property<string>("Manufacturer");

                    b.Property<string>("Model");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("FixtureDefinitions");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.MovementAxis", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("FixtureDefinitionId");

                    b.Property<int>("Max");

                    b.Property<int>("Min");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("FixtureDefinitionId");

                    b.ToTable("MovementAxis");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("Order");

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Universe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("UniverseNumber");

                    b.Property<int?>("VenueId");

                    b.Property<string>("VenueName");

                    b.HasKey("Id");

                    b.HasIndex("VenueId");

                    b.ToTable("Universe");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Venue", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Venues");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.VenuePreset", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("VenuePresets");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.ColorWheelEntry", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition")
                        .WithMany("ColorWheel")
                        .HasForeignKey("FixtureDefinitionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.DMXChannel", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition")
                        .WithMany("Channels")
                        .HasForeignKey("FixtureDefinitionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.Fixture", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition", "FixtureDefinition")
                        .WithMany()
                        .HasForeignKey("FixtureDefinitionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("kadmium_osc_dmx_dotnet_core.Group", "Group")
                        .WithMany()
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("kadmium_osc_dmx_dotnet_core.Universe")
                        .WithMany("Fixtures")
                        .HasForeignKey("UniverseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("kadmium_osc_dmx_dotnet_core.VenuePreset")
                        .WithMany("FixtureEntries")
                        .HasForeignKey("VenuePresetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.MovementAxis", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition")
                        .WithMany("Movements")
                        .HasForeignKey("FixtureDefinitionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Universe", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Venue")
                        .WithMany("Universes")
                        .HasForeignKey("VenueId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
