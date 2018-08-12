namespace kadmium_dmx_data.Types.Settings
{
    public interface ISettings
    {
        EnttecProTransmitterSettings EnttecProTransmitter { get; set; }
        SacnTransmitterSettings SacnTransmitter { get; set; }
        int OscPort { get; set; }
        int WebPort { get; set; }
    }
}