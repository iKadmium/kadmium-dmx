using kadmium_osc_dmx_dotnet_core.Color;
using System;
using System.Collections.Generic;
using System.Text;

namespace kadmium_osc_dmx_dotnet_core.Looks
{
    public class ColorLookSetting : LookSetting
    {
        public string Color { get; set; }

        public override void Activate(float amount)
        {
            RGB rgb = RGB.Parse(Color.ToUpper());
            HSB hsb = ColorSpaceHelper.RGBtoHSB(rgb);

            MasterController.Instance.Groups[GroupString].Set("Hue", (float)(hsb.Hue / 360.0));
            MasterController.Instance.Groups[GroupString].Set("Saturation", (float)hsb.Saturation);
            MasterController.Instance.Groups[GroupString].Set("Brightness", (float)hsb.Brightness * amount);
        }

        public ColorLookSetting() : base()
        {

        }
    }
}
