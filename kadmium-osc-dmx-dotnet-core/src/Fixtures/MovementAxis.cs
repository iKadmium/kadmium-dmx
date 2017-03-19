using Newtonsoft.Json.Linq;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class MovementAxis : System.IEquatable<MovementAxis>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
        
        public MovementAxis()
        {
            Name = "";
            Min = -270;
            Max = 270;
        }

        public MovementAxis(string name, int min, int max)
        {
            Name = name;
            Min = min;
            Max = max;
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode() ^ Min ^ Max;
        }

        public override bool Equals(object obj)
        {
            var other = obj as MovementAxis;
            if(other == null)
            {
                return false;
            }

            return Equals(other);
        }

        public bool Equals(MovementAxis other)
        {
            if(other == null)
            {
                return false;
            }

            return (other.Min == Min && other.Max == Max && other.Name == Name);
        }
    }
}
