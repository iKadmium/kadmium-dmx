namespace kadmium_dmx_data.Types.Settings
{
    public interface ISettings
    {
        SacnTransmitterSettings SacnTransmitter { get; set; }
        int OscPort { get; set; }
        int WebPort { get; set; }
        float StrobeEffectFrequency { get; set; }
    }
}