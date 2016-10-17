using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputCollection : VisibleInputElement
    {
        public IEnumerable<VisibleInputElement> Items { get; set; }
        public string AddMethod { get; set; }
        public string RemoveMethod { get; set; }

        public override string ViewName
        {
            get
            {
                return "InputCollection";
            }
        }
        
        public InputCollection(string id, string label, string addMethod, string removeMethod, params VisibleInputElement[] items) : base(id, label)
        {
            Items = items;
            AddMethod = addMethod;
            RemoveMethod = removeMethod;
        }
    }
}
