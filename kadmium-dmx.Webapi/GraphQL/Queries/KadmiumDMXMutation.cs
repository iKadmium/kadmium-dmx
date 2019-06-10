using GraphQL.Types;
using kadmium_dmx_core;
using kadmium_dmx_core.Listeners;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using kadmium_dmx_webapi.GraphQL.Types.Venues;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Queries
{
    public class KadmiumDMXMutation : ObjectGraphType
    {
        public KadmiumDMXMutation(IVenueStore venueStore, IGroupStore groupStore, IFixtureDefinitionStore fixtureDefinitionStore, IMasterController masterController, IListener listener)
        {
            Name = "KadmiumDMXMutation";

            FieldAsync<VenueType>(
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

            Field<BooleanGraphType>(
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
        }

        private async Task<VenueData> LoadVenue(string name, IVenueStore venueStore, IGroupStore groupStore, IFixtureDefinitionStore fixtureDefinitionStore, IMasterController masterController)
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
