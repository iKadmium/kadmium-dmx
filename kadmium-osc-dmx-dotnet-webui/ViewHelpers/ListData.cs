using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class ListData
    {
        public string Name { get; set; }
        public IEnumerable<string> Items { get; set; }

        public ListData(string name, IEnumerable<string> items)
        {
            Name = name;
            Items = items;
        }
    }
}
