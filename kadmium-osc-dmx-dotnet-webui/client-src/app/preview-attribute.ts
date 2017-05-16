import { PreviewAttributeData } from "app/preview.service";

export class PreviewAttribute
{
    name: string;
    value: number;
    dmxMin: number;
    dmxMax: number;
    controlled: boolean;
    dmx: boolean;
    address: number;

    constructor()
    {
        this.name = "";
        this.value = 0;
        this.dmxMin = 0;
        this.dmxMax = 255;
        this.controlled = false;
        this.dmx = true;
    }

    private get range(): number
    {
        return this.dmxMax - this.dmxMin;
    }

    public set dmxValue(value: number)
    {
        if (this.dmxMax >= this.dmxMin)
        {
            if (value >= this.dmxMin && value <= this.dmxMax)
            {
                this.value = (value - this.dmxMin) / this.range;
            }
        }
        else
        {
            if (value <= this.dmxMin && value >= this.dmxMax)
            {
                this.value = (value - this.dmxMin) / this.range;
            }
        }
    }

    public get dmxValue(): number
    {
        return (this.value * this.range) + this.dmxMin;
    }

    public load(data: PreviewAttributeData): void
    {
        this.name = data.name;
        this.value = data.value;
        this.dmxMin = data.dmxMin;
        this.dmxMax = data.dmxMax;
        this.dmx = data.dmx;
        this.controlled = data.controlled;
        this.address = data.dmxAddress;
    }
}