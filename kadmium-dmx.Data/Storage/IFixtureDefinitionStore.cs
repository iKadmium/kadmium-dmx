using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_data.Storage
{
    public interface IFixtureDefinitionStore : IStore<FixtureDefinitionSkeleton, IFixtureDefinition>
    {
    }
}
