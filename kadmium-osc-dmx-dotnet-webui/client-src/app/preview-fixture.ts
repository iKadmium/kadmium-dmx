
import { FixtureDefinition } from "./fixture-definition";
import { PreviewColorWheel } from "./preview-color-wheel";
import { PreviewAttribute } from "./preview-attribute";
import { RGB } from "./color";
import { PreviewFixtureData } from "./preview.service";

export class PreviewFixture
{
    id: number;
    group: string;

    address: number;

    channelNameMap: Map<string, PreviewAttribute>;
    channelNumberMap: Map<number, PreviewAttribute[]>;

    manufacturer: string;
    model: string;

    colorWheel: PreviewColorWheel;

    constructor(data: PreviewFixtureData)
    {
        this.id = data.id;
        this.group = data.group;
        this.address = data.address;
        this.manufacturer = data.manufacturer;
        this.model = data.model;

        this.channelNameMap = new Map<string, PreviewAttribute>();
        this.channelNumberMap = new Map<number, PreviewAttribute[]>();

        for (let attributeData of data.attributes)
        {
            let attribute = new PreviewAttribute();
            attribute.load(attributeData);
            this.channelNameMap.set(attribute.name, attribute);
            if (attributeData.dmx)
            {
                let array = this.channelNumberMap.get(attribute.address);
                if (array == null)
                {
                    array = [];
                    this.channelNumberMap.set(attribute.address + data.address - 2, array);
                }
                array.push(attribute);
            }
        }

        if (data.colorWheel != null)
        {
            this.colorWheel = new PreviewColorWheel(data.colorWheel, this.channelNameMap.get("ColorWheel"));
        }
    }

    public update(data: number[]): void
    {
        let addresses = Array.from(this.channelNumberMap.values());
        for (let address of addresses)
        {
            for (let channel of address)
            {
                let address = channel.address + this.address - 2;
                channel.dmxValue = data[address];
            }
        }
    }

    private get white(): number
    {
        return this.optionalGetValue("White") * this.optionalGetValue("Master", 1);
    }

    private get red(): number
    {
        return this.optionalGetValue("Red") * this.optionalGetValue("Master", 1);
    }

    private get green(): number
    {
        return this.optionalGetValue("Green") * this.optionalGetValue("Master", 1);
    }

    private get blue(): number
    {
        return this.optionalGetValue("Blue") * this.optionalGetValue("Master", 1);
    }

    private get isRGB(): boolean
    {
        return this.channelNameMap.get("Red") != null && this.channelNameMap.get("Green") != null && this.channelNameMap.get("Blue") != null;
    }

    private get isRGBW(): boolean
    {
        return this.isRGB && this.channelNameMap.get("White") != null;
    }

    private get isColorWheel(): boolean
    {
        return this.channelNameMap.get("ColorWheel") != null;
    }

    public get fillStyle(): string
    {
        let ms = Date.now() % 50;

        if (this.optionalGetValue("Strobe") > 0 && ms > 25)
        {
            return "black";
        }
        else
        {
            if (this.isRGBW)
            {
                return `rgb(${this.red * 255 + this.white * 255}, ${this.green * 255 + this.white * 255}, ${this.blue * 255 + this.white * 255}`;
            }
            else if (this.isRGB)
            {
                return `rgb(${this.red * 255}, ${this.green * 255}, ${this.blue * 255}`;
            }
            else if (this.isColorWheel)
            {
                let color = this.colorWheel.fillStyle;
                let master = this.optionalGetValue("Master", 1);
                return `rgb(${color.r * master}, ${color.g * master}, ${color.b * master})`;
            }
        }
    }

    public get strokeStyle(): string
    {
        let stroke = new RGB(this.red * 255, this.green * 255, this.blue * 255).invert();
        return stroke.toString();
    }

    public get pan(): number | null
    {
        if (this.channelNameMap.get("PanCoarse") != null)
        {
            return this.channelNameMap.get("PanCoarse").value;
        }
        if (this.channelNameMap.get("Pan") != null)
        {
            return this.channelNameMap.get("Pan").value;
        }
        return null;
    }

    public get tilt(): number | null
    {
        if (this.channelNameMap.get("TiltCoarse") != null)
        {
            return this.channelNameMap.get("TiltCoarse").value;
        }
        if (this.channelNameMap.get("Tilt") != null)
        {
            return this.channelNameMap.get("Tilt").value;
        }
        return null;
    }

    optionalGetValue(name: string, defaultValue?: number): number
    {
        defaultValue = defaultValue || 0;
        let channel = this.channelNameMap.get(name);
        return channel ? channel.value : defaultValue;
    }
}