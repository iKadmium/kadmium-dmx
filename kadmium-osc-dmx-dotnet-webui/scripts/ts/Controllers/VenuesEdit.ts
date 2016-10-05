import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface Venue extends ControllerData
{
    fixtureCollections: string[];
}

export class VenueController extends EditController<Venue>
{
    constructor()
    {
        super();
    }
}

let venueController = new VenueController();