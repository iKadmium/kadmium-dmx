// <reference path="jquery.d.ts" />
// <reference path="ModalEditor.ts" />

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
    type: string,
    channels: DMXChannel[],
    movements: FixtureAxis[]
}

let nameBox: HTMLInputElement;
let typeBox: HTMLSelectElement;

let channelsAdd: HTMLButtonElement;
let movementsAdd: HTMLButtonElement;

let channelPrototype: HTMLTableRowElement;
let movementPrototype: HTMLTableRowElement;

let staticElements: HTMLElement[];

let modalEditor: ModalEditor;

function fixtureEditOnGetData(data: FixtureDefinition): void
{
    nameBox.value = data.name;
    typeBox.value = data.type.toString();
    
    for (let channel of data.channels)
    {
        let row = ModalEditor.collectionDefaultAdd("channels");
        row.children().children("#name").val(channel.name);
        row.children().children("#dmx").val(channel.dmx);
        row.children().children("#min").val(channel.min);
        row.children().children("#max").val(channel.max);
    }
    
    for (let movement of data.movements) {
        let row = ModalEditor.collectionDefaultAdd("movements");
        row.children().children("#name").val(movement.name);
        row.children().children("#min").val(movement.min);
        row.children().children("#max").val(movement.max);
    }
}

function addMovementClick(event: JQueryEventObject): void
{
    ModalEditor.collectionDefaultAdd("movements");
}

function addChannelClick(event: JQueryEventObject): void
{
    let newChannel = ModalEditor.collectionDefaultAdd("channels");

    let dmxMax = 0;
    let dmxInputs = $("#channels").children().not(".collection-prototype").children().children("#dmx");
    if (dmxInputs.length > 1) {
        let dmxValues = dmxInputs.map((index, element) => parseInt((element as HTMLInputElement).value)) as any;
        dmxMax = Math.max(...dmxValues);
    }
    newChannel.children().children("#dmx").val(dmxMax + 1);
}

function collectionRemoveClick(event: JQueryEventObject): void
{
    let row = this.parentElement.parentElement as HTMLTableRowElement;
    row.parentElement.removeChild(row);
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

function getObject(): FixtureDefinition
{
    let output: FixtureDefinition = {
        name: nameBox.value,
        type: typeBox.value,
        channels: getChannels(),
        movements: getMovements()
    };
    return output;
}

function validate(): boolean
{
    let valid = true;
    let dmxInputs = $("#channels").children().not(".collection-prototype").children().children("#dmx");
    dmxInputs.each((index: number, elem: Element) => {
        let value = $(elem).val();
        if (value > 512 || value < 1) {
            valid = false;
            $(elem).parent().addClass("has-error");
        }
    });
    return valid;
}

function fixtureEditOnLoad(): void
{
    nameBox = $("#name")[0] as HTMLInputElement;
    typeBox = $("#type")[0] as HTMLSelectElement;

    staticElements = [nameBox, typeBox];

    channelsAdd = $("#channels-add")[0] as HTMLButtonElement;
    movementsAdd = $("#movements-add")[0] as HTMLButtonElement;
    
    $("#channels-add").on("click", addChannelClick);
    $("#movements-add").on("click", addMovementClick);
    $(".collection-remove").on("click", collectionRemoveClick);
    
    modalEditor = new ModalEditor("Fixtures/Load/", "Fixtures/Save/", fixtureEditOnGetData, validate, getObject, staticElements);
}

window.addEventListener("load", fixtureEditOnLoad);