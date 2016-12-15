using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("button", Attributes = "[asp-template=edit]")]
    public class ButtonEditTagHelper : TagHelper
    {
        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            var content = await output.GetChildContentAsync();
            if (content.IsEmptyOrWhiteSpace)
            {
                var span = new HtmlTags.HtmlTag("span")
                .AddClass("glyphicon glyphicon-edit");
                output.Content.SetHtmlContent(span.ToString());
            }
            output.Attributes.SetAttribute("class", "btn btn-primary");
        }
    }
}
