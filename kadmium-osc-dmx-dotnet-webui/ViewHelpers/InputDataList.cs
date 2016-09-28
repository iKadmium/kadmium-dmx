using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputDataList : InputElement
    {
        public IEnumerable<string> Items { get; set; }
        public override string ViewName
        {
            get
            {
                return "InputDataListMinimal";
            }
        }

        public InputDataList(string id, params string[] items) : base(id)
        {
            Items = items;
        }
    }
}
