import { ActiveUniverseQuery_activeUniverse_fixtures, ActiveUniverseQuery_activeUniverse_fixtures_channels } from "generated/ActiveUniverseQuery";

export class DmxDetailRenderer
{
    public static width = 400;
    public static height = 400;
    public static marginX = 5;
    public static marginY = 5;
    public static textHeight = 20;

    public x: number;
    public y: number;

    public selectedFixture: ActiveUniverseQuery_activeUniverse_fixtures;
    public selectedChannel: ActiveUniverseQuery_activeUniverse_fixtures_channels;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    public render(ctx: CanvasRenderingContext2D, data: number[]): void
    {
        ctx.beginPath();
        ctx.strokeStyle = this.getStrokeStyle();
        ctx.rect(this.x, this.y, DmxDetailRenderer.width, DmxDetailRenderer.height);
        ctx.stroke();
        ctx.closePath();

        if (this.selectedFixture || this.selectedChannel)
        {
            let y = this.y + DmxDetailRenderer.marginY;
            let x = this.x + DmxDetailRenderer.marginX;
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.font = `${DmxDetailRenderer.textHeight}px monospace`;

            if (this.selectedFixture)
            {
                ctx.fillText(this.selectedFixture.manufacturer, x, y);
                y += DmxDetailRenderer.textHeight + DmxDetailRenderer.marginY;
                ctx.fillText(this.selectedFixture.model, x, y);
                y += DmxDetailRenderer.textHeight + DmxDetailRenderer.marginY;
                ctx.fillText(`Address: ${this.selectedFixture.address}`, x, y);
                y += DmxDetailRenderer.textHeight + DmxDetailRenderer.marginY;
            }
            if (this.selectedChannel)
            {
                ctx.fillText(`Channel: ${this.selectedChannel.address}`, x, y);
                y += DmxDetailRenderer.textHeight + DmxDetailRenderer.marginY;
                ctx.fillText(this.selectedChannel.name, x, y);
                y += DmxDetailRenderer.textHeight + DmxDetailRenderer.marginY;
                ctx.fillText(`Value: ${data[this.selectedChannel.address - 1]}`, x, y);
                y += DmxDetailRenderer.textHeight + DmxDetailRenderer.marginY;
                if (this.selectedChannel.controlled)
                {
                    ctx.fillText(`Solver-controlled`, x, y);
                }
            }
        }
    }

    private getStrokeStyle(): string
    {
        return 'white';
    }
}