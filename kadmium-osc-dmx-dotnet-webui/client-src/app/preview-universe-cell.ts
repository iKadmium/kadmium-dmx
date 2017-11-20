export class PreviewUniverseCell 
{
    public testing: boolean;

    constructor(private width: number, private height: number, private x: number, private y: number, private address: number, private controlled: boolean)
    {
        this.testing = false;
    }

    public render(context: CanvasRenderingContext2D, value: number): void
    {
        let style = `rgb(255,${255 - value},${255 - value})`;
        context.fillStyle = style;
        context.fillRect(this.x, this.y, this.width, this.height);

        context.font = "12px Monospace";
        context.textAlign = "center";
        context.fillStyle = "black";
        context.fillText((this.address + 1) + "", this.x + this.width / 2, this.y + this.height * 3 / 4);

        if (this.testing)
        {
            context.strokeStyle = "blue";
        }
        else
        {
            context.strokeStyle = this.controlled ? "red" : "black";
        }

        context.strokeRect(this.x, this.y, this.width, this.height);

    }
}
