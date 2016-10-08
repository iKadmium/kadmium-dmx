import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class EnttecProTransmitter extends ListControllerData
{
    address: string;

    constructor()
    {
        super();
        this.address = "";
    }
}

let enttecProTransmitterController = new ListController<EnttecProTransmitter>(() => new EnttecProTransmitter());