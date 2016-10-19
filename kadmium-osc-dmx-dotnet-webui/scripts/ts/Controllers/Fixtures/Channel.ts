import * as ko from "knockout";

export interface ChannelData
{
    name: string;
    dmx: number;
    min: number;
    max: number;
}

export class ChannelViewModel
{
    name: KnockoutObservable<string>;
    dmx: KnockoutObservable<number>;
    min: KnockoutObservable<number>;
    max: KnockoutObservable<number>;

    constructor(channel: number = 1)
    {
        this.name = ko.observable<string>();
        this.dmx = ko.observable<number>(channel);
        this.min = ko.observable<number>(0);
        this.max = ko.observable<number>(255);
    }

    static load(data: ChannelData): ChannelViewModel
    {
        let item = new ChannelViewModel();
        item.name(data.name);
        item.dmx(data.dmx);
        item.min(data.min);
        item.max(data.max);
        return item;
    }

    serialize(): ChannelData
    {
        let item: ChannelData = {
            name: this.name(),
            dmx: parseInt(this.dmx() as any),
            min: parseInt(this.min() as any),
            max: parseInt(this.max() as any)
        };
        return item;
    }
}