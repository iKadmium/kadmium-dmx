import { ColorWheelEntry } from "./fixture-definition";
import { PreviewChannel } from "./preview-channel";
import { RGB } from "./color";

export class PreviewColorWheel
{
    entries: ColorWheelEntry[];
    chanel: PreviewChannel;

    constructor(entries: ColorWheelEntry[], channel: PreviewChannel)
    {
        this.entries = entries;
        this.chanel = channel;
    }

    public get fillStyle(): RGB
    {
        let dmxValue = this.chanel.dmxValue;
        let filtered = this.entries.filter(entry => entry.min <= dmxValue && entry.max >= dmxValue);
        if (filtered.length == 1)
        {
            return RGB.parse(filtered[0].color);
        }
        else
        {
            return new RGB(0, 0, 0);
        }
    }
}