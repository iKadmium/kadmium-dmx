using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace kadmium_dmx_data.Types.Fixtures
{
    //[JsonConverter(typeof(FixtureOptionsJsonConverter))]
    public class FixtureOptions
    {
        public float? MaxBrightness { get; set; }
        public List<MovementAxisOptions> AxisOptions { get; set; }

        public FixtureOptions()
        {
            MaxBrightness = null;
            AxisOptions = new List<MovementAxisOptions>();
        }

        public static string GetTitleCaseAxisName(string camelCaseAxisName)
        {
            var newName = camelCaseAxisName.ToUpper().Substring(0, 1);
            newName += camelCaseAxisName.Substring(1);
            return newName;
        }
    }
}
