using System;

namespace kadmium_dmx_data.Types.Fixtures
{
    public interface IMovementAxisData
    {
        int Max { get; set; }
        int Min { get; set; }
        string Name { get; set; }
    }
}