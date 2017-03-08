using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmiumoscdmxdotnetcore.Migrations
{
    [DbContext(typeof(Data))]
    [Migration("20170308152116_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.ColorWheelEntry", b =>
                {
                    b.Property<string>("FixtureDefinitionManufacturer");

                    b.Property<string>("FixtureDefinitionModel");

                    b.Property<string>("Name");

                    b.Property<string>("ColorString");

                    b.Property<int>("Max");

                    b.Property<int>("Min");

                    b.HasKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel", "Name");

                    b.ToTable("ColorWheelEntry");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.DMXChannel", b =>
                {
                    b.Property<string>("FixtureDefinitionManufacturer");

                    b.Property<string>("FixtureDefinitionModel");

                    b.Property<string>("Name");

                    b.Property<byte>("Max");

                    b.Property<byte>("Min");

                    b.Property<int>("RelativeAddress");

                    b.HasKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel", "Name");

                    b.ToTable("DMXChannel");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.Fixture", b =>
                {
                    b.Property<int?>("UniverseNumber");

                    b.Property<string>("UniverseVenueName");

                    b.Property<int>("StartChannel");

                    b.Property<string>("DefinitionManufacturer");

                    b.Property<string>("DefinitionModel");

                    b.HasKey("UniverseNumber", "UniverseVenueName", "StartChannel");

                    b.HasIndex("DefinitionManufacturer", "DefinitionModel");

                    b.HasIndex("UniverseVenueName", "UniverseNumber");

                    b.ToTable("Fixture");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition", b =>
                {
                    b.Property<string>("Manufacturer");

                    b.Property<string>("Model");

                    b.Property<float>("BeamAngle");

                    b.Property<float>("Lux");

                    b.Property<int>("Type");

                    b.HasKey("Manufacturer", "Model");

                    b.ToTable("FixtureDefinitions");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.MovementAxis", b =>
                {
                    b.Property<string>("FixtureDefinitionManufacturer");

                    b.Property<string>("FixtureDefinitionModel");

                    b.Property<string>("Name");

                    b.Property<int>("Max");

                    b.Property<int>("Min");

                    b.HasKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel", "Name");

                    b.ToTable("MovementAxis");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Universe", b =>
                {
                    b.Property<string>("VenueName");

                    b.Property<int>("UniverseNumber");

                    b.Property<string>("Name");

                    b.HasKey("VenueName", "UniverseNumber");

                    b.ToTable("Universe");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Venue", b =>
                {
                    b.Property<string>("Name")
                        .ValueGeneratedOnAdd();

                    b.HasKey("Name");

                    b.ToTable("Venues");
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.ColorWheelEntry", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition")
                        .WithMany("ColorWheel")
                        .HasForeignKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.DMXChannel", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition")
                        .WithMany("Channels")
                        .HasForeignKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.Fixture", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition", "Definition")
                        .WithMany()
                        .HasForeignKey("DefinitionManufacturer", "DefinitionModel");

                    b.HasOne("kadmium_osc_dmx_dotnet_core.Universe")
                        .WithMany("Fixtures")
                        .HasForeignKey("UniverseVenueName", "UniverseNumber")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Fixtures.MovementAxis", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Fixtures.FixtureDefinition")
                        .WithMany("Axis")
                        .HasForeignKey("FixtureDefinitionManufacturer", "FixtureDefinitionModel")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("kadmium_osc_dmx_dotnet_core.Universe", b =>
                {
                    b.HasOne("kadmium_osc_dmx_dotnet_core.Venue")
                        .WithMany("Universes")
                        .HasForeignKey("VenueName")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
