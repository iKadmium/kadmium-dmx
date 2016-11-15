using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Definition
    {
        public string Name { get; set; }
        public List<DMXChannel> Channels { get; }
        public List<MovementAxis> Axis { get; }
        public List<ColorWheelEntry> ColorWheel { get; }
        public FixtureType Type { get; set; }

        public Definition()
        {
            Channels = new List<DMXChannel>();
            Axis = new List<MovementAxis>();
            ColorWheel = new List<ColorWheelEntry>();
            Name = "";
        }

        public static Definition Load(JObject modelElement)
        {
            Definition definition = new Definition();
            foreach (JObject channelElement in modelElement["channels"])
            {
                DMXChannel channel = DMXChannel.Load(channelElement);
                definition.Channels.Add(channel);
            }
            definition.Type = (FixtureType)Enum.Parse(typeof(FixtureType), modelElement["type"].Value<string>());
            definition.Name = modelElement["name"].Value<string>();
            if (modelElement["movements"] != null)
            {
                foreach (JObject movementAxis in modelElement["movements"])
                {
                    MovementAxis axis = MovementAxis.Load(movementAxis);
                    definition.Axis.Add(axis);
                }
            }
            if(modelElement["colorWheel"] != null)
            {
                foreach (JObject colorWheelEntry in modelElement["colorWheel"])
                {
                    ColorWheelEntry entry = ColorWheelEntry.Load(colorWheelEntry);
                    definition.ColorWheel.Add(entry);
                }
            }
            return definition;
        }

        public JObject Serialize()
        {
            JObject obj = new JObject(
                new JProperty("name", Name),
                new JProperty("type", Type.ToString()),
                new JProperty("channels",
                    new JArray(
                        from channel in Channels
                        select new JObject(
                            new JProperty("name", channel.Name),
                            new JProperty("dmx", channel.RelativeAddress),
                            new JProperty("min", channel.Min),
                            new JProperty("max", channel.Max)
                        )
                    )
                )
            );

            if(Axis.Count > 0)
            {
                obj.Add(
                    new JProperty("movements",
                        new JArray(
                            from axis in Axis
                            select new JObject(
                                new JProperty("name", axis.Name),
                                new JProperty("min", axis.Min),
                                new JProperty("max", axis.Max)
                            )
                        )
                    )
                );
            }
            if(ColorWheel.Count > 0)
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

        public static Definition Load(string name)
        {
            return Load(FileAccess.LoadFixtureDefinition(name));
        }
    }
}
