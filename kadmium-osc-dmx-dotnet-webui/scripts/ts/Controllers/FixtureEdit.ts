// <reference path="jquery.d.ts" />
import {ControllerData, ModalEditor} from "../ModalEditor";
import {EditController} from "./EditController";

export interface Fixture extends ControllerData
{
    name: string,
    type: string,
    channels: DMXChannel[],
    movements: FixtureAxis[]
}

interface DMXChannel
{
    name: string,
    dmx: number,
    min: number,
    max: number
}

interface FixtureAxis
{
    name: string,
    min: number,
    max: number
}

class FixtureController extends EditController<Fixture>
{
    constructor()
    {
        super();
        document.addEventListener("load", (ev) => 
        {
            $("#channels-add").off("click");
            $("#channels-add").on("click", FixtureController.addChannelClick);
        });
    }

    static addChannelClick(event: JQueryEventObject): void {
        let newChannel = ModalEditor.collectionDefaultAdd("channels");

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