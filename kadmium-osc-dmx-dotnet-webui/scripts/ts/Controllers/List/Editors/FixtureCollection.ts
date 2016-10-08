import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class FixtureCollection extends ListControllerData
{
    universe: string;
    fixtures: FixtureDefinition[];

    constructor()
    {
        super();
        this.universe = "";
        this.fixtures = [];
    }
}

class FixtureDefinition
{
    startChannel: Number;
    type: string;
    group: string;
    options: string;

    constructor()
    {
        
    }
}

let fixtureCollection = new ListController<FixtureCollection>(() => new FixtureCollection());