
import { FixtureDefinition } from "./fixture-definition";
import { PreviewColorWheel } from "./preview-color-wheel";
import { PreviewChannel } from "./preview-channel";
import { RGB } from "./color";
import { PreviewFixtureData } from "./preview.service";

export class PreviewFixture implements PreviewFixtureData
{
    definition: FixtureDefinition;
    group: string;

    address: number;
    expanded: boolean;

    channels: PreviewChannel[];
    channelNameMap: Map<string, PreviewChannel>;
    channelNumberMap: Map<number, PreviewChannel[]>;

    colorWheel: PreviewColorWheel;

    constructor(data: PreviewFixtureData)
    {
        this.group = data.group;
        this.address = data.address;
        this.expanded = false;
        this.channelNameMap = new Map<string, PreviewChannel>();
        this.channelNumberMap = new Map<number, PreviewChannel[]>();
        this.definition = data.definition;
        this.channels = [];

        for (let channel of data.definition.channels)
        {
            let dmxChannel = new PreviewChannel(channel.name, channel.address, channel.min, channel.max);
            this.channels.push(dmxChannel);
            this.channelNameMap.set(dmxChannel.name, dmxChannel);
            let array = this.channelNumberMap.get(dmxChannel.address);
            if (array == null)
            {
                array = [];
                this.channelNumberMap.set(dmxChannel.address + data.address - 2, array);
            }
            array.push(dmxChannel);
        }

        if (data.definition.colorWheel != null)
        {
            this.colorWheel = new PreviewColorWheel(data.definition.colorWheel, this.channelNameMap.get("ColorWheel"));
        }
    }

    public update(data: number[]): void
    {
        for (let channel of this.channels)
        {
            let address = channel.address + this.address - 2;
            channel.dmxValue = data[address];
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