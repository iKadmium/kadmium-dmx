using kadmium_dmx_data.Storage;
using kadmium_dmx_data.Types.Fixtures;
using kadmium_dmx_data.Types.Venues;
using Moq;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace kadmium_dmx.DataAccess.Json.Test
{
    public class FixtureDefinitionStoreTests
    {
        [Fact]
        public async Task Add_NoPreconditions_SaveIsCalledOnDefinition()
        {
            Mock<IFileAccess> fileAccess = new Mock<IFileAccess>();
            IFixtureDefinitionStore store = new JsonFixtureDefinitionStore(fileAccess.Object);

            FixtureDefinition definition = new FixtureDefinition()
            {
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData { Address = 1, Min = 0, Max = 255, Name = "Red" },
                    new DMXChannelData { Address = 2, Min = 125, Max = 200, Name = "Green" },
                    new DMXChannelData { Address = 35, Min = 0, Max = 255, Name = "Blue" }
                },
            };

            await store.Add(definition);
            fileAccess.Verify(x => x.Save(definition, It.IsAny<string>()));
        }

        [Fact]
        public async Task Remove_NoPreconditions_RemoveIsCalledOnDefinitionSkeleton()
        {
            Mock<IFileAccess> fileAccess = new Mock<IFileAccess>();
            IFixtureDefinitionStore store = new JsonFixtureDefinitionStore(fileAccess.Object);

            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton
            {
                Manufacturer = "Manufacturer",
                Model = "Model"
            };

            await store.Remove(skeleton);
            string expectedPath = Path.Combine("Fixture Definitions", skeleton.Manufacturer, skeleton.Model + ".json");
            fileAccess.Verify(x => x.Delete(expectedPath));
        }
    }
}
