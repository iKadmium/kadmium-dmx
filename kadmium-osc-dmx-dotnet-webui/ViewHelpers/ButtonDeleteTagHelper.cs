using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("button", Attributes = "[asp-template=delete]")]
    public class ButtonDeleteTagHelper : TagHelper
    {
        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            var content = await output.GetChildContentAsync();
            if(content.IsEmptyOrWhiteSpace)
            {
                var span = new HtmlTags.HtmlTag("span")
                .AddClass("glyphicon glyphicon-remove");
                output.Content.SetHtmlContent(span.ToString());
            }
            output.Attributes.SetAttribute("class", "btn btn-danger");
        }
    }
}
