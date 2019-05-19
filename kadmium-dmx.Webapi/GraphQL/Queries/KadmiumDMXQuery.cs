using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_webapi.GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Queries
{
    public class KadmiumDMXQuery : ObjectGraphType<object>
    {
        public KadmiumDMXQuery(IGroupStore groupStore, ISettingsStore settingsStore, IFixtureDefinitionStore fixtureDefinitionStore, IVenueStore venueStore, IMasterController masterController)
        {
            Name = "KadmiumDMXQuery";

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
                    new QueryArgument<StringGraphType> { Name = "manufacturer"},
                    new QueryArgument<StringGraphType> { Name = "model" }
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

            FieldAsync<VenueType>(
                name: "activeVenue",
                resolve: async context => {
                    string name = masterController.Venue.Name;
                    if(await venueStore.Exists(name))
                    {
                        VenueData venue = await venueStore.Get(name);
                        return venue;
                    }
                    else
                    {
                        return null;
                    }
                }
            );
        }
    }
}
