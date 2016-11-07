using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("input-label")]
    public class LabelTagHelper : TagHelper
    {
        public string Label { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            var content = await output.GetChildContentAsync();
            output.TagName = "div";
            output.Attributes.SetAttribute("class", "form-group clearfix");

            var label = new HtmlTags.HtmlTag("label")
                .AddClasses("control-label", "col-sm-2")
                .Text(Label);
            
            var innerDiv = new HtmlTags.DivTag()
                .AddClass("col-sm-10");

            TextWriter writer = new StringWriter();

            writer.WriteLine(label.ToHtmlString());
            writer.WriteLine(innerDiv.NoClosingTag().ToHtmlString());
            content.WriteTo(writer, NullHtmlEncoder.Create());
            writer.WriteLine("</div>");

            output.Content.SetHtmlContent(writer.ToString());

        }
    }
}
