import { FixtureOptionsData, FixtureOptionsViewModel } from "./FixtureOptions";
import { AsyncJSON } from "../AsyncJSON";
import { MVC } from "../MVC";
import { FixtureDefinitionData, FixtureDefinitionViewModel, FixtureDefinitionKey } from "../FixtureDefinitions/FixtureDefinition";
import * as ko from "knockout";

export interface FixtureData {
    type: FixtureDefinitionKey;
    channel: number;
    group: string;
    options: FixtureOptionsData;
}

export interface FixtureDefinitionDictionary {
    [model: string]: FixtureDefinitionData;
}

export interface ManufacturerDictionary {
    [manufacturer: string]: FixtureDefinitionDictionary;
}

export class FixtureDefinitionCache {
    static cache: ManufacturerDictionary;

    static async getDefinition(manufacturer: string, model: string): Promise<FixtureDefinitionData> {
        if (FixtureDefinitionCache.cache == null) {
            FixtureDefinitionCache.cache = {};
        }
        if (FixtureDefinitionCache.cache[manufacturer] == null) {
            FixtureDefinitionCache.cache[manufacturer] = {};
        }
        if (FixtureDefinitionCache.cache[manufacturer][model] != null) {
            return FixtureDefinitionCache.cache[manufacturer][model];
        }
        else {
            let url = MVC.getActionURL("FixtureDefinitions", "Load", manufacturer, model);
            let definition = await AsyncJSON.loadAsync<FixtureDefinitionData>(url);
            FixtureDefinitionCache.cache[manufacturer][model] = definition;
            return definition;
        }
    }
}

class FixtureKeyViewModel {
    manufacturer: KnockoutObservable<string>;
    model: KnockoutObservable<string>;

    constructor() {
        this.manufacturer = ko.observable<string>();
        this.model = ko.observable<string>();
    }

    load(data: FixtureDefinitionKey): void {
        this.manufacturer(data.manufacturer);
        this.model(data.name);
    }

    serialize(): FixtureDefinitionKey {
        let data: FixtureDefinitionKey = {
            manufacturer: this.manufacturer(),
            name: this.model()
        };

        return data;
    }
}

export class FixtureViewModel {
    channel: KnockoutObservable<number>;
    type: KnockoutObservable<FixtureKeyViewModel>;
    group: KnockoutObservable<string>;
    options: KnockoutObservable<FixtureOptionsViewModel>;
    definition: KnockoutObservable<FixtureDefinitionViewModel>;
    selectedFixture: KnockoutObservable<FixtureKeyViewModel>;

    constructor() {
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

    async updateType(type: FixtureDefinitionKey): Promise<void> {
        return new Promise<void>(async (resolve) => {
            let definition: FixtureDefinitionViewModel = new FixtureDefinitionViewModel(type);
            definition.load(await FixtureDefinitionCache.getDefinition(type.manufacturer, type.name));
            this.definition(definition);
            resolve();
        });
    }

    serialize(): FixtureData {
        let item: FixtureData = {
            channel: parseInt(this.channel() as any),
            group: this.group(),
            options: this.options().serialize(),
            type: this.type().serialize()
        };
        return item;
    }

    static async load(data: FixtureData): Promise<FixtureViewModel> {
        let fixture = new FixtureViewModel();
        fixture.channel(data.channel);
        fixture.type().load(data.type);
        await fixture.updateType(data.type);
        fixture.options().load(data.options);
        fixture.group(data.group);
        return fixture;
    }
}