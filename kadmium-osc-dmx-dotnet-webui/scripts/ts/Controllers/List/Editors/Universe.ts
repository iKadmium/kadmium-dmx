import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class Universe extends ListControllerData
{
    transmitters: string[];

    constructor()
    {
        super();
        this.transmitters = [];
    }
}

let universeController = new ListController<Universe>(() => new Universe());