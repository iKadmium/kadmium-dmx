import { FixtureDefinitionSkeleton } from "./fixture-definition";

export interface VenueSkeleton
{
    id: number;
    name: string;
}

export class Venue implements VenueSkeleton
{
    id: number;
    name: string;
    universes: Universe[];

    constructor()
    {
        this.id = 0;
        this.name = "";
        this.universes = [];
    }
}

export class Universe
{
    id: number;
    name: string;
    universeID: number;
    fixtures: Fixture[];

    constructor()
    {
        this.id = 0;
        this.name = "";
        this.universeID = 1;
        this.fixtures = [];
    }
}

export class Fixture
{
    id: number;
    address: number;
    group: string;
    type: FixtureDefinitionSkeleton;
    options: FixtureDefinitionOptions;

    constructor()
    {
        this.address = 1;
        this.group = "";
        this.options = new FixtureDefinitionOptions();
    }
}

export class FixtureDefinitionOptions
{
    maxBrightness: number;
    axisInversions: string[];
    axisRestrictions: AxisRestrictionOptions[];

    constructor()
    {
        this.maxBrightness = 1;
        this.axisInversions = [];
        this.axisRestrictions = [];
    }
}

export class AxisRestrictionOptions
{
    name: string;
    min: number;
    max: number;

    constructor()
    {
        this.name = "";
        this.min = 0;
        this.max = 0;
    }
}