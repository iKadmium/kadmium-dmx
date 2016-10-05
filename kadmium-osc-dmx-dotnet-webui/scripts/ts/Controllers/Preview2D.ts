import {DMXUniverse} from "./Preview/DMXUniverse";

class Preview2DController
{
    socket: WebSocket;
    universe: DMXUniverse;

    constructor()
    {
        this.socket = new WebSocket(document.URL.replace("http://", "ws://") + "/Socket");
        this.universe = new DMXUniverse();

        let that = this;
        this.socket.addEventListener("message", (message: MessageEvent) =>
        {
            let data = JSON.parse(message.data) as number[];
            that.universe.render(data);
        });
    }
}

let preview2DController: Preview2DController;
window.addEventListener("load", (ev: Event) =>
{
    preview2DController = new Preview2DController();
});