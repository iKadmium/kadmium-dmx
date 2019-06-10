using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_webapi.GraphQL.Types;
using kadmium_dmx_webapi.GraphQL.Types.FixtureDefinitions;
using kadmium_dmx_webapi.GraphQL.Types.Venues;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Queries
{
    public class KadmiumDMXQuery : ObjectGraphType<object>
    {
        public KadmiumDMXQuery(IGroupStore groupStore, ISettingsStore settingsStore, IFixtureDefinitionStore fixtureDefinitionStore,
            IVenueStore venueStore, IListener listener, IMasterController masterController)
        {
            Name = "KadmiumDMXQuery";

            Field<BooleanGraphType>(
                name: "listenerEnabled",
                resolve: context => listener.Enabled
            );

            FieldAsync<ListGraphType<GroupType>>(
                name: "groups",
                resolve: async context => (await groupStore.GetAll())
                    .OrderBy(x => x.Order)
            );

            FieldAsync<SettingsType>(
                name: "settings",
                resolve: async context => await settingsStore.GetSettings()
            );

            FieldAsync<ListGraphType<FixtureDefinitionType>>(
                name: "fixtures",
                resolve: async context => (await fixtureDefinitionStore.GetAll())
                    .OrderBy(x => x.Skeleton.Manufacturer)
                    .ThenBy(x => x.Skeleton.Model)
            );

            FieldAsync<ListGraphType<VenueType>>(
                name: "venues",
                resolve: async context => (await venueStore.GetAll())
                    .OrderBy(x => x.Name)
            );

            FieldAsync<FixtureDefinitionType>(
                name: "fixture",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "manufacturer"},
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "model" }
                ),
                resolve: async context =>
                {
                    var skeleton = new FixtureDefinitionSkeleton 
                    {
                        Manufacturer = context.GetArgument<string>("manufacturer"),
                        Model = context.GetArgument<string>("model")
                    };
                    return await fixtureDefinitionStore.Get(skeleton);
                }
            );

            Field<ActiveVenueType>(
                name: "activeVenue",
                resolve: context => {
                    return masterController.Venue;
                }
            );

            Field<ActiveUniverseType>(
                name: "activeUniverse",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" }
                ),
                resolve: context => {
                    var universeId = context.GetArgument<int>("universeId");
                    return masterController.Venue.Universes.Single(x => x.UniverseID == universeId);
                }
            );

            Field<ActiveFixtureType>(
                name: "activeFixture",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "universeId" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "address" }
                ),
                resolve: context => {
                    var universeId = context.GetArgument<int>("universeId");
                    var universe = masterController.Venue.Universes.Single(x => x.UniverseID == universeId);
                    var address = context.GetArgument<int>("address");
                    return universe.Fixtures.Single(x => x.Address == address);
                }
            );
        }
    }
}
