using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputList : VisibleInputElement
    {
        public string DataListID { get; set; }
        public InputList(string id, string label, string dataListID) : base(id, label)
        {
            DataListID = dataListID;
        }

        public override string ViewName
        {
            get
            {
                return "InputList";
            }
        }
    }
}
