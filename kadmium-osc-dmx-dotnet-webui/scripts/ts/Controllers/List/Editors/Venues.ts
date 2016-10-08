import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class Venue extends ListControllerData
{
    fixtureCollections: string[];

    constructor()
    {
        super();
        this.fixtureCollections = [];
    }
}

let venueController = new ListController<Venue>(() => new Venue());