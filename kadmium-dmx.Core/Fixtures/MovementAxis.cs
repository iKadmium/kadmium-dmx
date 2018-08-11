using kadmium_dmx_data.Types;
using kadmium_dmx_data.Types.Fixtures;
using System;

namespace kadmium_dmx_core.Fixtures
{
    public class MovementAxis
    {
        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }

        public MovementAxis(IMovementAxisData data)
        {
            Name = data.Name;
            Min = data.Min;
            Max = data.Max;
        }
    }
}
