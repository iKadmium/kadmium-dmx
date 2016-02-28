using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_core.Fixtures
{
    public class Point2D
    {
        public int X { get; set; }
        public int Y { get; set; }

        public Point2D(int x, int y)
        {
            X = x;
            Y = y;
        }

        public Point2D() : this(0, 0) { }

        public override int GetHashCode()
        {
            return Tuple.Create(X, Y).GetHashCode();
        }

        public static Point2D operator +(Point2D first, Point2D second)
        {
            return new Point2D(first.X + second.X, first.Y + second.Y);
        }

        public static Point2D operator -(Point2D first, Point2D second)
        {
            return new Point2D(first.X - second.X, first.Y - second.Y);
        }

        public static bool operator ==(Point2D first, Point2D second)
        {
            return first.Equals(second);
        }

        public static bool operator !=(Point2D first, Point2D second)
        {
            return !first.Equals(second);
        }

        public override bool Equals(object obj)
        {
            if(obj.GetType() != typeof(Point2D))
            {
                return false;
            }
            Point2D other = obj as Point2D;
            return X == other.X && Y == other.Y;
        }
    }
}
