declare let Chart: any;
import {MVC} from "../MVC";

class SACNTransmitterLiveController 
{
    webSocket: WebSocket;
    attributesBody: HTMLTableSectionElement;

    constructor()
    {
        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://").replace("Live", "Socket"));
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let message = JSON.parse(ev.data) as number[];
            for (let address in message)
            {
                let trueAddress = parseInt(address);
                $("#dmx-" + (trueAddress + 1)).text(message[trueAddress]);
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