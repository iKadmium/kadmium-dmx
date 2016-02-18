using kadmium_osc_dmx_dotnet.Properties;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Ink;
using System.Windows.Media;
using System.Windows.Shapes;

namespace kadmium_osc_dmx_dotnet
{
    public enum DebugLevel
    {
        None,
        Names,
        Numbers
    }

    class FixtureDisplayAdapter : INotifyPropertyChanged
    {
        public static double FixtureRectSize
        {
            get
            {
                return (double)MainWindow.MainResources["FixtureSize"];
            }
        }

        public Fixture Fixture { get; set; }
        public string DebugText
        {
            get
            {
                switch (DebugLevel)
                {
                    case DebugLevel.Names:
                        return Fixture.Adapter.DebugNames;
                    case DebugLevel.Numbers:
                        return Fixture.Adapter.DebugNumbers;
                    default:
                        return "";
                }
            }
        }

        public Visibility PanLineVisibility { get { return Fixture.Settables.ContainsKey("PanCoarse") ? Visibility.Visible : Visibility.Collapsed; } }
        public Visibility TiltLineVisibility { get { return Fixture.Settables.ContainsKey("TiltCoarse") ? Visibility.Visible : Visibility.Collapsed; } }

        public Brush LineStroke
        {
            get
            {
                return new SolidColorBrush(ColorExtensions.ContrastColor(Color));
            }
        }

        public double PanLineX { get; set; }
        public double TiltLineY { get; set; }
        
        public double PanLineXTarget
        {
            get
            {
                if(Fixture.Settables.ContainsKey("PanCoarse"))
                {
                    return Fixture.Settables["PanCoarse"].Value * FixtureRectSize;
                }
                return 0;
            }
        }

        public double TiltLineYTarget
        {
            get
            {
                if (Fixture.Settables.ContainsKey("TiltCoarse"))
                {
                    return Fixture.Settables["TiltCoarse"].Value * FixtureRectSize;
                }
                return 0;
            }
        }

        public Color Color
        {
            get
            {
                return ColorExtensions.FromFixture(Fixture, MasterController.Instance.Strobe);
            }
        }

        public Brush RectFill
        {
            get
            {
                return new SolidColorBrush(Color);
            }
        }

        private DebugLevel debugLevel;
        private readonly double MAX_PAN_SPEED = FixtureRectSize / 120.0f;
        private readonly double MAX_TILT_SPEED = FixtureRectSize / 120.0f;

        public event PropertyChangedEventHandler PropertyChanged;

        public string DisplayName
        {
            get
            {
                return Fixture.Adapter.DisplayName;
            }
        }

        public DebugLevel DebugLevel
        {
            get
            {
                return debugLevel;
            }
            set
            {
                debugLevel = value;
                if((int)value > Enum.GetNames(typeof(DebugLevel)).Count() - 1)
                {
                    debugLevel = 0;
                }
                this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(DebugLevel)));
            }
        }

        public FixtureDisplayAdapter(Fixture fixture)
        {
            Fixture = fixture;
            DebugLevel = new DebugLevel();
            Fixture.Updated += Fixture_Updated;
        }

        
        private void Fixture_Updated(object sender, EventArgs e)
        {
            PanLineX = UpdateAxis(PanLineX, PanLineXTarget, MAX_PAN_SPEED);
            TiltLineY = UpdateAxis(TiltLineY, TiltLineYTarget, MAX_TILT_SPEED);
            
            this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(RectFill)));
            this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(LineStroke)));
            this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(TiltLineY)));
            this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(PanLineX)));
            if (DebugLevel != DebugLevel.None)
            {
                this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(DebugText)));
            }
            
        }

        private double UpdateAxis(double axisLocation, double axisTarget, double maxPanSpeed)
        {
            double axisDistance = axisTarget - axisLocation;
            if (Math.Abs(axisDistance) < MAX_PAN_SPEED)
            {
                return axisTarget;
            }
            else
            {
                if (axisDistance < 0)
                {
                    return axisLocation - MAX_PAN_SPEED;
                }
                else
                {
                    return axisLocation + MAX_PAN_SPEED;
                }
            }
        }
    }
}
