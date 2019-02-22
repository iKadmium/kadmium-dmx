namespace kadmium_dmx_data.Types.Settings
{
    public class Settings : ISettings
    {
        public int WebPort { get; set; }
        public int OscPort { get; set; }
        public float StrobeEffectFrequency { get; set; }
        public SacnTransmitterSettings SacnTransmitter { get; set; }

        public Settings()
        {
            WebPort = 5000;
            OscPort = 9001;
            StrobeEffectFrequency = 20;
            SacnTransmitter = new SacnTransmitterSettings();
        }
    }
}
