using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputCheckbox : VisibleInputElement
    {
        public bool Default { get; set; }

        public InputCheckbox(string id, string label, bool defaultValue = false) : base(id, label)
        {
            Default = defaultValue;
        }

        public override string ViewName
        {
            get
            {
                return "InputCheckbox";
            }
        }
    }
}
