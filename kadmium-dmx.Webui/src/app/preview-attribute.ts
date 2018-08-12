import { PreviewAttributeData } from "./preview.service";
import { ActiveAttribute } from "api/models";

export class PreviewAttribute
{
    name: string;
    value: number;
    displayMin: number;
    displayMax: number;
    controlled: boolean;
    dmx: boolean;
    address: number;

    constructor()
    {
        this.name = "";
        this.value = 0;
        this.displayMin = 0;
        this.displayMax = 255;
        this.controlled = false;
        this.dmx = true;
    }

    private get range(): number
    {
        return this.displayMax - this.displayMin;
    }

    public set displayValue(value: number)
    {
        if (this.displayMax >= this.displayMin)
        {
            if (value >= this.displayMin && value <= this.displayMax)
            {
                this.value = (value - this.displayMin) / this.range;
            }
        }
        else
        {
            if (value <= this.displayMin && value >= this.displayMax)
            {
                this.value = (value - this.displayMin) / this.range;
            }
        }
    }

    public get displayValue(): number
    {
        let value = (this.value * this.range) + this.displayMin;
        return (this.dmx || this.range > 5) ? Math.round(value) : value;
    }

    public load(data: ActiveAttribute): PreviewAttribute
    {
        this.name = data.name;
        this.value = data.value;
        this.displayMin = data.displayMin;
        this.displayMax = data.displayMax;
        this.dmx = data.dmx;
        this.controlled = data.controlled;
        this.address = data.dmxAddress;
        return this;
    }
}