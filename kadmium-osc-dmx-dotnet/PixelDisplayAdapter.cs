using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace kadmium_osc_dmx_dotnet_ui
{
    class PixelDisplayAdapter : INotifyPropertyChanged
    {
        private Pixel Pixel { get; set; }
        private Fixture Fixture { get; set; }

        public Color Color
        {
            get
            {
                return ColorExtensions.FromPixel(Fixture, Pixel, MasterController.Instance.Strobe);
            }
        }

        public Brush RectFill
        {
            get
            {
                return new SolidColorBrush(Color);
            }
        }

        public PixelDisplayAdapter(Fixture fixture, Pixel pixel)
        {
            Fixture = fixture;
            Pixel = pixel;
            pixel.Updated += Pixel_Updated;
        }

        private void Pixel_Updated(object sender, EventArgs e)
        {
            this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(RectFill)));
        }

        public event PropertyChangedEventHandler PropertyChanged;
    }
}
