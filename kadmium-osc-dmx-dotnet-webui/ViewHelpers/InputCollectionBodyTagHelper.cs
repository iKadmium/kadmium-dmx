using Microsoft.AspNetCore.Razor.TagHelpers;
using System.IO;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    [HtmlTargetElement("input-collection-body", ParentTag = "input-collection")]
    public class InputCollectionBodyTagHelper : TagHelper
    {
        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "div";
            output.Attributes.SetAttribute("class", "panel-body");
            var content = await output.GetChildContentAsync();
            var collectionContext = (InputCollectionContext)context.Items[typeof(InputCollectionTagHelper)];

            TextWriter newContent = new StringWriter();

            var table = new HtmlTags.HtmlTag("table")
                .AddClasses("table", "table-striped");

            var thead = new HtmlTags.HtmlTag("thead");
            var theadRow = new HtmlTags.HtmlTag("tr");

            var tbody = new HtmlTags.HtmlTag("tbody")
                .Attr("data-bind", "foreach: " + collectionContext.Name);
            var tbodyRow = new HtmlTags.HtmlTag("tr");

            newContent.Write(table.NoClosingTag());
            newContent.Write(thead.NoClosingTag());
            newContent.Write(theadRow.NoClosingTag());
            foreach (var contextItem in collectionContext.Items)
            {
                newContent.Write("<th>" + contextItem.Label + "</th>");
            }

            newContent.Write("</tr>");
            newContent.Write("</thead>");

            newContent.Write(tbody.NoClosingTag());
            newContent.Write(tbodyRow.NoClosingTag());

            var enc = NullHtmlEncoder.Create(new System.Text.Encodings.Web.TextEncoderSettings());
            foreach (var contextItem in collectionContext.Items)
            {
                newContent.Write("<td>");

                contextItem.Content.WriteTo(newContent, enc);
                newContent.Write("</td>");
            }

            newContent.Write("</tr>");
            newContent.Write("</tbody>");

            newContent.Write("</table>");

            output.Content.SetHtmlContent(newContent.ToString());
        }
    }
}
