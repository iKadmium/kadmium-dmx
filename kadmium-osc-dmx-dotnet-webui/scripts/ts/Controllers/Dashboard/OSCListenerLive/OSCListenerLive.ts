import {MVC} from "../../MVC";

interface OSCListenerLogMessage
{
    group: string;
    attribute: string;
    value: number;
}

class OSCListenerLiveController 
{
    webSocket: WebSocket;
    attributesBody: HTMLTableSectionElement;

    constructor()
    {
        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://").replace("Live", "Socket"));
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let message = JSON.parse(ev.data) as OSCListenerLogMessage;
            this.setAttribute(message.group, message.attribute, message.value);
        });

        this.attributesBody = $("#attributes")[0] as HTMLTableSectionElement;
    }

    setAttribute(group: string, attribute: string, value: number)
    {
        let rows = $(this.attributesBody).children("tr");
        let rowQuery = rows.filter((index, element) => 
        {
            let thisGroup = $(element).children(".attributes-group").text();
            let thisAttribute = $(element).children(".attributes-attribute").text();
            let thisValue = parseFloat($(element).children(".attributes-value").text());
            return thisGroup == group && thisAttribute == attribute;
        });
        let row = rowQuery[0] as HTMLTableRowElement;
        let valueCell = $(row).children(".attributes-value")[0];
        if (valueCell != null)
        {
            valueCell.innerText = value.toFixed(2);
            $(valueCell).css("background-color", "rgba(255, 0, 0, " + value + ")");
        }
    }
}

let oscListenerLogController: OSCListenerLiveController;
window.addEventListener("load", (ev: Event) =>
{
    oscListenerLogController = new OSCListenerLiveController();
});