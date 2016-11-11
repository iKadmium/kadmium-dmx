import {FixtureOptionsData, FixtureOptionsViewModel} from "./FixtureOptions";
import {LazyLoad} from "../LazyLoad";
import {MVC} from "../MVC";
import {FixtureData as FixtureDefinitionData, FixtureViewModel as FixtureDefinitionViewModel} from "../Fixtures/Fixture";
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
    [index: string]: JQueryPromise<FixtureDefinitionData>;
}

export class FixtureDefinitionCache
{
    static cache: FixtureDefinitionDictionary;

    static getDefinition(fixtureType: string): JQueryPromise<FixtureDefinitionData>
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
            let url = MVC.getActionURL("Fixtures", "Load", fixtureType);
            let lazyLoad = LazyLoad.load<FixtureDefinitionData>(url);
            FixtureDefinitionCache.cache[fixtureType] = lazyLoad;
            return lazyLoad;
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
        this.options = ko.validatedObservable<FixtureOptionsViewModel>(new FixtureOptionsViewModel(this));
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

    static load(data: FixtureData): FixtureViewModel
    {
        let fixture = new FixtureViewModel();
        fixture.channel(data.channel);
        fixture.type(data.type);
        fixture.group(data.group);
        fixture.options(FixtureOptionsViewModel.load(data.options, fixture));
        return fixture;
    }
}