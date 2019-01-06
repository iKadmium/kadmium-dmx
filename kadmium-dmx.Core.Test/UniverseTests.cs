using kadmium_dmx_core;
using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using System.Collections.Generic;

namespace kadmium_dmx.Core.Test
{
    class UniverseTests
    {
        public static Universe GetSingleFixtureUniverse(FixtureDefinition definition, string group, string name = "Test Universe")
        {
            Universe universe = new Universe(
                new UniverseData
                {
                    Name = name,
                    UniverseID = 1,
                    Fixtures = new[]
                    {
                        new FixtureData
                        {
                            Address = 1,
                            Group = group,
                            Type = definition.Skeleton
                        }
                    }
                },
                new Dictionary<FixtureDefinitionSkeleton, IFixtureDefinition>
                {
                    { definition.Skeleton, definition }
                }
            );
            
            return universe;
        }
    }
}
