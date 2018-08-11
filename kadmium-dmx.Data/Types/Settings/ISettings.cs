namespace kadmium_dmx_data.Types.Settings
{
    public interface ISettings
    {
        IEnttecProTransmitterSettings EnttecProTransmitter { get; set; }
        ISacnTransmitterSettings SacnTransmitter { get; set; }
        int OscPort { get; set; }
        int WebPort { get; set; }
    }
}