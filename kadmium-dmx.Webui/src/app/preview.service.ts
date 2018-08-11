import { ColorWheelEntry } from "api/models";

export interface PreviewData
{
    groups: string[];
    universes: PreviewUniverseData[];
}

export interface PreviewUniverseData
{
    name: string;
    universeID: number;
    fixtures: PreviewFixtureData[];
}

export interface PreviewFixtureData
{
    id: number;
    manufacturer: string;
    model: string;
    address: number;
    group: string;
    attributes: PreviewAttributeData[];
    colorWheel: ColorWheelEntry[];
}

export interface PreviewAttributeData
{
    name: string;
    value: number;
    dmxAddress: number;
    displayMin: number;
    displayMax: number;
    controlled: boolean;
    dmx: boolean;
}