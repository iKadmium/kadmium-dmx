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
            FixtureDefinitionSkeleton skeleton = new FixtureDefinitionSkeleton();
            skeleton.Id = Id;
            skeleton.Manufacturer = Manufacturer;
            skeleton.Model = Model;
            return skeleton;
        }

        public static FixtureDefinition Load(JObject modelElement)
        {
            FixtureDefinition definition = new FixtureDefinition();
            foreach (JObject channelElement in modelElement["channels"])
            {
                DMXChannel channel = DMXChannel.Load(channelElement);
                definition.Channels.Add(channel);
            }
            definition.Type = (FixtureType)Enum.Parse(typeof(FixtureType), modelElement["type"].Value<string>());
            definition.Model = modelElement["model"].Value<string>();
            definition.Manufacturer = modelElement["manufacturer"].Value<string>();
            definition.BeamAngle = modelElement["beamAngle"].Value<float>();
            definition.Lux = modelElement["lux"].Value<float>();
            if (modelElement["movements"] != null)
            {
                foreach (JObject movementAxis in modelElement["movements"])
                {
                    MovementAxis axis = MovementAxis.Load(movementAxis);
                    definition.Movements.Add(axis);
                }
            }
            if (modelElement["colorWheel"] != null)
            {
                foreach (JObject colorWheelEntry in modelElement["colorWheel"])
                {
                    ColorWheelEntry entry = ColorWheelEntry.Load(colorWheelEntry);
                    definition.ColorWheel.Add(entry);
                }
            }
            if(modelElement["id"] != null)
            {
                definition.Id = modelElement["id"].Value<int>();
            }
            return definition;
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("$schema", FileAccess.GetRelativePath(FileAccess.GetFixtureDefinitionPath(Manufacturer, Model), FileAccess.FixtureDefinitionSchema)),
                new JProperty("model", Model),
                new JProperty("manufacturer", Manufacturer),
                new JProperty("type", Type.ToString()),
                new JProperty("beamAngle", BeamAngle),
                new JProperty("lux", Lux),
                new JProperty("channels",
                    new JArray(
                        from channel in Channels
                        select new JObject(
                            new JProperty("name", channel.Name),
                            new JProperty("address", channel.Address),
                            new JProperty("min", channel.Min),
                            new JProperty("max", channel.Max)
                        )
                    )
                )
            );

            if (Movements.Count > 0)
            {
                obj.Add(
                    new JProperty("movements",
                        new JArray(
                            from axis in Movements
                            select new JObject(
                                new JProperty("name", axis.Name),
                                new JProperty("min", axis.Min),
                                new JProperty("max", axis.Max)
                            )
                        )
                    )
                );
            }
            if (ColorWheel.Count > 0)
            {
                obj.Add(
                    new JProperty("colorWheel",
                        new JArray(
                            from entry in ColorWheel
                            select new JObject(
                                new JProperty("name", entry.Name),
                                new JProperty("min", entry.Min),
                                new JProperty("max", entry.Max),
                                new JProperty("color", entry.Color.ToString())
                            )
                        )
                    )
                );
            }

            return obj;
        }   
    }

    public class FixtureDefinitionSkeleton
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
