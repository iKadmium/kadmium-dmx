using GraphQL.Types;
using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Types.Venues
{
    public class UniverseType : ObjectGraphType<IUniverseData>
    {
        public UniverseType(IFixtureDefinitionStore fixtureDefinitionStore)
        {
            Name = "Universe";
            Field(x => x.Name);
            Field(x => x.UniverseID);
            Field(x => x.Fixtures, type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<FixtureInstanceType>>>));
            FieldAsync(typeof(NonNullGraphType<IntGraphType>), "dmxChannels", resolve: async context => await GetChannelCount(context.Source, fixtureDefinitionStore));
        }

        private async Task<int> GetChannelCount(IUniverseData universe, IFixtureDefinitionStore fixtureDefinitionStore)
        {
            var fixtureTypes = from fixture in universe.Fixtures
                               select fixture.Type;
            Dictionary<FixtureDefinitionSkeleton, FixtureDefinition> definitions = new Dictionary<FixtureDefinitionSkeleton, FixtureDefinition>();
            int channels = 0;
            foreach (var fixtureType in fixtureTypes)
            {
                FixtureDefinition definition;
                if (!definitions.ContainsKey(fixtureType))
                {
                    definition = await fixtureDefinitionStore.Get(fixtureType);
                    definitions.Add(fixtureType, definition);
                }
                else
                {
                    definition = definitions[fixtureType];
                }
                channels += definition.Channels.Max(x => x.Address) - definition.Channels.Min(x => x.Address);
            }
            return channels;
        }
    }
}
