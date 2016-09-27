// <reference path="jquery.d.ts" />

enum FixtureType
{
    "LED", "Tungsten", "Effect"
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

interface FixtureDefinition
{
    name: string,
    type: FixtureType,
    channels: DMXChannel[],
    movements: FixtureAxis[]

}

let nameBox: HTMLInputElement;

function fixtureEditOnGetData(data: FixtureDefinition, textStatus: string, jqXHR: JQueryXHR): void
{
    nameBox.value = data.name;
}

function fixtureEditOnLoad(): void {
    nameBox = $("#name")[0] as HTMLInputElement;

    $("#modal-edit").on("show.bs.modal", (e: JQueryEventObject) => {
        let itemID = $(e.relatedTarget).data("item-id") as string;
        jQuery.getJSON("Fixtures/Load/" + itemID, fixtureEditOnGetData);
    });
}

window.addEventListener("load", fixtureEditOnLoad);