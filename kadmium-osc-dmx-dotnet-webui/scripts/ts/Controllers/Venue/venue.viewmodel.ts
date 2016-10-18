import {VenueData, UniverseData, FixtureData, FixtureOptionsData, AxisRestrictionData, TransmitterData} from "./venue.datamodel.ts"
import {ItemViewModel, NamedViewModel} from "../ItemViewModel";
import {CollectionViewModel} from "../CollectionViewModel";

import * as ko from "knockout";

interface NamedData
{
    name: string;
}

class AxisRestrictionViewModel
{
    name: KnockoutObservable<string>;
    min: KnockoutObservable<number>;
    max: KnockoutObservable<number>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.min = ko.observable<number>();
        this.max = ko.observable<number>();
    }

    serialize(): AxisRestrictionData
    {
        let item: AxisRestrictionData = {
            name: this.name(),
            min: this.min(),
            max: this.max()
        };

        return item;
    }

    static load(data: AxisRestrictionData): AxisRestrictionViewModel
    {
        let axisRestrictionViewModel = new AxisRestrictionViewModel();
        axisRestrictionViewModel.name(data.name);
        axisRestrictionViewModel.min(data.min);
        axisRestrictionViewModel.max(data.max);
        return axisRestrictionViewModel;
    }
}

class FixtureOptionsViewModel
{
    axisInversions: KnockoutObservableArray<string>;
    axisRestrictions: KnockoutObservableArray<AxisRestrictionViewModel>;

    constructor()
    {
        this.axisInversions = ko.observableArray<string>();
        this.axisRestrictions = ko.observableArray<AxisRestrictionViewModel>();
    }

    addAxisRestriction(): void
    {
        this.axisRestrictions.push(new AxisRestrictionViewModel());
    }

    removeAxisRestriction(item: AxisRestrictionViewModel)
    {
        this.axisRestrictions.remove(item);
    }

    addAxisInversion(): void
    {
        this.axisInversions.push("Pan");
    }

    removeAxisInversion(item: string): void
    {
        this.axisInversions.remove(item);
    }

    serialize(): FixtureOptionsData
    {
        let item: FixtureOptionsData = {
            axisInversions: this.axisInversions(),
            axisRestrictions: this.axisRestrictions().map((value: AxisRestrictionViewModel, index: number, array: AxisRestrictionViewModel[]) => value.serialize()),
        };
        return item;
    }

    static load(data: FixtureOptionsData): FixtureOptionsViewModel
    {
        let fixtureOptionsViewModel = new FixtureOptionsViewModel();
        fixtureOptionsViewModel.axisInversions(data.axisInversions);
        for (let restrictionItem of data.axisRestrictions)
        {
            fixtureOptionsViewModel.axisRestrictions.push(AxisRestrictionViewModel.load(restrictionItem));
        }
        return fixtureOptionsViewModel;
    }
}

class FixtureViewModel
{
    channel: KnockoutObservable<number>;
    type: KnockoutObservable<string>;
    group: KnockoutObservable<string>;
    options: KnockoutObservable<FixtureOptionsViewModel>;

    constructor()
    {
        this.channel = ko.observable<number>();
        this.type = ko.observable<string>();
        this.group = ko.observable<string>();
        this.options = ko.observable<FixtureOptionsViewModel>(new FixtureOptionsViewModel());
    }

    serialize(): FixtureData
    {
        let item: FixtureData = {
            channel: this.channel(),
            group: this.group(),
            options: this.options().serialize(),
            type: this.type()
        };
        return item;
    }

    static load(data: FixtureData): FixtureViewModel
    {
        let fixture = new FixtureViewModel();
        fixture.channel(data.channel);
        fixture.type(data.type);
        fixture.group(data.group);
        fixture.options(FixtureOptionsViewModel.load(data.options));
        return fixture;
    }
}

