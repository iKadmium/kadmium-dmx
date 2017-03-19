using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class FixtureDefinition
    {
        public int Id { get; set; }

        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public List<DMXChannel> Channels { get; }
        public List<MovementAxis> Movements { get; }
        public List<ColorWheelEntry> ColorWheel { get; set; }
        public FixtureType Type { get; set; }
        public float Lux { get; set; }
        public float BeamAngle { get; set; }
        
        public FixtureDefinition()
        {
            Channels = new List<DMXChannel>();
            Movements = new List<MovementAxis>();
            ColorWheel = new List<ColorWheelEntry>();
            Model = "";
            Manufacturer = "";
            Lux = 4000;
            BeamAngle = 30;
        }

        public FixtureDefinitionSkeleton GetSkeleton()
        {
            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton()
            {
                Id = Id,
                Manufacturer = Manufacturer,
                Model = Model
            };
            return skeleton;
        }
    }

    public class FixtureDefinitionSkeleton
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
