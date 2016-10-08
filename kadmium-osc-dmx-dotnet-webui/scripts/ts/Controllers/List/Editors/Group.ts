import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class Group extends ListControllerData
{
    constructor()
    {
        super();
    }
}

let groupController = new ListController<Group>(() => new Group);