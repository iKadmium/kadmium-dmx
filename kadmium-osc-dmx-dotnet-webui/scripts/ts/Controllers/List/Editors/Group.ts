import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class Group extends ListController
{
    constructor()
    {
        super();
    }

    fillInputBoxes(data: any): void
    {
    }

    getDataFromInputBoxes(): void
    {
    }
}

let groupController = new ListController<Group>(new Group);