using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public abstract class InputElement
    {
        public InputElement(string id)
        {
            ID = id;
        }

        public string ID { get; set; }
        public abstract string ViewName { get; }
    }
}
