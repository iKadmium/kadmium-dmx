import {ControllerData} from "../ModalEditor";
import {EditController} from "./EditController";

interface FixtureCollection extends ControllerData
{
    fixtures: FixtureDefinition[];
}

interface FixtureDefinition
{
    startChannel: Number;
    type: string;
    group: string;
    options: string;
}

export class FixtureCollectionController extends EditController<FixtureCollection>
{
    constructor()
    {
        super();
    }
}

let fixtureCollection = new FixtureCollectionController();