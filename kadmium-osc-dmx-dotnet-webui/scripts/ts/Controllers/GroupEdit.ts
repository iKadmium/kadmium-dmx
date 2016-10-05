import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface Group extends ControllerData
{
    
}

class GroupController extends EditController<Group>
{
    constructor()
    {
        super();
    }
}

let groupController = new GroupController();