using System;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public abstract class Attribute
    {
        private float value;

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
        public bool Controlled { get; set; }

        public Attribute(string name, float value = 0.0f)
        {
            Name = name;
            Value = value;
            Controlled = false;
        }

        public abstract Attribute Clone();
    }
}
