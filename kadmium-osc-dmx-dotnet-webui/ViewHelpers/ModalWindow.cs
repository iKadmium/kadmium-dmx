using Microsoft.AspNetCore.Razor.TagHelpers;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("modal-window")]
    [RestrictChildren("modal-header", "modal-footer", "modal-body")]
    public class ModalEditWindowTagHelper : TagHelper
    {
        [HtmlAttributeName("large")]
        public bool Large { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {

            output.TagName = "div";
            var innerDiv = new HtmlTags.DivTag()
                .AddClass("modal-content");
            var middleDiv = new HtmlTags.DivTag()
                .AddClasses("modal-dialog", Large ? "modal-lg" : "")
                .Attr("role", "document");

            output.Attributes.Add("class", "modal fade " + (Large ? "bs-example-modal-lg" : ""));
            output.Attributes.Add("tabIndex", "-1");
            output.Attributes.Add("role", "dialog");
            output.Attributes.Add("aria-hidden", "true");

            output.PreContent.AppendHtml(middleDiv.NoClosingTag());
            output.PreContent.AppendHtml(innerDiv.NoClosingTag());

            output.PostContent.AppendHtml("</div>");
            output.PostContent.AppendHtml("</div>");

        }
    }
}
