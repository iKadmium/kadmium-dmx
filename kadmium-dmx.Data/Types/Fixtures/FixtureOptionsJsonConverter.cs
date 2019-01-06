//using kadmium_dmx_data.Types.Fixtures;
//using Newtonsoft.Json;
//using Newtonsoft.Json.Linq;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace kadmium_dmx_data.Types.Fixtures
//{
//    public class FixtureOptionsJsonConverter : JsonConverter<FixtureOptions>
//    {
//        public override FixtureOptions ReadJson(JsonReader reader, Type objectType, FixtureOptions existingValue, bool hasExistingValue, JsonSerializer serializer)
//        {
//            FixtureOptions options = new FixtureOptions();
//            JObject obj = JObject.Load(reader);
//            options.MaxBrightness = obj["maxBrightness"]?.Value<float>() ?? null;
//            var axisOptionsObj = obj["axisOptions"] as JObject;
//            foreach(var axisObj in axisOptionsObj?.Children<JProperty>())
//            {
//                var name = axisObj.Name;
//                var value = axisObj.Value as JObject;
//                var inverted = value["inverted"].Value<bool>();

//                var restrictionsObj = value["restrictions"].Value<JObject>();
//                var min = restrictionsObj["min"].Value<int>();
//                var max = restrictionsObj["max"].Value<int>();
//                var restriction = new MovementAxisRestriction()
//                {
//                    Min = min,
//                    Max = max
//                };

//                var axisOptions = new MovementAxisOptions
//                {
//                    Inverted = inverted,
//                    Restrictions = restriction
//                };

//                options.AxisOptions.Add(name, axisOptions);

//            }
//            return options;
//        }

//        public override void WriteJson(JsonWriter writer, FixtureOptions value, JsonSerializer serializer)
//        {
//            JObject obj = new JObject(
//                new JProperty("maxBrightness", value.MaxBrightness),
//                new JProperty("axisOptions", 
//                    new JObject(
//                        from axisKvp in value.AxisOptions
//                        select new JProperty(
//                            axisKvp.Key,
//                            new JObject(
//                                new JProperty("inverted", axisKvp.Value.Inverted),
//                                new JProperty("restrictions", 
//                                    new JObject(
//                                        new JProperty("min", axisKvp.Value.Restrictions.Min),
//                                        new JProperty("max", axisKvp.Value.Restrictions.Max)
//                                    )
//                                )
//                            )
//                        )
//                    )
//                )
//            );
//            writer.WriteRaw(obj.ToString());
//        }
//    }
//}
