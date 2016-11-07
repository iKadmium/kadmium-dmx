using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputCollectionContext
    {
        public List<InputCollectionItemContext> Items { get; }
        public string Name { get; set; }

        public InputCollectionContext()
        {
            Items = new List<InputCollectionItemContext>();
        }
    }

    [HtmlTargetElement("input-collection")]
    [RestrictChildren("input-collection-header", "input-collection-body", "input-collection-footer")]
    public class InputCollectionTagHelper : TagHelper
    {
        public string Name { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "div";

            output.Attributes.SetAttribute("class", "panel panel-default");

            var collectionContext = new InputCollectionContext();
            context.Items.Add(typeof(InputCollectionTagHelper), collectionContext);
            collectionContext.Name = Name;
        }
    }
}
