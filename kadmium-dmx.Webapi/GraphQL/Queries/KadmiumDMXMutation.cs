using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_webapi.GraphQL.Types.Venues;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Queries
{
    public class KadmiumDMXMutation : ObjectGraphType
    {
        public KadmiumDMXMutation(IVenueStore venueStore, IGroupStore groupStore, IFixtureDefinitionStore fixtureDefinitionStore, IMasterController masterController, IListener listener)
        {
            Name = "KadmiumDMXMutation";

            FieldAsync<NonNullGraphType<VenueType>>(
                "loadVenue",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "name" }
                ),
                resolve: async context =>
                {
                    var name = context.GetArgument<string>("name");
                    return await LoadVenue(name, venueStore, groupStore, fixtureDefinitionStore, masterController);
                }
            );

            Field<NonNullGraphType<BooleanGraphType>>(
                "setListenerEnabled",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<BooleanGraphType>> { Name = "enabled" }
                ),
                resolve: context =>
                {
                    var enabled = context.GetArgument<bool>("enabled");
                    listener.Enabled = enabled;
                    return listener.Enabled;
                }
            );

            Field<NonNullGraphType<FloatGraphType>>(
                "setFixtureAttribute",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "fixture" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "attribute" },
                    new QueryArgument<NonNullGraphType<FloatGraphType>> { Name = "value" }
                ),
                resolve: context =>
                {
                    var universeId = context.GetArgument<ushort>("universeId");
                    var fixture = context.GetArgument<ushort>("fixture");
                    var attributeName = context.GetArgument<string>("attribute");
                    var value = context.GetArgument<float>("value");
                    var attribute = masterController
                        .Venue
                        .Universes
                        .Single(x => x.UniverseID == universeId)
                        .Fixtures
                        .Single(x => x.Address == fixture)
                        .Settables
                        .Single(x => x.Key == attributeName)
                        .Value;
                    attribute.Value = value;
                    return attribute.Value;
                }
            );

            FieldAsync<NonNullGraphType<ActiveUniverseType>>(
                "deleteFixture",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "fixture" }
                ),
                resolve: async context =>
                {
                    var universeId = context.GetArgument<ushort>("universeId");
                    var fixtureAddress = context.GetArgument<ushort>("fixture");

                    var sourceUniverse = masterController
                        .Venue
                        .SourceData
                        .Universes
                        .Single(x => x.UniverseID == universeId);
                    var sourceFixture = sourceUniverse
                        .Fixtures
                        .Single(x => x.Address == fixtureAddress);
                    sourceUniverse.Fixtures.Remove(sourceFixture);

                    await venueStore.Update(masterController.Venue.Name, masterController.Venue.SourceData);
                    await LoadVenue(masterController.Venue.Name, venueStore, groupStore, fixtureDefinitionStore, masterController);

                    var universe = masterController.Venue.Universes.Single(x => x.UniverseID == universeId);
                    return universe;
                }
            );

            FieldAsync<NonNullGraphType<ActiveUniverseType>>(
                "addFixture",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "address" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "quantity" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "group" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "manufacturer" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "model" }
                ),
                resolve: async context =>
                {
                    var universeId = context.GetArgument<ushort>("universeId");
                    var address = context.GetArgument<ushort>("address");
                    var quantity = context.GetArgument<ushort>("quantity");
                    var group = context.GetArgument<string>("group");
                    var manufacturer = context.GetArgument<string>("manufacturer");
                    var model = context.GetArgument<string>("model");

                    var skeleton = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
                    var sourceUniverse = masterController
                        .Venue
                        .SourceData
                        .Universes
                        .Single(x => x.UniverseID == universeId);

                    var definition = await fixtureDefinitionStore.Get(skeleton);
                    var increment = definition.Channels.Last().Address;

                    var currentAddress = address;
                    for (int i = 0; i < quantity; i++)
                    {
                        var fixtureData = new FixtureData
                        {
                            Address = currentAddress,
                            Group = group,
                            Type = skeleton,
                            Options = new FixtureOptions()
                        };
                        sourceUniverse.Fixtures.Add(fixtureData);
                        currentAddress += increment;
                    }

                    await venueStore.Update(masterController.Venue.Name, masterController.Venue.SourceData);
                    await LoadVenue(masterController.Venue.Name, venueStore, groupStore, fixtureDefinitionStore, masterController);

                    var universe = masterController.Venue.Universes.Single(x => x.UniverseID == universeId);
                    return universe;
                }
            );

            FieldAsync<NonNullGraphType<ActiveUniverseType>>(
                "editFixture",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "oldAddress" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "newAddress" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "group" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "manufacturer" },
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "model" }
                ),
                resolve: async context =>
                {
                    var universeId = context.GetArgument<ushort>("universeId");
                    var oldAddress = context.GetArgument<ushort>("oldAddress");
                    var newAddress = context.GetArgument<ushort>("newAddress");
                    var group = context.GetArgument<string>("group");
                    var manufacturer = context.GetArgument<string>("manufacturer");
                    var model = context.GetArgument<string>("model");

                    var skeleton = new FixtureDefinitionSkeleton { Manufacturer = manufacturer, Model = model };
                    var sourceUniverse = masterController
                        .Venue
                        .SourceData
                        .Universes
                        .Single(x => x.UniverseID == universeId);

                    var originalFixture = sourceUniverse
                        .Fixtures
                        .Single(x => x.Address == oldAddress);

                    sourceUniverse.Fixtures.Remove(originalFixture);
                    var options = originalFixture.Type == skeleton ? originalFixture.Options : new FixtureOptions();

                    var fixtureData = new FixtureData
                    {
                        Address = newAddress,
                        Group = group,
                        Type = skeleton,
                        Options = options
                    };
                    sourceUniverse.Fixtures.Add(fixtureData);
                    sourceUniverse.Fixtures = sourceUniverse.Fixtures.OrderBy(x => x.Address).ToList();
 
                    await venueStore.Update(masterController.Venue.Name, masterController.Venue.SourceData);
                    await LoadVenue(masterController.Venue.Name, venueStore, groupStore, fixtureDefinitionStore, masterController);

                    var universe = masterController.Venue.Universes.Single(x => x.UniverseID == universeId);
                    return universe;
                }
            );

            FieldAsync<NonNullGraphType<ActiveUniverseType>>(
                "addUniverse",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "name"},
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" }
                ),
                resolve: async context =>
                {
                    var universeId = context.GetArgument<ushort>("universeId");
                    var name = context.GetArgument<string>("name");

                    var universeData = new UniverseData
                    {
                        Name = name,
                        UniverseID = universeId,
                        Fixtures = new List<FixtureData>()
                    };

                    var venue = masterController.Venue.SourceData;
                    venue.Universes.Add(universeData);

                    await venueStore.Update(venue.Name, venue);
                    await LoadVenue(masterController.Venue.Name, venueStore, groupStore, fixtureDefinitionStore, masterController);

                    var universe = masterController.Venue.Universes.Single(x => x.UniverseID == universeId);
                    return universe;
                }
            );

            FieldAsync<NonNullGraphType<IntGraphType>>(
                "deleteUniverse",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" }
                ),
                resolve: async context =>
                {
                    var universeId = context.GetArgument<ushort>("universeId");
                    
                    var venue = masterController.Venue.SourceData;
                    var universe = venue.Universes.Single(x => x.UniverseID == universeId);
                    venue.Universes.Remove(universe);

                    await venueStore.Update(venue.Name, venue);
                    await LoadVenue(masterController.Venue.Name, venueStore, groupStore, fixtureDefinitionStore, masterController);

                    var universeCount = masterController.Venue.Universes.Count;
                    return universeCount;
                }
            );
        }

        private async Task<IVenueData> LoadVenue(string name, IVenueStore venueStore, IGroupStore groupStore, IFixtureDefinitionStore fixtureDefinitionStore, IMasterController masterController)
        {
            var venue = await venueStore.Get(name);
            var groupsTask = groupStore.GetAll();
            var definitionsNeeded = from universe in venue.Universes
                                    from fixture in universe.Fixtures
                                    select fixture.Type;
            var definitionTasks = from skeleton in definitionsNeeded.Distinct()
                                  select fixtureDefinitionStore.Get(skeleton);
            var definitions = await Task.WhenAll(definitionTasks);
            var definitionsDictionary = definitions.ToDictionary(definition => definition.Skeleton, definition => definition as IFixtureDefinition);
            await masterController.LoadVenue(venue, definitionsDictionary, await groupsTask);
            return venue;
        }
    }
}
