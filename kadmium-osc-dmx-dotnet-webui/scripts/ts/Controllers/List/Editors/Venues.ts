import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";
import {ModalEditorCollection} from "../ModalEditorCollection";

interface VenueData extends ListControllerData<VenueData>
{
    name: string;
    universes: UniverseData[];
}

interface UniverseData
{
    name: string;
    transmitters: TransmitterData[];
    fixtures: FixtureData[];
}

interface FixtureData
{
    type: string;
    channel: number;
    group: string;
    options: FixtureOptionsData;
}

interface AxisRestrictionData
{
    name: string;
    min: number;
    max: number;
}

interface FixtureOptionsData
{
    axisRestrictions: AxisRestriction[];
    axisInversions: string[];
}

interface TransmitterData
{
    name: string;
    universeID: number;
}

class AxisRestriction
{
    name: string;
    min: number;
    max: number;
    
    constructor()
    {
        this.name = "";
        this.min = 0;
        this.max = 0;
    }
}

class FixtureOptions
{
    axisRestrictions: AxisRestriction[];
    axisInversions: string[];
    constructor()
    {
        this.axisRestrictions = [];
        this.axisInversions = [];
    }
}

class Fixture
{
    type: string;
    channel: number;
    group: string;
    options: FixtureOptions;
    static activeUniverse: Universe;
    constructor()
    {
        this.type = "";
        this.channel = 1;
        this.group = "";
        this.options = new FixtureOptions();
    }
}

class Transmitter
{
    name: string;
    universeID: number;
    static activeUniverse: Universe;
    constructor()
    {
        this.name = "";
        this.universeID = 1;
    }
    
}

class Universe
{
    name: string;
    transmitters: Transmitter[];
    fixtures: Fixture[];
    private dataSource: HTMLTableRowElement;
    constructor(dataSource: HTMLTableRowElement)
    {
        this.dataSource = dataSource;
        this.transmitters = [];
        this.fixtures = [];

        let that = this;

        $(this.dataSource).find("#name").on("change", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            that.name = $(eventObject.target).val();
        });

        $(this.dataSource).find(".collection-edit").on("click", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            switch ($(eventObject.currentTarget).data("collection-id"))
            {
                case "transmitters":
                    Transmitter.activeUniverse = that;
                    break;
                case "fixtures":
                    Fixture.activeUniverse = that;
                    break;
            }
        });
    }
}

class Venue implements VenueData
{
    universes: Universe[];
    name: string;
    private dataSource: HTMLDivElement;

    constructor(dataSource: HTMLDivElement)
    {
        this.dataSource = dataSource;
        this.universes = [];

        let that = this;

        $(this.dataSource).find("#name").on("change", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            that.name = $(eventObject.target).val();
        });

        $(this.dataSource).find("#universes-add").on("click", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            let universeTR = ModalEditorCollection.itemAdd($(eventObject.currentTarget).data("collection-id"));
            let universe = new Universe(universeTR[0] as HTMLTableRowElement);
            that.universes.push(universe);
            universeTR.find(".collection-remove").on("click", (eventObject: JQueryEventObject, ...args: any[]) =>
            {
                let index = that.universes.indexOf(universe);
                that.universes.splice(index, 1);
            });
        });
    }
    
    fillInputBoxes(data: VenueData): void
    {
        
    }

    getDataFromInputBoxes(): void
    {
        
    }
}

let modalInputStack: HTMLInputElement[] = [];
let venue: Venue;
let venueController: ListController<VenueData, Venue>;

window.addEventListener("load", (ev: Event) => 
{
    venue = new Venue($("#edit-form")[0] as HTMLDivElement);
    venueController = new ListController<VenueData, Venue>(venue);

    $("#fixtures-edit").on("show.bs.modal", (e: JQueryEventObject) =>
    {
        let button = e.relatedTarget as HTMLButtonElement;
        modalInputStack.push($(button).parent().find("input")[0] as HTMLInputElement);
    });

    $("#transmitters-edit").on("show.bs.modal", (e: JQueryEventObject) =>
    {
        let button = e.relatedTarget as HTMLButtonElement;
        modalInputStack.push($(button).parent().find("input")[0] as HTMLInputElement);
    });

    $("#transmitters-submit").on("click", (eventObject: JQueryEventObject, ...args: any[]) => 
    {
        let inputElement = modalInputStack.pop();
        let transmitters: Transmitter[] = [];
        $("#transmitters").find("tr").not(".collection-prototype").each((index: number, elem: Element) =>
        {
            let transmitter = new Transmitter();
            transmitter.name = $(elem).find("#name").val();
            transmitter.universeID = $(elem).find("#name").val();
            transmitters.push(transmitter);
        });
        $(inputElement).val(JSON.stringify(transmitters));
        ($("#transmitters-edit") as any).modal("toggle");
    });

});

