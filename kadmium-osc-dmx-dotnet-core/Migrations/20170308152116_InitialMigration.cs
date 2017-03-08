using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace kadmiumoscdmxdotnetcore.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FixtureDefinitions",
                columns: table => new
                {
                    Manufacturer = table.Column<string>(nullable: false),
                    Model = table.Column<string>(nullable: false),
                    BeamAngle = table.Column<float>(nullable: false),
                    Lux = table.Column<float>(nullable: false),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FixtureDefinitions", x => new { x.Manufacturer, x.Model });
                });

            migrationBuilder.CreateTable(
                name: "Venues",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venues", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "ColorWheelEntry",
                columns: table => new
                {
                    FixtureDefinitionManufacturer = table.Column<string>(nullable: false),
                    FixtureDefinitionModel = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    ColorString = table.Column<string>(nullable: true),
                    Max = table.Column<int>(nullable: false),
                    Min = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorWheelEntry", x => new { x.FixtureDefinitionManufacturer, x.FixtureDefinitionModel, x.Name });
                    table.ForeignKey(
                        name: "FK_ColorWheelEntry_FixtureDefinitions_FixtureDefinitionManufacturer_FixtureDefinitionModel",
                        columns: x => new { x.FixtureDefinitionManufacturer, x.FixtureDefinitionModel },
                        principalTable: "FixtureDefinitions",
                        principalColumns: new[] { "Manufacturer", "Model" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DMXChannel",
                columns: table => new
                {
                    FixtureDefinitionManufacturer = table.Column<string>(nullable: false),
                    FixtureDefinitionModel = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Max = table.Column<byte>(nullable: false),
                    Min = table.Column<byte>(nullable: false),
                    RelativeAddress = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DMXChannel", x => new { x.FixtureDefinitionManufacturer, x.FixtureDefinitionModel, x.Name });
                    table.ForeignKey(
                        name: "FK_DMXChannel_FixtureDefinitions_FixtureDefinitionManufacturer_FixtureDefinitionModel",
                        columns: x => new { x.FixtureDefinitionManufacturer, x.FixtureDefinitionModel },
                        principalTable: "FixtureDefinitions",
                        principalColumns: new[] { "Manufacturer", "Model" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MovementAxis",
                columns: table => new
                {
                    FixtureDefinitionManufacturer = table.Column<string>(nullable: false),
                    FixtureDefinitionModel = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Max = table.Column<int>(nullable: false),
                    Min = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovementAxis", x => new { x.FixtureDefinitionManufacturer, x.FixtureDefinitionModel, x.Name });
                    table.ForeignKey(
                        name: "FK_MovementAxis_FixtureDefinitions_FixtureDefinitionManufacturer_FixtureDefinitionModel",
                        columns: x => new { x.FixtureDefinitionManufacturer, x.FixtureDefinitionModel },
                        principalTable: "FixtureDefinitions",
                        principalColumns: new[] { "Manufacturer", "Model" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Universe",
                columns: table => new
                {
                    VenueName = table.Column<string>(nullable: false),
                    UniverseNumber = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universe", x => new { x.VenueName, x.UniverseNumber });
                    table.ForeignKey(
                        name: "FK_Universe_Venues_VenueName",
                        column: x => x.VenueName,
                        principalTable: "Venues",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Fixture",
                columns: table => new
                {
                    UniverseNumber = table.Column<int>(nullable: false),
                    UniverseVenueName = table.Column<string>(nullable: false),
                    StartChannel = table.Column<int>(nullable: false),
                    DefinitionManufacturer = table.Column<string>(nullable: true),
                    DefinitionModel = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fixture", x => new { x.UniverseNumber, x.UniverseVenueName, x.StartChannel });
                    table.ForeignKey(
                        name: "FK_Fixture_FixtureDefinitions_DefinitionManufacturer_DefinitionModel",
                        columns: x => new { x.DefinitionManufacturer, x.DefinitionModel },
                        principalTable: "FixtureDefinitions",
                        principalColumns: new[] { "Manufacturer", "Model" },
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Fixture_Universe_UniverseVenueName_UniverseNumber",
                        columns: x => new { x.UniverseVenueName, x.UniverseNumber },
                        principalTable: "Universe",
                        principalColumns: new[] { "VenueName", "UniverseNumber" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fixture_DefinitionManufacturer_DefinitionModel",
                table: "Fixture",
                columns: new[] { "DefinitionManufacturer", "DefinitionModel" });

            migrationBuilder.CreateIndex(
                name: "IX_Fixture_UniverseVenueName_UniverseNumber",
                table: "Fixture",
                columns: new[] { "UniverseVenueName", "UniverseNumber" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ColorWheelEntry");

            migrationBuilder.DropTable(
                name: "DMXChannel");

            migrationBuilder.DropTable(
                name: "Fixture");

            migrationBuilder.DropTable(
                name: "MovementAxis");

            migrationBuilder.DropTable(
                name: "Universe");

            migrationBuilder.DropTable(
                name: "FixtureDefinitions");

            migrationBuilder.DropTable(
                name: "Venues");
        }
    }
}
