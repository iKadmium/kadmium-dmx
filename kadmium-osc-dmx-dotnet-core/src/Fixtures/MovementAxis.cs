﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class MovementAxis
    {
        public MovementAxis(string name, int min, int max)
        {
            Name = name;
            Min = min;
            Max = max;
        }

        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }

        public static MovementAxis Load(JObject movementAxis)
        {
            string name = movementAxis["name"].Value<string>();
            int min = movementAxis["min"].Value<int>();
            int max = movementAxis["max"].Value<int>();
            return new MovementAxis(name, min, max);
        }
    }
}