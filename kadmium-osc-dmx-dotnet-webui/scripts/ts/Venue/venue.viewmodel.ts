import {MVC} from "../MVC";
import {VenueData, UniverseData, FixtureData, FixtureOptionsData, AxisRestrictionData, TransmitterData} from "./venue.datamodel.ts"
import * as ko from "knockout";

interface NamedData
{
    name: string;
}

interface NamedViewModel
{
    name: KnockoutObservable<string>;
}

abstract class ItemViewModelBase<ViewModelDataType> implements NamedViewModel
{
    name: KnockoutObservable<string>;
    controllerName: string;
    constructor(name: string, controllerName: string)
    {
        this.name = ko.observable<string>(name);
        this.controllerName = controllerName;
    }

    openEditor()
    {
        ($("#modal-edit") as any).modal("toggle");
        let getURL = MVC.getActionURL(this.controllerName, "Load", this.name());
        let that = this;

        $.get(getURL, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            let itemData = JSON.parse(data) as ViewModelDataType;
            that.load(itemData);
        });
    }

    abstract load(data: ViewModelDataType): void;
}

class CollectionViewModelBase<ViewModelDataType, ViewModelType extends ItemViewModelBase<ViewModelDataType>>
{
    items: KnockoutObservableArray<ViewModelType>;
    itemConstructor: (name: string) => ViewModelType;
    controllerName: string;
    activeItem: KnockoutComputed<ViewModelType>;
    editingItem: ViewModelType;
    constructor(controllerName: string, itemConstructor: (name: string) => ViewModelType)
    {
        this.itemConstructor = itemConstructor;
        this.controllerName = controllerName;
        this.items = ko.observableArray<ViewModelType>();
        let getURL = MVC.getActionURL(this.controllerName, "List", null);
        let that = this;
        this.activeItem = ko.computed<ViewModelType>({
            read: () => { return that.editingItem; },
            deferEvaluation: true
            
        });

        $.get(getURL, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            let itemNames = JSON.parse(data) as string[];
            for (let itemName of itemNames)
            {
                let item = itemConstructor(itemName);
                that.items.push(item);
            }
        });
    }

    delete(item: ViewModelType)
    {
        this.items.remove(item);
        let url = MVC.getActionURL(this.controllerName, "Delete", item.name());
    }

    edit(item: ViewModelType)
    {
        let editNode = $("#modal-edit")[0];
        ko.applyBindings(item, editNode); 
        item.openEditor();
    }
}

class AxisRestrictionViewModel
{
    name: KnockoutObservable<string>;
    min: KnockoutObservable<number>;
    max: KnockoutObservable<number>;

    constructor(data: AxisRestrictionData)
    {
        this.name = ko.observable<string>(data.name);
        this.min = ko.observable<number>(data.min);
        this.max = ko.observable<number>(data.max);
    }
}

class FixtureOptionsViewModel
{
    axisInversions: KnockoutObservableArray<string>;
    axisRestrictions: KnockoutObservableArray<AxisRestrictionViewModel>;

    constructor(data: FixtureOptionsData)
    {
        this.axisInversions = ko.observableArray<string>(data.axisInversions);
        this.axisRestrictions = ko.observableArray<AxisRestrictionViewModel>();
        for (let restrictionItem of data.axisRestrictions)
        {
            this.axisRestrictions.push(new AxisRestrictionViewModel(restrictionItem));
        }
        
    }
}

class FixtureViewModel
{
    channel: KnockoutObservable<number>;
    type: KnockoutObservable<string>;
    group: KnockoutObservable<string>;
    options: KnockoutObservable<FixtureOptionsViewModel>;

    constructor(data: FixtureData)
    {
        this.channel = ko.observable<number>(data.channel);
        this.type = ko.observable<string>(data.type);
        this.group = ko.observable<string>(data.group);
        this.options = ko.observable<FixtureOptionsViewModel>(new FixtureOptionsViewModel(data.options));
    }
}

class TransmitterViewModel
{
    name: KnockoutObservable<string>;
    transmitterID: KnockoutObservable<number>;

    constructor(data: TransmitterData)
    {
        this.name = ko.observable<string>(data.name);
        this.transmitterID = ko.observable<number>(data.universeID);
    }
}

class UniverseViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    transmitters: KnockoutObservableArray<TransmitterViewModel>;

    constructor(data: UniverseData)
    {
        this.name = ko.observable<string>(data.name);
        this.fixtures = ko.observableArray<FixtureViewModel>();
        for (let fixtureItem of data.fixtures)
        {
            let fixture = new FixtureViewModel(fixtureItem);
            this.fixtures.push(fixture);
        }
        this.transmitters = ko.observableArray<TransmitterViewModel>();
        for (let transmitterItem of data.transmitters)
        {
            let transmitter = new TransmitterViewModel(transmitterItem);
            this.transmitters.push(transmitter);
        }
    }
}

class VenueViewModel extends ItemViewModelBase<VenueData> implements NamedViewModel
{
    universes: KnockoutObservableArray<UniverseViewModel>;
    constructor(name: string)
    {
        super(name, "Venues");
        this.universes = ko.observableArray<UniverseViewModel>();
    }

    load(data: VenueData): void
    {
        this.universes.removeAll();
        for (let universeItem of data.universes)
        {
            let universe = new UniverseViewModel(universeItem);
            this.universes.push(universe);
        }
    }
}

class VenuesViewModel extends CollectionViewModelBase<VenueData, VenueViewModel>
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
    let listGroup = $("#list-group")[0];
    ko.applyBindings(viewModel, listGroup);
});
