namespace kadmium_dmx_data.Types.Settings
{
    public class Settings : ISettings
    {
        public int WebPort { get; set; }
        public int OscPort { get; set; }
        public IEnttecProTransmitterSettings EnttecProTransmitter { get; set; }
        public ISacnTransmitterSettings SacnTransmitter {get;set;}

        public Settings()
        {
            WebPort = 5000;
            OscPort = 9001;
            SacnTransmitter = new SacnTransmitterSettings();
            EnttecProTransmitter = new EnttecProTransmitterSettings();
        }   
    }
}
