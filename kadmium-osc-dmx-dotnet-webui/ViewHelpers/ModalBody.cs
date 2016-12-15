using Microsoft.AspNetCore.Razor.TagHelpers;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("modal-body", ParentTag = "modal-window")]
    public class ModalEditBodyTagHelper : TagHelper
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "div";
            output.Attributes.Add("class", "modal-body clearfix");
        }
    }
}
