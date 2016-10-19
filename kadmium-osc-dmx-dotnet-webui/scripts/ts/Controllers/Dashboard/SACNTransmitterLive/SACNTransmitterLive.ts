import {MVC} from "../../MVC";

class SACNTransmitterLiveController 
{
    webSocket: WebSocket;
    attributesBody: HTMLTableSectionElement;
    cache: number[];

    constructor()
    {
        this.cache = new Array<number>(512);
        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://").replace("Live", "Socket"));
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let message = JSON.parse(ev.data) as number[];
            for (let address in message)
            {
                let trueAddress = parseInt(address);
                let value = message[trueAddress];
                if (this.cache[trueAddress] != value)
                {
                    this.cache[trueAddress] = value;
                    let cell = $("#dmx-" + (trueAddress + 1));
                    cell.text(value);
                    cell.css("background-color", "rgb(255, " + (255 - value) + ", " + (255 - value) + ")");
                }
            }
        });

        this.attributesBody = $("#dmx")[0] as HTMLTableSectionElement;
    }
}


let sacnTransmitterLiveController: SACNTransmitterLiveController;
window.addEventListener("load", (ev: Event) =>
{
    sacnTransmitterLiveController = new SACNTransmitterLiveController();
});