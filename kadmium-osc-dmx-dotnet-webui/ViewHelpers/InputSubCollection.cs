using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputSubWindow : VisibleInputElement
    {
        public IEnumerable<VisibleInputElement> Items { get; set; }
        public string BindingContext { get; set; }
        public string EditMethod { get; set; }

        public override string ViewName
        {
            get
            {
                return "InputSubWindow";
            }
        }

        public InputSubWindow(string id, string label, string editMethod, string bindingContext, params VisibleInputElement[] items) : base(id, label)
        {
            Items = items;
            EditMethod = editMethod;
            BindingContext = bindingContext;
        }
    }
}
