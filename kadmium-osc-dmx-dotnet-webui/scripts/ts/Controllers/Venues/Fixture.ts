import { FixtureOptionsData, FixtureOptionsViewModel } from "./FixtureOptions";
import { AsyncJSON } from "../AsyncJSON";
import { MVC } from "../MVC";
import { FixtureDefinitionData, FixtureDefinitionViewModel } from "../FixtureDefinitions/FixtureDefinition";
import * as ko from "knockout";

export interface FixtureData
{
    type: string;
    channel: number;
    group: string;
    options: FixtureOptionsData;
}

export interface FixtureDefinitionDictionary
{
    [index: string]: FixtureDefinitionData;
}

export class FixtureDefinitionCache
{
    static cache: FixtureDefinitionDictionary;

    static async getDefinition(fixtureType: string): Promise<FixtureDefinitionData>
    {
        if (FixtureDefinitionCache.cache == null)
        {
            FixtureDefinitionCache.cache = {};
        }
        if (FixtureDefinitionCache.cache[fixtureType] != null)
        {
            return FixtureDefinitionCache.cache[fixtureType];
        }
        else
        {
            let url = MVC.getActionURL("FixtureDefinitions", "Load", fixtureType);
            let definition = await AsyncJSON.loadAsync<FixtureDefinitionData>(url);
            FixtureDefinitionCache.cache[fixtureType] = definition;
            return definition;
        }
    }
}

export class FixtureViewModel
{
    channel: KnockoutObservable<number>;
    type: KnockoutObservable<string>;
    group: KnockoutObservable<string>;
    options: KnockoutObservable<FixtureOptionsViewModel>;
    definition: KnockoutObservable<FixtureDefinitionViewModel>;

    constructor()
    {
        this.channel = ko.validatedObservable<number>().extend({
            min: 1,
            max: 512
        });
        this.type = ko.observable<string>();
        this.group = ko.observable<string>();
        this.definition = ko.observable<FixtureDefinitionViewModel>();
        this.options = ko.validatedObservable<FixtureOptionsViewModel>(new FixtureOptionsViewModel(this, this.definition));
        this.type.subscribe(async (newValue: string) => 
        {
            await this.updateType(newValue);
        });
    }

    async updateType(type: string): Promise<void>
    {
        return new Promise<void>(async (resolve) =>
        {
            let definition: FixtureDefinitionViewModel = new FixtureDefinitionViewModel(type);
            definition.load(await FixtureDefinitionCache.getDefinition(type));
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
            type: this.type()
        };
        return item;
    }

    static async load(data: FixtureData): Promise<FixtureViewModel>
    {
        let fixture = new FixtureViewModel();
        fixture.channel(data.channel);
        fixture.type(data.type);
        await fixture.updateType(data.type);
        fixture.options().load(data.options);
        fixture.group(data.group);
        return fixture;
    }
}