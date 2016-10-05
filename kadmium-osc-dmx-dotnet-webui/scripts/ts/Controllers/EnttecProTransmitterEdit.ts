import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface EnttecProTransmitter extends ControllerData
{
    address: string;
}

export class EnttecProTransmitterController extends EditController<EnttecProTransmitter>
{
    constructor()
    {
        super();
    }
}

let enttecProTransmitterController = new EnttecProTransmitterController();