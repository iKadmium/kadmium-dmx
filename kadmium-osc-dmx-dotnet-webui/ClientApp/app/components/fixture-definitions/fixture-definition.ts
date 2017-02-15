export class FixtureDefinition implements FixtureDefinitionData
{
    manufacturer: string;
    name: string;
    type: FixtureType;

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];

    constructor()
    {

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
    type: FixtureType;

    channels: DMXChannel[];
    movements: Axis[];
    colorWheel: ColorWheelEntry[];
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