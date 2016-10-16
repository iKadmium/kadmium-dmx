import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class FixtureCollection extends ListController
{
    fixtures: FixtureDefinition[];

    constructor()
    {
        super();
        this.fixtures = [];
    }

    fillInputBoxes(data: any): void
    {
    }

    getDataFromInputBoxes(): void
    {
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

let fixtureCollection = new ListController<FixtureCollection>(new FixtureCollection());