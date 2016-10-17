class AxisRestriction implements AxisRestrictionData
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

class FixtureOptions implements FixtureOptionsData
{
    axisRestrictions: AxisRestriction[];
    axisInversions: string[];
    constructor()
    {
        this.axisRestrictions = [];
        this.axisInversions = [];
    }
}

class Fixture implements FixtureData
{
    type: string;
    channel: number;
    group: string;
    options: FixtureOptions;
    
    constructor()
    {
        this.type = "";
        this.channel = 1;
        this.group = "";
        this.options = new FixtureOptions();
    }
}

class Transmitter implements TransmitterData
{
    name: string;
    universeID: number;
    
    constructor()
    {
        this.name = "";
        this.universeID = 1;
    }
}

class Universe implements UniverseData
{
    name: string;
    transmitters: Transmitter[];
    fixtures: Fixture[];
    
    constructor()
    {
        this.name = "";
        this.transmitters = [];
        this.fixtures = [];
    }
}

class Venue implements VenueData
{
    universes: Universe[];
    name: string;

    constructor()
    {
        this.name = "";
        this.universes = [];
    }
}