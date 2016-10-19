class RawDMXController
{
    webSocket: WebSocket;
    channelsBody: HTMLTableSectionElement;

    constructor()
    {
        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://") + "/Socket");
        this.webSocket.addEventListener("message", (ev: MessageEvent) => 
        {
            //
        });

        let that = this;
        this.channelsBody = $("#channels-body")[0] as HTMLTableSectionElement;
        $(this.channelsBody).find("tr").each((index: number, elem: Element) =>
        {
            let tr = elem as HTMLTableRowElement;
            let range = $(tr).find("input[type=range]")[0] as HTMLInputElement;
            let num = $(tr).find("input[type=number]")[0] as HTMLInputElement;
            let channel = $(tr).data("channel") as number;
            $(range).on("input", (eventObject: JQueryEventObject, ...args: any[]) => 
            {
                num.value = range.value;
                that.webSocket.send(RawDMXController.createJSONString(channel, parseInt(range.value)));
            });
            $(num).on("input", (eventObject: JQueryEventObject, ...args: any[]) => 
            {
                range.value = num.value;
                that.webSocket.send(RawDMXController.createJSONString(channel, parseInt(num.value)));
            });
        });
    }
    
    static createJSONString(channel: number, value: number)
    {
        let obj = { universe: $("#universe").val(), channel: channel, value: value };
        return JSON.stringify(obj);
    }


}

let rawDMXController: RawDMXController;
window.addEventListener("load", (ev: Event) =>
{
    rawDMXController = new RawDMXController();
});