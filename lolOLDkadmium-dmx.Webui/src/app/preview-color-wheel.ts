import { PreviewAttribute } from "./preview-attribute";
import { RGB } from "./color";
import { ColorWheelEntry } from "api/models";

export class PreviewColorWheel
{
    entries: ColorWheelEntry[];
    chanel: PreviewAttribute;

    constructor(entries: ColorWheelEntry[], channel: PreviewAttribute)
    {
        this.entries = entries;
        this.chanel = channel;
    }

    public get fillStyle(): RGB
    {
        let dmxValue = this.chanel.displayValue;
        let filtered = this.entries.filter(entry => entry.min <= dmxValue && entry.max >= dmxValue);
        if (filtered.length == 1)
        {
            return RGB.parse(filtered[0].colorString);
        }
        else
        {
            return new RGB(0, 0, 0);
        }
    }
}