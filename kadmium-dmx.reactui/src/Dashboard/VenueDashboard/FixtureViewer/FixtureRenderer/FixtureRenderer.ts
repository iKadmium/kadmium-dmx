import { FixtureViewerQuery_activeUniverse_fixtures } from "generated/FixtureViewerQuery";
import { ColorRenderer } from './ColorRenderer/ColorRenderer';
import { RgbColorRenderer } from './ColorRenderer/RGBColorRenderer';
import { RgbwColorRenderer } from './ColorRenderer/RGBWColorRenderer';

export interface IChannelMap
{
    [key: string]: number | null;
}

export class FixtureRenderer
{
    private channelMap: IChannelMap;
    private colorRenderer: ColorRenderer;

    constructor(fixture: FixtureViewerQuery_activeUniverse_fixtures)
    {
        this.channelMap = this.getChannelMap(fixture, ["Red", "Green", "Blue", "White", "Strobe"]);
        if (RgbwColorRenderer.isRgbw(this.channelMap))
        {
            this.colorRenderer = new RgbwColorRenderer(this.channelMap);
        } else if (RgbColorRenderer.isRgb(this.channelMap))
        {
            this.colorRenderer = new RgbColorRenderer(this.channelMap);
        }
    }

    private getChannelMap(fixture: FixtureViewerQuery_activeUniverse_fixtures, channels: string[]): IChannelMap
    {
        const map: IChannelMap = {};
        for (const channelName of channels)
        {
            const channel = fixture.channels.find(x => x.name === channelName);
            if (channel)
            {
                map[channelName] = channel.address - 1;
            }
        }
        return map;
    }

    public render(ctx: CanvasRenderingContext2D, dmx: number[]): void
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = this.colorRenderer.render(dmx);
        ctx.beginPath();
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.closePath();
    }
}