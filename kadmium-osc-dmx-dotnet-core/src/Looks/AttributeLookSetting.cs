namespace kadmium_osc_dmx_dotnet_core.Looks
{
    public class AttributeLookSetting : LookSetting
    {
        public string AttributeName { get; set; }
        public float AttributeValue { get; set; }

        public override void Activate(float amount)
        {
            MasterController.Instance.Groups[GroupString].Set(AttributeName, AttributeValue);
        }

        public AttributeLookSetting() : base()
        {

        }
    }
}
