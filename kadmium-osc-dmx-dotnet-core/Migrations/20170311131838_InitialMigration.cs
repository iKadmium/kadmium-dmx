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
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BeamAngle = table.Column<float>(nullable: false),
                    Lux = table.Column<float>(nullable: false),
                    Manufacturer = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FixtureDefinitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Venues",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venues", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VenuePresets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VenuePresets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ColorWheelEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ColorString = table.Column<string>(nullable: true),
                    FixtureDefinitionId = table.Column<int>(nullable: false),
                    Max = table.Column<int>(nullable: false),
                    Min = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorWheelEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ColorWheelEntry_FixtureDefinitions_FixtureDefinitionId",
                        column: x => x.FixtureDefinitionId,
                        principalTable: "FixtureDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DMXChannel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Address = table.Column<int>(nullable: false),
                    FixtureDefinitionId = table.Column<int>(nullable: false),
                    Max = table.Column<byte>(nullable: false),
                    Min = table.Column<byte>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DMXChannel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DMXChannel_FixtureDefinitions_FixtureDefinitionId",
                        column: x => x.FixtureDefinitionId,
                        principalTable: "FixtureDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MovementAxis",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FixtureDefinitionId = table.Column<int>(nullable: false),
                    Max = table.Column<int>(nullable: false),
                    Min = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovementAxis", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MovementAxis_FixtureDefinitions_FixtureDefinitionId",
                        column: x => x.FixtureDefinitionId,
                        principalTable: "FixtureDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Universe",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    UniverseNumber = table.Column<int>(nullable: false),
                    VenueId = table.Column<int>(nullable: true),
                    VenueName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universe", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Universe_Venues_VenueId",
                        column: x => x.VenueId,
                        principalTable: "Venues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "VenuePresetFixtureEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FixtureDefinitionId = table.Column<int>(nullable: true),
                    GroupId = table.Column<int>(nullable: true),
                    OptionsString = table.Column<string>(nullable: true),
                    StartChannel = table.Column<int>(nullable: false),
                    VenuePresetId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VenuePresetFixtureEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VenuePresetFixtureEntry_FixtureDefinitions_FixtureDefinitionId",
                        column: x => x.FixtureDefinitionId,
                        principalTable: "FixtureDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VenuePresetFixtureEntry_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VenuePresetFixtureEntry_VenuePresets_VenuePresetId",
                        column: x => x.VenuePresetId,
                        principalTable: "VenuePresets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fixture",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DefinitionId = table.Column<int>(nullable: true),
                    GroupId = table.Column<int>(nullable: true),
                    OptionsString = table.Column<string>(nullable: true),
                    StartChannel = table.Column<int>(nullable: false),
                    UniverseId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fixture", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fixture_FixtureDefinitions_DefinitionId",
                        column: x => x.DefinitionId,
                        principalTable: "FixtureDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Fixture_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Fixture_Universe_UniverseId",
                        column: x => x.UniverseId,
                        principalTable: "Universe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ColorWheelEntry_FixtureDefinitionId",
                table: "ColorWheelEntry",
                column: "FixtureDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_DMXChannel_FixtureDefinitionId",
                table: "DMXChannel",
                column: "FixtureDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_Fixture_DefinitionId",
                table: "Fixture",
                column: "DefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_Fixture_GroupId",
                table: "Fixture",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Fixture_UniverseId",
                table: "Fixture",
                column: "UniverseId");

            migrationBuilder.CreateIndex(
                name: "IX_MovementAxis_FixtureDefinitionId",
                table: "MovementAxis",
                column: "FixtureDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_Universe_VenueId",
                table: "Universe",
                column: "VenueId");

            migrationBuilder.CreateIndex(
                name: "IX_VenuePresetFixtureEntry_FixtureDefinitionId",
                table: "VenuePresetFixtureEntry",
                column: "FixtureDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_VenuePresetFixtureEntry_GroupId",
                table: "VenuePresetFixtureEntry",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_VenuePresetFixtureEntry_VenuePresetId",
                table: "VenuePresetFixtureEntry",
                column: "VenuePresetId");
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
                name: "VenuePresetFixtureEntry");

            migrationBuilder.DropTable(
                name: "Universe");

            migrationBuilder.DropTable(
                name: "FixtureDefinitions");

            migrationBuilder.DropTable(
                name: "Groups");

            migrationBuilder.DropTable(
                name: "VenuePresets");

            migrationBuilder.DropTable(
                name: "Venues");
        }
    }
}
