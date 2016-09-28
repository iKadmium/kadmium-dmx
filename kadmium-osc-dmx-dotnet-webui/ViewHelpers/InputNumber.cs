using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputNumber : VisibleInputElement
    {
        public int Min { get; set; }
        public int Max { get; set; }
        public int? Default { get; set; }
        
        public InputNumber(string id, string label, int min, int max, int? defaultValue = null) : base(id, label)
        {
            Min = min;
            Max = max;
            Default = defaultValue;
        }

        public override string ViewName
        {
            get
            {
                return "InputNumber";
            }
        }
    }
}
