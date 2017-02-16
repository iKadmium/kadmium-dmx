import { FixtureDefinitionSkeleton } from "../fixture-definitions/fixture-definition";

export class Venue
{
    name: string;
    universes: Universe[];

    constructor()
    {
        this.name = "";
        this.universes = [];
    }
}

export class Universe
{
    name: string;
    universeID: number;
    fixtures: Fixture[];

    constructor()
    {
        this.name = "";
        this.universeID = 1;
        this.fixtures = [];
    }
}

export class Fixture
{
    channel: number;
    group: string;
    type: FixtureDefinitionSkeleton;
    options: FixtureDefinitionOptions;

    constructor()
    {
        this.channel = 1;
        this.group = "";
        this.type = new FixtureDefinitionSkeleton();
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