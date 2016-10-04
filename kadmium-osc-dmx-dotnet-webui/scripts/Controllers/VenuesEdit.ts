import {ModalEditor} from "../ModalEditor";

interface VenueData
{
    name: string;
    fixtureCollections: string[];
    [key: string]: any;
}

export class Venue 
{
    modalEditor: ModalEditor<VenueData>;
    
    OnLoad(): void 
    {
        this.modalEditor = new ModalEditor<VenueData>();
    }
}

let venue = new Venue();
window.addEventListener("load", venue.OnLoad);