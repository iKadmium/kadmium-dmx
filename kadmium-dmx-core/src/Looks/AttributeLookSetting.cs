namespace kadmium_dmx_core.Looks
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
