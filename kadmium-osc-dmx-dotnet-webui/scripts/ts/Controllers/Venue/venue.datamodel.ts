export interface VenueData
{
    name: string;
    universes: UniverseData[];
}

export interface UniverseData
{
    name: string;
    transmitters: TransmitterData[];
    fixtures: FixtureData[];
}

export interface FixtureData
{
    type: string;
    channel: number;
    group: string;
    options: FixtureOptionsData;
}

export interface AxisRestrictionData
{
    name: string;
    min: number;
    max: number;
}

export interface FixtureOptionsData
{
    axisRestrictions: AxisRestrictionData[];
    axisInversions: string[];
}

export interface TransmitterData
{
    name: string;
    universeID: number;
}