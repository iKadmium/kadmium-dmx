import {DMXUniverse} from "./Preview/DMXUniverse";
import {DMXFixture} from "./Preview/DMXFixture";
import {MVC} from "./MVC";

class Preview2DController
{
    socket: WebSocket;
    universe: DMXUniverse;

    constructor()
    {
        this.socket = new WebSocket(MVC.getActionURL("Preview", "Socket", null).replace("http", "ws"));
        this.universe = new DMXUniverse();

        let that = this;
        this.socket.addEventListener("message", (message: MessageEvent) =>
        {
            let data = JSON.parse(message.data) as number[];
            that.universe.render(data);

            for (let fixture of that.universe.fixtures)
            {
                let canvas = $("#canvas-" + fixture.address)[0] as HTMLCanvasElement;
                let ctx = canvas.getContext("2d");
                Preview2DController.draw(fixture, data, canvas, ctx);
            }
        });
    }

    static draw(fixture: DMXFixture, data: number[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) : void
    {
        Preview2DController.drawFill(fixture, canvas, ctx);
        Preview2DController.drawMovements(fixture, canvas, ctx);
        Preview2DController.drawText(fixture, data);
    }

    static drawFill(fixture: DMXFixture, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void
    {
        let fillStyle = "rgb( " + fixture.red + ", " + fixture.green + ", " + fixture.blue + ")";

        ctx.fillStyle = fillStyle;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = DMXFixture.invertColor(fixture.red, fixture.green, fixture.blue);
    }

    static drawMovements(fixture: DMXFixture, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void
    {
        if (fixture.pan != null)
        {
            let value = fixture.pan;
            let x = canvas.width * value;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.closePath();
            ctx.stroke();
        }
        if (fixture.tilt != null)
        {
            let value = fixture.tilt;
            let y = canvas.height * value;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    static drawText(fixture: DMXFixture, data: number[]): void
    {
        for (let channelName in fixture.channels)
        {
            let channel = fixture.channels[channelName];
            let span = $("#channel-" + (channel.address + 1));
            span.text(data[channel.address]);
        }
    }
}

let preview2DController: Preview2DController;
window.addEventListener("load", (ev: Event) =>
{
    preview2DController = new Preview2DController();
});