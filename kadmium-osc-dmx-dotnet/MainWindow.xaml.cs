using kadmium_osc_dmx_dotnet_core;
using System;
using System.Collections.Generic;
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
using System.Xml.Serialization;

namespace kadmium_osc_dmx_dotnet
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            MasterController.Initialise();

            foreach (Group group in MasterController.Instance.Groups)
            {
                GroupBox groupBox = new GroupBox();
                groupBox.Header = group.Name;
                groupsPanel.Children.Add(groupBox);
            }

            foreach (Universe universe in MasterController.Instance.Universes)
            {
                TabItem tabItem = new TabItem();
                tabItem.Header = universe.Name;
                tbcUniverses.Items.Add(tabItem);

                foreach (Group group in MasterController.Instance.Groups)
                {

                }
            }

            
        }
    }
}
