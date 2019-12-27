import { ColorRenderer } from './ColorRenderer';
import { IChannelMap } from '../FixtureRenderer';

export class RgbColorRenderer extends ColorRenderer
{
    public render(dmx: number[]): string
    {
        const red = dmx[this.channelMap["Red"]];
        const green = dmx[this.channelMap["Green"]];
        const blue = dmx[this.channelMap["Blue"]];

        return `rgb(${red}, ${green}, ${blue})`;
    }

    public static isRgb(channelMap: IChannelMap): boolean
    {
        return (channelMap["Red"] != null
            && channelMap["Green"] != null
            && channelMap["Blue"] != null
            && channelMap["White"] == null
        );
    }

}