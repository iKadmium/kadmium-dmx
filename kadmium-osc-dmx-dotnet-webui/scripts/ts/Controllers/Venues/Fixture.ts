import { FixtureOptionsData, FixtureOptionsViewModel } from "./FixtureOptions";
import { AsyncJSON } from "../AsyncJSON";
import { MVC } from "../MVC";
import { FixtureDefinitionData, FixtureDefinitionViewModel, FixtureDefinitionKey } from "../FixtureDefinitions/FixtureDefinition";
import * as ko from "knockout";

class ManufacturerViewModel
{
    models: KnockoutObservableArray<string>;
    name: KnockoutObservable<string>;

    constructor(name: string)
    {
        this.models = ko.observableArray<string>();
        this.name = ko.observable<string>(name);
    }
}

export class FixtureModelPicker
{
    static selectedManufacturer: KnockoutObservable<ManufacturerViewModel>;
    static selectedModel: KnockoutObservable<string>;
    static manufacturers: KnockoutObservableArray<ManufacturerViewModel>;

    static async loadFixtures(): Promise<void>
    {
        FixtureModelPicker.manufacturers = ko.observableArray<ManufacturerViewModel>();

        let url = MVC.getActionURL("FixtureDefinitions", "List");
        let data = await AsyncJSON.loadAsync<FixtureDefinitionKey[]>(url);
        for (let item of data)
        {
            let filtered = FixtureModelPicker.manufacturers().filter((value: ManufacturerViewModel) => value.name() == item.manufacturer);
            let manufacturer: ManufacturerViewModel;
            if (filtered.length == 1)
            {
                manufacturer = filtered[0];
            }
            else
            {
                manufacturer = new ManufacturerViewModel(item.manufacturer);
                this.manufacturers.push(manufacturer);
            }
            manufacturer.models.push(item.name);
        }
        FixtureModelPicker.selectedManufacturer = ko.observable<ManufacturerViewModel>(FixtureModelPicker.manufacturers()[0]);
        FixtureModelPicker.selectedModel = ko.observable<string>(FixtureModelPicker.selectedManufacturer().models()[0]);
    }
}

export interface FixtureData
{
    type: FixtureDefinitionKey;
    channel: number;
    group: string;
    options: FixtureOptionsData;
}

export interface FixtureDefinitionDictionary
{
    [model: string]: FixtureDefinitionData;
}

export interface ManufacturerDictionary
{
    [manufacturer: string]: FixtureDefinitionDictionary;
}

export class FixtureDefinitionCache
{
    static cache: ManufacturerDictionary;

    static async getDefinition(manufacturer: string, model: string): Promise<FixtureDefinitionData>
    {
        if (FixtureDefinitionCache.cache == null)
        {
            FixtureDefinitionCache.cache = {};
        }
        if (FixtureDefinitionCache.cache[manufacturer] == null)
        {
            FixtureDefinitionCache.cache[manufacturer] = {};
        }
        if (FixtureDefinitionCache.cache[manufacturer][model] != null)
        {
            return FixtureDefinitionCache.cache[manufacturer][model];
        }
        else
        {
            let url = MVC.getActionURL("FixtureDefinitions", "Load", manufacturer, model);
            let definition = await AsyncJSON.loadAsync<FixtureDefinitionData>(url);
            FixtureDefinitionCache.cache[manufacturer][model] = definition;
            return definition;
        }
    }
}

class FixtureKeyViewModel
{
    manufacturer: KnockoutObservable<string>;
    model: KnockoutObservable<string>;

    constructor()
    {
        this.manufacturer = ko.observable<string>(FixtureModelPicker.selectedManufacturer().name());
        this.model = ko.observable<string>(FixtureModelPicker.selectedModel());
    }

    load(data: FixtureDefinitionKey): void
    {
        this.manufacturer(data.manufacturer);
        this.model(data.name);
    }

    serialize(): FixtureDefinitionKey
    {
        let data: FixtureDefinitionKey = {
            manufacturer: this.manufacturer(),
            name: this.model()
        };

        return data;
    }
}

export class FixtureViewModel
{
    channel: KnockoutObservable<number>;
    type: KnockoutObservable<FixtureKeyViewModel>;
    group: KnockoutObservable<string>;
    options: KnockoutObservable<FixtureOptionsViewModel>;
    definition: KnockoutObservable<FixtureDefinitionViewModel>;
    selectedFixture: KnockoutObservable<FixtureKeyViewModel>;

    constructor()
    {
        this.channel = ko.validatedObservable<number>().extend({
            min: 1,
            max: 512
        });
        this.type = ko.observable<FixtureKeyViewModel>(new FixtureKeyViewModel());
        this.selectedFixture = ko.observable<FixtureKeyViewModel>(new FixtureKeyViewModel());
        this.group = ko.observable<string>();
        this.definition = ko.observable<FixtureDefinitionViewModel>();
        this.options = ko.validatedObservable<FixtureOptionsViewModel>(new FixtureOptionsViewModel(this, this.definition));
    }

    async updateType(type: FixtureDefinitionKey): Promise<void>
    {
        return new Promise<void>(async (resolve) =>
        {
            let definition: FixtureDefinitionViewModel = new FixtureDefinitionViewModel(type);
            definition.load(await FixtureDefinitionCache.getDefinition(type.manufacturer, type.name));
            this.definition(definition);
            resolve();
        });
    }

    serialize(): FixtureData
    {
        let item: FixtureData = {
            channel: parseInt(this.channel() as any),
            group: this.group(),
            options: this.options().serialize(),
            type: this.type().serialize()
        };
        return item;
    }

    static async load(data: FixtureData): Promise<FixtureViewModel>
    {
        let fixture = new FixtureViewModel();
        fixture.channel(data.channel);
        fixture.type().load(data.type);
        await fixture.updateType(data.type);
        fixture.options().load(data.options);
        fixture.group(data.group);
        return fixture;
    }
}