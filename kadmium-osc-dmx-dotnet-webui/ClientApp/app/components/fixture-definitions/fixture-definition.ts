export class FixtureDefinition implements FixtureDefinitionData
{
    manufacturer: string;
    name: string;
    type: "LED" | "Tungsten" | "Effect";

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];

    constructor()
    {
        this.name = "";
        this.manufacturer = "";
        this.type = "LED";
        this.channels = [];
        this.movements = [];
        this.colorWheel = [];
    }

    static load(data: FixtureDefinitionData): FixtureDefinition
    {
        let definition = new FixtureDefinition();
        Object.assign(definition, data);
        return definition;
    }
}

export interface FixtureDefinitionData
{
    manufacturer: string;
    name: string;
    type: "LED" | "Tungsten" | "Effect";

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];
}

export class FixtureDefinitionSkeleton
{
    public manufacturer: string;
    public model: string;
}

export class DMXChannel
{
    name: string;
    dmx: number;
    min: number;
    max: number;

    constructor(name?: string, dmx?: number, min?: number, max?: number)
    {
        this.name = name ? name : "";
        this.dmx = dmx ? dmx : 1;
        this.min = min ? min : 0;
        this.max = max ? max : 255;
    }
}

export class Axis
{
    name: string;
    min: number;
    max: number;
}

export class ColorWheelEntry
{
    name: string;
    dmxStart: number;
    dmxEnd: number;
    color: string;

    constructor(name?: string, dmxStart?: number, dmxEnd?: number, color?: string)
    {
        this.name = name ? name : "";
        this.dmxStart = dmxStart ? dmxStart : 0;
        this.dmxEnd = dmxEnd ? dmxEnd : 255;
        this.color = color ? color : "000000";
    }
}