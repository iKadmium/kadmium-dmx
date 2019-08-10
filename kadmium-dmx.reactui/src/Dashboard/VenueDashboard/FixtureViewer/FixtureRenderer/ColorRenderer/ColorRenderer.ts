import { IChannelMap } from '../FixtureRenderer';

export abstract class ColorRenderer
{
    protected channelMap: IChannelMap;

    constructor(channelMap: IChannelMap)
    {
        this.channelMap = channelMap;
    }

    public abstract render(dmx: number[]): string;
}