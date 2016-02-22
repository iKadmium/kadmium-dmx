using kadmium_sacn;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SACNViewer
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        SACNServer server;
        List<DMXRectAdapter> dmxRectAdapters;

        public MainWindow()
        {
            InitializeComponent();
            server = new SACNServer(1);
            dmxRectAdapters = new List<DMXRectAdapter>();

            int rows = 52;
            int columns = 10;
            int cells = 512;

            for (int i = 0; i < rows; i++)
            {
                ControlTemplate rowTemplate = Resources["RowTemplate"] as ControlTemplate;
                StackPanel stackPanel = rowTemplate.LoadContent() as StackPanel;
                for(int j = 0; j < columns && ((i * 10 + j) < cells); j++)
                {
                    ControlTemplate channelTemplate = Resources["DMXTemplate"] as ControlTemplate;
                    Rectangle rectangle = channelTemplate.LoadContent() as Rectangle;
                    DMXRectAdapter adapter = new DMXRectAdapter();
                    rectangle.DataContext = adapter;
                    stackPanel.Children.Add(rectangle);
                    dmxRectAdapters.Add(adapter);
                }
                
                stkRows.Children.Add(stackPanel);
            }
            server.OnReceive += Server_OnReceive;
        }

        private void Server_OnReceive(object sender, SACNServer.PacketReceivedEventArgs e)
        {
            for(int i = 0; i < e.Packet.Data.Length; i++)
            {
                dmxRectAdapters[i].DMXValue = e.Packet.Data[i];
            }
        }
    }
}
