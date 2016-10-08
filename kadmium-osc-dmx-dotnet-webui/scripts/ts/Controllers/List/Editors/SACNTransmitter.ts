import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class SACNTransmitter extends ListControllerData
{
    description: string;
    universeID: number;
    delay: number;

    constructor()
    {
        super();
        this.description = "";
        this.universeID = 0;
        this.delay = 0;
    }
}

let sacnTransmitterController = new ListController<SACNTransmitter>(() => new SACNTransmitter());