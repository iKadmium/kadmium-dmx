using Microsoft.AspNetCore.Razor.TagHelpers;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("binding-context")]
    public class BindingContextTagHelper : TagHelper
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "div";
        }
    }
}
