import { ColorRenderer } from './ColorRenderer';
import { IChannelMap } from '../FixtureRenderer';

export class RgbwColorRenderer extends ColorRenderer
{
    public render(dmx: number[]): string
    {
        const white = dmx[this.channelMap["White"]];
        const red = dmx[this.channelMap["Red"]] + white;
        const green = dmx[this.channelMap["Green"]] + white;
        const blue = dmx[this.channelMap["Blue"]] + white;

        return `rgb(${red}, ${green}, ${blue})`;
    }

    public static isRgbw(channelMap: IChannelMap): boolean
    {
        return (channelMap["Red"] != null
            && channelMap["Green"] != null
            && channelMap["Blue"] != null
            && channelMap["White"] != null
        );
    }

}