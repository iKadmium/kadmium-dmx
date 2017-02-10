export class FixtureDefinition
{
    private manufacturer: string;
    private name: string;
    private type: FixtureType;

    private channels: DMXChannel[];
    private movements: Axis[];
    private colorWheel: ColorWheelEntry[];
}

export class FixtureDefinitionSkeleton
{
    public manufacturer: string;
    public model: string;
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
    dmx: number;
    min: number;
    max: number;
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
}