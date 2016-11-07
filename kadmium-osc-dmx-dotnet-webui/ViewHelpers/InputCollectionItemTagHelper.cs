using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class InputCollectionItemContext
    {
        public string Label { get; set; }
        public IHtmlContent Content { get; set; }
    }

    [HtmlTargetElement("input-collection-item", ParentTag = "input-collection-body")]
    public class InputCollectionItemTagHelper : TagHelper
    {
        public string Label { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            var content = await output.GetChildContentAsync();
            var collectionContext = (InputCollectionContext)context.Items[typeof(InputCollectionTagHelper)];

            var localContext = new InputCollectionItemContext() { Label = Label, Content = content };

            collectionContext.Items.Add(localContext);
            output.SuppressOutput();
        }
    }
}
