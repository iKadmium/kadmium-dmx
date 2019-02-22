namespace kadmium_dmx_core.Fixtures
{
    public interface IStrobe
    {
        double Frequency { get; set; }
        bool GetValue();
    }
}