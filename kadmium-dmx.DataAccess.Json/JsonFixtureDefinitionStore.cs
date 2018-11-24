using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace kadmium_dmx.DataAccess.Json
{
    public class JsonFixtureDefinitionStore : JsonStore<FixtureDefinitionSkeleton, FixtureDefinition>, IFixtureDefinitionStore
    {
        public JsonFixtureDefinitionStore(IFileAccess fileAccess) : 
            base(
                fileAccess,
                (definition) => definition.Skeleton,
                (skeleton) => Path.Combine(skeleton.Manufacturer, skeleton.Model + ".json"),
                (path) =>
                {
                    string file = Path.GetFileNameWithoutExtension(path);
                    string directory = Path.GetDirectoryName(path);
                    return new FixtureDefinitionSkeleton()
                    {
                        Manufacturer = directory,
                        Model = file
                    };
                },
                "Fixture Definitions")
        { }
    }
}
