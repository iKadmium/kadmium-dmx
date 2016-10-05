import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface Universe extends ControllerData
{
    name: string;
    transmitters: string[];
}

export class UniverseController extends EditController<Universe>
{
    constructor()
    {
        super();
    }
}

let universeController = new UniverseController();