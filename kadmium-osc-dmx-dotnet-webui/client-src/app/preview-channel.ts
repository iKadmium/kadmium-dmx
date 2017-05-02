import { DMXChannel } from "./fixture-definition";

export class PreviewChannel extends DMXChannel
{
    value: number;
    constructor(name: string, dmx: number, min: number, max: number)
    {
        super(name, dmx, min, max);
        this.value = 0;
    }

    private get range(): number
    {
        return this.max - this.min;
    }

    public set dmxValue(value: number)
    {
        if (this.max >= this.min)
        {
            if (value >= this.min && value <= this.max)
            {
                this.value = (value - this.min) / this.range;
            }
        }
        else
        {
            if (value <= this.min && value >= this.max)
            {
                this.value = (value - this.min) / this.range;
            }
        }
    }

    public get dmxValue(): number
    {
        return (this.value * this.range) + this.min;
    }

    static load(channel: DMXChannel)
    {
        return new DMXChannel(channel.name, channel.address, channel.min, channel.max);
    }
}