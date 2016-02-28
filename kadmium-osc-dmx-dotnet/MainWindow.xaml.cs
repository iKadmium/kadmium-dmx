using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_core.Fixtures;
using kadmium_osc_dmx_dotnet_core.Listeners;
using kadmium_osc_dmx_dotnet_core.Transmitters;
using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Timers;
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

namespace kadmium_osc_dmx_dotnet_ui
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public static ResourceDictionary MainResources;
        
        public MainWindow()
        {
            InitializeComponent();
            MainResources = Resources;
        }

        private void FixtureRect_MouseUp(object sender, MouseButtonEventArgs e)
        {
            Rectangle fixtureRect = sender as Rectangle;
            FixtureDisplayAdapter adapter = fixtureRect.DataContext as FixtureDisplayAdapter;
            adapter.DebugLevel++;
        }
        
        private void Window_Closed(object sender, EventArgs e)
        {
            MasterController.Instance.Close();
        }

        private void FileOpenExecuted(object sender, ExecutedRoutedEventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            openFileDialog.Filter = "Venue Files *.xml|*.xml";
            bool? result = openFileDialog.ShowDialog(this);
            if(result != null && result.Value)
            {
                ApplicationCommands.Close.Execute(null, null);
                MasterController.Initialise();
                MasterController.Instance.LoadVenue(openFileDialog.FileName);

                foreach (Group group in MasterController.Instance.Groups.Values)
                {
                    GroupBox groupBox = new GroupBox();
                    groupBox.Header = group.Name;
                    groupsPanel.Children.Add(groupBox);
                    WrapPanel panel = new WrapPanel();
                    groupBox.Content = panel;

                    foreach (Fixture fixture in group.Fixtures)
                    {
                        ControlTemplate template = Resources["FixtureControlTemplate"] as ControlTemplate;
                        StackPanel control = template.LoadContent() as StackPanel;
                        FixtureDisplayAdapter adapter = new FixtureDisplayAdapter(fixture);
                        control.DataContext = adapter;
                        panel.Children.Add(control);
                    }
                }

                foreach (Listener listener in MasterController.Instance.Listeners)
                {
                    ControlTemplate template = Resources["statusControlTemplate"] as ControlTemplate;
                    GroupBox control = template.LoadContent() as GroupBox;
                    control.DataContext = listener;
                    stkStatus.Children.Add(control);
                }
                foreach (Transmitter transmitter in MasterController.Instance.Transmitters)
                {
                    ControlTemplate template = Resources["statusControlTemplate"] as ControlTemplate;
                    GroupBox control = template.LoadContent() as GroupBox;
                    control.DataContext = transmitter;
                    stkStatus.Children.Add(control);
                }

                MasterController.Instance.Start();
            }
            
        }

        private void FileCloseExecuted(object sender, ExecutedRoutedEventArgs e)
        {
            MasterController.Instance?.Close();
            stkStatus.Children.Clear();
            groupsPanel.Children.Clear();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            ApplicationCommands.Open.Execute(null, null);
        }

        private void FileExit_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }
    }
}
