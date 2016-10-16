import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class OSCListener extends ListController
{
    port: number;

    constructor()
    {
        super();
        this.port = 9000;
    }

    fillInputBoxes(data: any): void
    {
    }

    getDataFromInputBoxes(): void
    {
    }
}

let oscListenerController = new ListController<OSCListener>(new OSCListener());