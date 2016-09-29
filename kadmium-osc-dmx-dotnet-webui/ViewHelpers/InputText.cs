using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputText : VisibleInputElement
    {
        public string Default { get; set; }
        public bool Required { get; set; }

        public InputText(string id, string label, bool required = true) : base(id, label)
        {
            Required = required;
        }

        public override string ViewName
        {
            get
            {
                return "InputText";
            }
        }
    }
}
