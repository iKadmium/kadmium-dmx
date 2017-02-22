import { FixtureDefinition } from "../fixture-definitions/fixture-definition";

export interface PreviewData
{
    groups: string[];
    universes: PreviewUniverseData[];
}

export interface UniverseUpdateData
{
    universe: number;
    values: number[];
}

export interface PreviewUniverseData
{
    name: string;
    fixtures: PreviewFixtureData[];
}

export interface PreviewFixtureData
{
    channel: number;
    definition: FixtureDefinition;
    group: string;
    name: string;
}

