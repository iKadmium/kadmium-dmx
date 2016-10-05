import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface OSCListener extends ControllerData
{
    port: number;
}

export class OSCListenerController extends EditController<OSCListener>
{
    constructor()
    {
        super();
    }   
}

let oscListenerController = new OSCListenerController();