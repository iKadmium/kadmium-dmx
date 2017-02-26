import { ColorWheelEntry } from "../fixture-definitions/fixture-definition";
import { DMXPreviewChannel } from "./DMXPreviewChannel";
import { RGB } from "./Color";

export class DMXColorWheel
{
    entries: ColorWheelEntry[];
    chanel: DMXPreviewChannel;

    constructor(entries: ColorWheelEntry[], channel: DMXPreviewChannel)
    {
        this.entries = entries;
        this.chanel = channel;
    }

    public get fillStyle(): RGB
    {
        let dmxValue = this.chanel.dmxValue;
        let filtered = this.entries.filter(entry => entry.min <= dmxValue && entry.max >= dmxValue);
        if(filtered.length == 1)
        {
            return RGB.parse(filtered[0].color);
        }
        else
        {
            return new RGB(0, 0, 0);
        }
    }
}