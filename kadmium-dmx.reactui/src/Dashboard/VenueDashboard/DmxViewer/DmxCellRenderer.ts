import { DmxChannelControlStatus } from "./DmxChannelControlStatus";

export class DmxCellRenderer
{
    public address: number; // this is the logical address, not the index address, and starts at 1
    public selected: boolean;
    private x: number;
    private y: number;
    private controlStatus: DmxChannelControlStatus;

    public static cellWidth = 40;
    public static cellHeight = 20;

    public static cellMarginX = 5;
    public static cellMarginY = 5;

    constructor(address: number, x: number, y: number, controlStatus: DmxChannelControlStatus)
    {
        this.address = address;
        this.x = x;
        this.y = y;
        this.controlStatus = controlStatus;
        this.selected = false;
    }

    public render(ctx: CanvasRenderingContext2D, value: number): void
    {
        ctx.beginPath();
        ctx.strokeStyle = this.getStrokeStyle();
        ctx.rect(this.x, this.y, DmxCellRenderer.cellWidth, DmxCellRenderer.cellHeight);
        ctx.fillStyle = this.getBackground(value);
        ctx.fillRect(this.x, this.y, DmxCellRenderer.cellWidth, DmxCellRenderer.cellHeight);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillText(
            this.address.toString(),
            this.x + (DmxCellRenderer.cellWidth / 2),
            this.y + (DmxCellRenderer.cellHeight / 2) + (DmxCellRenderer.cellMarginY / 2),
            DmxCellRenderer.cellWidth
        );
        ctx.closePath();
    }

    private getBackground(value: number): string
    {
        const background = `rgb(0,${value},0`;
        return background;
    }

    private getStrokeStyle(): string
    {
        if (this.selected)
        {
            return 'white';
        }
        else
        {
            switch (this.controlStatus)
            {
                case DmxChannelControlStatus.Known:
                    return "#00FF00";
                case DmxChannelControlStatus.Controlled:
                    return "#0000FF";
                case DmxChannelControlStatus.Unknown:
                    return "#FF0000";
            }
        }
    }

}