class TransmitterViewModel
{
    name: KnockoutObservable<string>;
    universeID: KnockoutObservable<number>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.universeID = ko.observable<number>(1);
    }

    serialize(): TransmitterData
    {
        let item: TransmitterData = {
            name: this.name(),
            universeID: this.universeID()
        };
        return item;
    }

    static load(data: TransmitterData): TransmitterViewModel
    {
        let transmitter = new TransmitterViewModel();
        transmitter.name = ko.observable<string>(data.name);
        transmitter.universeID = ko.observable<number>(data.universeID);
        return transmitter;
    }
}

class UniverseViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    transmitters: KnockoutObservableArray<TransmitterViewModel>;

    selectedFixture: KnockoutObservable<FixtureViewModel>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.transmitters = ko.observableArray<TransmitterViewModel>();
        this.selectedFixture = ko.observable<FixtureViewModel>(new FixtureViewModel());
    }

    addTransmitter(): void
    {
        this.transmitters.push(new TransmitterViewModel());
    }

    removeTransmitter(item: TransmitterViewModel): void
    {
        this.transmitters.remove(item);
    }
    
    addFixture(): void
    {
        this.fixtures.push(new FixtureViewModel());
    }

    removeFixture(item: FixtureViewModel): void
    {
        this.fixtures.remove(item);
    }

    editOptions(item: FixtureViewModel):void
    {
        this.selectedFixture(item);
        ($("#options-edit") as any).modal("toggle");
    }

    serialize(): UniverseData
    {
        let item: UniverseData = {
            name: this.name(),
            fixtures: this.fixtures().map((value: FixtureViewModel, index: number, array: FixtureViewModel[]) => value.serialize()),
            transmitters: this.transmitters().map((value: TransmitterViewModel, index: number, array: TransmitterViewModel[]) => value.serialize())
        };

        return item;
    }
    
    static load(data: UniverseData): UniverseViewModel
    {
        let universeViewModel = new UniverseViewModel();
        universeViewModel.name(data.name);
        for (let fixtureItem of data.fixtures)
        {
            let fixture = FixtureViewModel.load(fixtureItem);
            universeViewModel.fixtures.push(fixture);
        }
        for (let transmitterItem of data.transmitters)
        {
            let transmitter = TransmitterViewModel.load(transmitterItem);
            universeViewModel.transmitters.push(transmitter);
        }
        return universeViewModel;
    }
}

class VenueViewModel extends ItemViewModel<VenueData> implements NamedViewModel
{
    name: KnockoutObservable<string>;
    universes: KnockoutObservableArray<UniverseViewModel>;
    selectedUniverse: KnockoutObservable<UniverseViewModel>;
    constructor(name: string)
    {
        super(name, "Venues");
        this.name = ko.observable<string>(name);
        this.universes = ko.observableArray<UniverseViewModel>();
        this.selectedUniverse = ko.observable<UniverseViewModel>(new UniverseViewModel());
    }

    editTransmitters(item: UniverseViewModel): void
    {
        this.selectedUniverse(item);
        ($("#transmitters-edit") as any).modal("toggle");
    }

    editFixtures(item: UniverseViewModel): void
    {
        this.selectedUniverse(item);
        ($("#fixtures-edit") as any).modal("toggle");
    }

    addUniverse(): void
    {
        this.universes.push(new UniverseViewModel());
    }

    removeUniverse(item: UniverseViewModel): void
    {
        this.universes.remove(item);
    }

    load(data: VenueData): void
    {
        this.universes.removeAll();
        for (let universeItem of data.universes)
        {
            let universe = UniverseViewModel.load(universeItem);
            this.universes.push(universe);
        }
    }

    serialize(): VenueData
    {
        let universes: UniverseData[] = [];
        for (let universe of this.universes())
        {
            universes.push(universe.serialize());
        }
        let item: VenueData = {
            name: this.name(),
            universes: universes
        };
        return item;
    }
}

class VenuesViewModel extends CollectionViewModel<VenueData, VenueViewModel>
{
    constructor()
    {
        super("Venues", (name) => new VenueViewModel(name));
    }
}

let viewModel: VenuesViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new VenuesViewModel();
    (window as any).viewModel = viewModel;
    let itemList = $("#item-list")[0];
    ko.applyBindings(viewModel);
    
});
