import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

class EnttecProTransmitter extends ListController
{
    address: string;

    constructor()
    {
        super();
        this.address = "";
    }

    fillInputBoxes(data: any): void
    {
    }

    getDataFromInputBoxes(): void
    {
    }
}

let enttecProTransmitterController = new ListController<EnttecProTransmitter>(new EnttecProTransmitter());