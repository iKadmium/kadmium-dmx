import {ListController} from "../ListController";
import {ListControllerData} from "../ListControllerData";

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
    constructor()
    {
        this.type = "";
        this.channel = 1;
        this.group = "";
        this.options = new FixtureOptions();
    }
}

class Universe
{
    name: string;
    fixtures: Fixture[];
    constructor()
    {
        this.fixtures = [];
    }
}

class Venue extends ListControllerData
{
    Universes: Universe[];

    constructor()
    {
        super();
        this.Universes = [];
    }
}

let activeFixture: HTMLInputElement;

let venueController = new ListController<Venue>(() => new Venue());
window.addEventListener("load", (ev: Event) => 
{
    $("#fixtures-edit").on("show.bs.modal", (e: JQueryEventObject) =>
    {
        let button = e.relatedTarget as HTMLButtonElement;
        activeFixture = $(button).parent().find("input")[0] as HTMLInputElement;
    });

    $("#fixtures-submit").on("click", (e: JQueryEventObject, ...args: any[]) =>
    {
        let fixture = ListControllerData.getObject<Fixture>($("#fixtures-edit")[0] as HTMLDivElement, () => new Fixture());
        $(activeFixture).val(JSON.stringify(fixture));

    });
});

