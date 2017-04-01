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
                name: "Looks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Looks", x => x.Id);
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
                    FixtureDefinitionId = table.Column<int>(nullable: true),
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
                    FixtureDefinitionId = table.Column<int>(nullable: true),
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
                name: "AttributeLookSettings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AttributeName = table.Column<string>(nullable: true),
                    AttributeValue = table.Column<float>(nullable: false),
                    GroupId = table.Column<int>(nullable: true),
                    LookId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AttributeLookSettings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AttributeLookSettings_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AttributeLookSettings_Looks_LookId",
                        column: x => x.LookId,
                        principalTable: "Looks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ColorLookSettings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Color = table.Column<string>(nullable: true),
                    GroupId = table.Column<int>(nullable: true),
                    LookId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorLookSettings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ColorLookSettings_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ColorLookSettings_Looks_LookId",
                        column: x => x.LookId,
                        principalTable: "Looks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Universes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    UniverseNumber = table.Column<int>(nullable: false),
                    VenueId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Universes_Venues_VenueId",
                        column: x => x.VenueId,
                        principalTable: "Venues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FixtureInstances",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FixtureDefinitionId = table.Column<int>(nullable: true),
                    GroupId = table.Column<int>(nullable: true),
                    OptionsString = table.Column<string>(nullable: true),
                    StartChannel = table.Column<int>(nullable: false),
                    UniverseId = table.Column<int>(nullable: true),
                    VenuePresetId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FixtureInstances", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FixtureInstances_FixtureDefinitions_FixtureDefinitionId",
                        column: x => x.FixtureDefinitionId,
                        principalTable: "FixtureDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FixtureInstances_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FixtureInstances_Universes_UniverseId",
                        column: x => x.UniverseId,
                        principalTable: "Universes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FixtureInstances_VenuePresets_VenuePresetId",
                        column: x => x.VenuePresetId,
                        principalTable: "VenuePresets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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
                name: "IX_FixtureInstances_FixtureDefinitionId",
                table: "FixtureInstances",
                column: "FixtureDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_FixtureInstances_GroupId",
                table: "FixtureInstances",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_FixtureInstances_UniverseId",
                table: "FixtureInstances",
                column: "UniverseId");

            migrationBuilder.CreateIndex(
                name: "IX_FixtureInstances_VenuePresetId",
                table: "FixtureInstances",
                column: "VenuePresetId");

            migrationBuilder.CreateIndex(
                name: "IX_MovementAxis_FixtureDefinitionId",
                table: "MovementAxis",
                column: "FixtureDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_AttributeLookSettings_GroupId",
                table: "AttributeLookSettings",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_AttributeLookSettings_LookId",
                table: "AttributeLookSettings",
                column: "LookId");

            migrationBuilder.CreateIndex(
                name: "IX_ColorLookSettings_GroupId",
                table: "ColorLookSettings",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_ColorLookSettings_LookId",
                table: "ColorLookSettings",
                column: "LookId");

            migrationBuilder.CreateIndex(
                name: "IX_Universes_VenueId",
                table: "Universes",
                column: "VenueId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ColorWheelEntry");

            migrationBuilder.DropTable(
                name: "DMXChannel");

            migrationBuilder.DropTable(
                name: "FixtureInstances");

            migrationBuilder.DropTable(
                name: "MovementAxis");

            migrationBuilder.DropTable(
                name: "AttributeLookSettings");

            migrationBuilder.DropTable(
                name: "ColorLookSettings");

            migrationBuilder.DropTable(
                name: "Universes");

            migrationBuilder.DropTable(
                name: "VenuePresets");

            migrationBuilder.DropTable(
                name: "FixtureDefinitions");

            migrationBuilder.DropTable(
                name: "Groups");

            migrationBuilder.DropTable(
                name: "Looks");

            migrationBuilder.DropTable(
                name: "Venues");
        }
    }
}
