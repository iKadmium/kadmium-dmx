using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace kadmium_dmx_core.Fixtures
{
    public abstract class FixtureAttribute
    {
        private float value;

        [NotMapped]
        [JsonIgnore]
        public float Value
        {
            get { return value; }
            set
            {
                if (value < 0.0f || value > 1.0f)
                {
                    throw new ArgumentException(value + " is out of range for an attribute");
                }
                this.value = value;
            }
        }
        public string Name { get; set; }
        [NotMapped]
        [JsonIgnore]
        public bool Controlled { get; set; }

        public FixtureAttribute(string name, float value = 0.0f)
        {
            Name = name;
            Value = value;
            Controlled = false;
        }
    }
}
