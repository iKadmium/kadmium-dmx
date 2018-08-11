using System.Collections.Generic;

namespace kadmium_dmx_data.Types.Fixtures
{
    public interface IFixtureDefinition
    {
        FixtureDefinitionSkeleton Skeleton { get; set; }
        List<IDMXChannelData> Channels { get; set; }
        List<IMovementAxisData> Movements { get; set; }
        List<IColorWheelEntryData> ColorWheel { get; set; }
        FixtureType FixtureType { get; set; }
        float BeamAngle { get; set; }
        float Lux { get; set; }
    }
}