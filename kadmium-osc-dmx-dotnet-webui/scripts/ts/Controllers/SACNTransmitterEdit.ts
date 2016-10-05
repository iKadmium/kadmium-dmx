import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface SACNTransmitter extends ControllerData
{
    description: string;
    universeID: number;
    delay: number;
}

export class SACNTransmitterController extends EditController<SACNTransmitter>
{
    constructor()
    {
        super();
    }
}

let sacnTransmitterController = new SACNTransmitterController();