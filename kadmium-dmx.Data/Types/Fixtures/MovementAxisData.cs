using System;

namespace kadmium_dmx_data.Types.Fixtures
{
    public class MovementAxisData : IMovementAxisData
    {
        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
    }
}
