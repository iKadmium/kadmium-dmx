using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace SACNViewer
{
    class DMXRectAdapter : INotifyPropertyChanged
    {
        private byte dmxValue;
        public Brush Brush
        {
            get
            {
                return new SolidColorBrush(Color.FromRgb(DMXValue, DMXValue, DMXValue));
            }
        }
        public byte DMXValue
        {
            get
            {
                return dmxValue;
            }
            set
            {
                dmxValue = value;
                if (PropertyChanged != null)
                {
                    PropertyChanged(this, new PropertyChangedEventArgs(nameof(DMXValue)));
                    PropertyChanged(this, new PropertyChangedEventArgs(nameof(Brush)));
                }
            }
        }
        

        public event PropertyChangedEventHandler PropertyChanged;
    }
}
