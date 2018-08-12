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
                    new DMXChannelData { Name = "Strobe", Address = 1, Min = 192, Max = 255 }
                },
                Movements = new List<IMovementAxisData>(),
                ColorWheel = new List<IColorWheelEntryData>()
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
                },
                Channels = new List<IDMXChannelData>
                {
                    new DMXChannelData
                    {
                        Address = (ushort)1,
                        Name = axisName
                    }
                },
                Movements = new List<IMovementAxisData>
                {
                    new MovementAxisData
                    {
                        Name = axisName,
                        Min = min,
                        Max = max
                    }
                },
                ColorWheel = new List<IColorWheelEntryData>()
            };
            
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
                },
                Movements = new List<IMovementAxisData>(),
                ColorWheel = new List<IColorWheelEntryData>()
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
                },
                Movements = new List<IMovementAxisData>(),
                ColorWheel = new List<IColorWheelEntryData>()
            };

            return definition;
        }

        public static FixtureDefinition GetFireFixtureDefinition(bool fireHeightChannel = false)
        {
            var channels = new List<IDMXChannelData>
            {
                new DMXChannelData {Name = "Fire", Address = 1 }
            };

            if (fireHeightChannel)
            {
                channels.Add(new DMXChannelData
                {
                    Name = "FireHeight",
                    Address = (ushort)(channels.Count + 1)
                });
            }

            var definition = new FixtureDefinition()
            {
                Skeleton = new FixtureDefinitionSkeleton
                {
                    Manufacturer = "Generic",
                    Model = "Fire Fixture"
                },
                Channels = channels,
                Movements = new List<IMovementAxisData>(),
                ColorWheel = new List<IColorWheelEntryData>()
            };

            return definition;
        }
    }
}
