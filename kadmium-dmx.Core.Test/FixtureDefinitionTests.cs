using kadmium_dmx_core.Fixtures;
using kadmium_dmx_data.Types.Fixtures;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_dmx_test
{
    class FixtureDefinitionTests
    {
        public static FixtureDefinition GetSharedMasterAndStrobeFixture()
        {
            FixtureDefinition definition = new FixtureDefinition()
            {
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData { Name = "Master", Address = 1, Min = 0, Max = 191 },
                    new DMXChannelData { Name = "Master", Address = 1, Min = 192, Max = 255 }
                }
            };
            return definition;
        }

        public static FixtureDefinition GetMovingFixtureDefinition(string axisName, int min, int max)
        {
            FixtureDefinition definition = new FixtureDefinition()
            {
                Skeleton = new FixtureDefinitionSkeleton
                {
                    Model = "Moving Fixture",
                    Manufacturer = "Generic"
                }
            };

            definition.Channels.Add(new DMXChannelData
            {
                Address = (ushort)(definition.Channels.Count + 1),
                Name = axisName
            });

            definition.Movements.Add(new MovementAxisData
            {
                Name = axisName,
                Min = min,
                Max = max
            });

            return definition;
        }

        public static FixtureDefinition GetRGBFixtureDefinition()
        {
            var definition = new FixtureDefinition()
            {
                Skeleton = new FixtureDefinitionSkeleton
                {
                    Manufacturer = "Generic",
                    Model = "RGB Fixture"
                },
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData {Name = "Red", Address = 1 },
                    new DMXChannelData {Name = "Green", Address = 2 },
                    new DMXChannelData {Name = "Blue", Address = 3 }
                }
            };

            return definition;
        }

        public static FixtureDefinition GetRGBWFixtureDefinition()
        {
            var definition = new FixtureDefinition()
            {
                Skeleton = new FixtureDefinitionSkeleton
                {
                    Manufacturer = "Generic",
                    Model = "RGB Fixture"
                },
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData {Name = "Red", Address = 1 },
                    new DMXChannelData {Name = "Green", Address = 2 },
                    new DMXChannelData {Name = "Blue", Address = 3 },
                    new DMXChannelData {Name = "White", Address = 4 }
                }
            };

            return definition;
        }

        public static FixtureDefinition GetFireFixtureDefinition(bool fireHeightChannel = false)
        {
            var definition = new FixtureDefinition()
            {
                Skeleton = new FixtureDefinitionSkeleton
                {
                    Manufacturer = "Generic",
                    Model = "Fire Fixture"
                },
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData {Name = "Fire", Address = 1 }
                }
            };
            if (fireHeightChannel)
            {
                definition.Channels.Add(new DMXChannelData {
                    Name = "FireHeight",
                    Address = (ushort)(definition.Channels.Count + 1)
                });
            }
            return definition;
        }
    }
}
