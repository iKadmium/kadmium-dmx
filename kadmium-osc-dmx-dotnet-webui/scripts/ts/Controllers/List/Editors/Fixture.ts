import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";
import {ModalEditorCollection} from "../ModalEditorCollection";

export class Fixture extends ListControllerData
{
    type: string;
    channels: DMXChannel[];
    movements: FixtureAxis[];

    constructor()
    {
        super();
        this.type = "LED";
        this.channels = [];
        this.movements = [];
    }
}

class DMXChannel
{
    name: string;
    dmx: number;
    min: number;
    max: number;

    constructor()
    {
        
    }
}

class FixtureAxis
{
    name: string;
    min: number;
    max: number;

    constructor()
    {
    }
}

class FixtureController extends ListController<Fixture>
{
    constructor()
    {
        super(() => new Fixture());
        window.addEventListener("load", (ev) => 
        {
            $("#channels-add").off("click");
            $("#channels-add").on("click", FixtureController.addChannelClick);
        });
    }

    static addChannelClick(event: JQueryEventObject): void
    {
        let newChannel = ModalEditorCollection.itemAdd("channels");

        let dmxMax = 0;
        let dmxInputs = $("#channels").children().not(".collection-prototype").children().children("#dmx");
        if (dmxInputs.length > 1) {
            let dmxValues = dmxInputs.map((index, element) => parseInt((element as HTMLInputElement).value)) as any;
            dmxMax = Math.max(...dmxValues);
        }
        newChannel.children().children("#dmx").val(dmxMax + 1);
    }
}

let fixtureController = new FixtureController();
