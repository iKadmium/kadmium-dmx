using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public abstract class VisibleInputElement : InputElement
    {
        protected VisibleInputElement(string id, string label) : base(id)
        {
            Label = label;
        }

        public string Label { get; set; }
        
    }
}
