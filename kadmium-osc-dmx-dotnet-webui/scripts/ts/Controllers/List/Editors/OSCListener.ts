import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class OSCListener extends ListControllerData
{
    port: number;

    constructor()
    {
        super();
        this.port = 9000;
    }
}

let oscListenerController = new ListController<OSCListener>(() => new OSCListener());