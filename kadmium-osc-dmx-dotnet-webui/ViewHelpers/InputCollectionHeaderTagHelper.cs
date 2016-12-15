using Microsoft.AspNetCore.Razor.TagHelpers;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("input-collection-header", ParentTag = "input-collection")]
    public class InputCollectionHeaderTagHelper : TagHelper
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "div";
            output.Attributes.SetAttribute("class", "panel-heading");
        }
    }
}
