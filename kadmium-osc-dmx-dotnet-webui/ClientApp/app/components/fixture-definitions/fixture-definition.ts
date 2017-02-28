export class FixtureDefinition implements FixtureDefinitionData
{
    manufacturer: string;
    name: string;
    type: "LED" | "Tungsten" | "Effect";

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];
    beamAngle: number;
    lux: number;

    constructor()
    {
        this.name = "";
        this.manufacturer = "";
        this.type = "LED";
        this.channels = [];
        this.movements = [];
        this.colorWheel = [];
        this.beamAngle = 30;
        this.lux = 4000;
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
    min: number;
    max: number;
    color: string;

    constructor(name?: string, dmxStart?: number, dmxEnd?: number, color?: string)
    {
        this.name = name ? name : "";
        this.min = dmxStart ? dmxStart : 0;
        this.max = dmxEnd ? dmxEnd : 255;
        this.color = color ? color : "000000";
    }
}