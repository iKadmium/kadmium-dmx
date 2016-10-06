declare let Chart:any;
import {MVC} from "../MVC";

interface OSCListenerLogMessage
{
    group: string;
    attribute: string;
    value: number;
}

class OSCListenerLogController 
{
    chart: any;
    webSocket: WebSocket;
    attributesBody: HTMLTableSectionElement;

    constructor()
    {
        let canvas = $("#myChart")[0] as HTMLCanvasElement;
        let ctx = canvas.getContext("2d");
        this.chart = new Chart(ctx,
        {
            type: "line",
            data: {
                datasets: [{
                    data: [{ x: 0, y: 10 }, { x: 10, y: 15 }, { x: 15, y: 12 }],
                    backgroundColor: ["rgba(255, 0, 0, 0.2)"],
                    borderColor: ["rgba(255, 0, 0, 1)"]
                }]
            },
            options:
            {
                scales:
                {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://").replace("Log", "Socket"));
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

let oscListenerLogController: OSCListenerLogController;
window.addEventListener("load", (ev: Event) =>
{
    oscListenerLogController = new OSCListenerLogController();
});