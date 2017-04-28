export class FixtureDefinitionSkeleton
{
    public id: number;
    public manufacturer: string;
    public model: string;
}

export class FixtureDefinition implements FixtureDefinitionData
{
    id: number;
    manufacturer: string;
    model: string;
    type: FixtureType;

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];
    beamAngle: number;
    lux: number;

    constructor()
    {
        this.model = "";
        this.manufacturer = "";
        this.type = FixtureType.LED;
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
    id: number;
    manufacturer: string;
    model: string;
    type: FixtureType;

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];
}

export enum FixtureType
{
    LED,
    Tungsten,
    Effect
}

export class DMXChannel
{
    name: string;
    address: number;
    min: number;
    max: number;

    constructor(name?: string, dmx?: number, min?: number, max?: number)
    {
        this.name = name != null ? name : "";
        this.address = dmx != null ? dmx : 1;
        this.min = min != null ? min : 0;
        this.max = max != null ? max : 255;
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