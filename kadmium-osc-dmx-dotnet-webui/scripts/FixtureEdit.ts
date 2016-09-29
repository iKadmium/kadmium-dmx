// <reference path="jquery.d.ts" />
// <reference path="ModalEditor.ts" />

namespace Fixture {
    interface DMXChannel {
        name: string,
        dmx: number,
        min: number,
        max: number
    }

    interface FixtureAxis {
        name: string,
        min: number,
        max: number
    }

    interface FixtureDefinition {
        name: string,
        type: string,
        channels: DMXChannel[],
        movements: FixtureAxis[]
    }
    
    let modalEditor: ModalEditor;
    
    function addChannelClick(event: JQueryEventObject): void {
        let newChannel = ModalEditor.collectionDefaultAdd("channels");

        let dmxMax = 0;
        let dmxInputs = $("#channels").children().not(".collection-prototype").children().children("#dmx");
        if (dmxInputs.length > 1) {
            let dmxValues = dmxInputs.map((index, element) => parseInt((element as HTMLInputElement).value)) as any;
            dmxMax = Math.max(...dmxValues);
        }
        newChannel.children().children("#dmx").val(dmxMax + 1);
    }
    
    function getChannels(): DMXChannel[] {
        let channels: DMXChannel[] = [];
        $("#channels").children().not(".collection-prototype").each((index: number, elem: Element) => {

            let cells = $(elem).children();
            let channel: DMXChannel = {
                name: cells.children("#name").val(),
                dmx: cells.children("#dmx").val(),
                min: cells.children("#min").val(),
                max: cells.children("#max").val()
            };
            channels.push(channel);
        });
        return channels;
    }

    function getMovements(): FixtureAxis[] {
        let movements: FixtureAxis[] = [];
        $("#movements").children().not(".collection-prototype").each((index: number, elem: Element) => {
            let cells = $(elem).children();
            let axis: FixtureAxis = {
                name: cells.children("#name").val(),
                min: cells.children("#min").val(),
                max: cells.children("#max").val()
            };

            movements.push(axis);
        });
        return movements;
    }

    function getObject(): FixtureDefinition {
        let output: FixtureDefinition = {
            name: $("#name").val(),
            type: $("type").val(),
            channels: getChannels(),
            movements: getMovements()
        };
        return output;
    }
    
    function onLoad(): void {

        modalEditor = new ModalEditor("Fixtures/Load/", "Fixtures/Save/", getObject);

        $("#channels-add").off("click");
        $("#channels-add").on("click", addChannelClick);
    }

    window.addEventListener("load", onLoad);
}