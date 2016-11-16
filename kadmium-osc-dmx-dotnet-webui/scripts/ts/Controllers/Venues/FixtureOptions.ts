import {FixtureData} from "../Fixtures/Fixture";
import {FixtureViewModel, FixtureDefinitionCache} from "./Fixture";
import {LazyLoad} from "../LazyLoad";
import {MVC} from "../MVC";
import * as ko from "knockout";

export interface FixtureOptionsData
{
    axisRestrictions: AxisRestrictionData[];
    axisInversions: string[];
    maxBrightness: number;
}

export interface AxisRestrictionData
{
    name: string;
    min: number;
    max: number;
}

export class AxisInversionViewModel
{
    name: KnockoutObservable<string>;
    enabled: KnockoutObservable<boolean>;

    constructor(name: string, checked: boolean)
    {
        this.name = ko.observable<string>(name);
        this.enabled = ko.observable<boolean>(checked);
    }
}

export class AxisRestrictionViewModel
{
    name: KnockoutObservable<string>;
    min: KnockoutObservable<number>;
    max: KnockoutObservable<number>;
    axisMin: KnockoutObservable<number>;
    axisMax: KnockoutObservable<number>;
    enabled: KnockoutObservable<boolean>;
    
    constructor(name: string, axisMin: number, axisMax: number)
    {
        this.name = ko.observable<string>(name);
        this.min = ko.validatedObservable<number>(axisMin).extend({
            min: axisMin,
            max: axisMax
        });;
        this.max = ko.validatedObservable<number>(axisMax).extend({
            min: axisMin,
            max: axisMax
        });;
        this.axisMin = ko.observable<number>(axisMin);
        this.axisMax = ko.observable<number>(axisMax);
        this.enabled = ko.observable<boolean>();
    }

    serialize(): AxisRestrictionData
    {
        let item: AxisRestrictionData = {
            name: this.name(),
            min: parseInt(this.min() as any),
            max: parseInt(this.max() as any)
        };

        return item;
    }

    load(data: AxisRestrictionData): void
    {
        this.name(data.name);
        this.min(data.min);
        this.max(data.max);
    }
}

export class FixtureOptionsViewModel
{
    axisInversions: KnockoutObservableArray<AxisInversionViewModel>;
    axisRestrictions: KnockoutObservableArray<AxisRestrictionViewModel>;
    maxBrightness: KnockoutObservable<number>;
    moving: KnockoutObservable<boolean>;
    fixture: KnockoutObservable<FixtureViewModel>;
    load: KoPlus.Command;

    lastFixtureModel: string;
    
    constructor(fixture: FixtureViewModel)
    {
        this.load = ko.command(() => 
        {
            let lazyDefinition = FixtureDefinitionCache.getDefinition(fixture.type());
            return lazyDefinition.done((data: FixtureData) => 
            {
                this.moving(data.movements != null && data.movements.length > 0);
                this.axisRestrictions.removeAll();
                this.axisInversions.removeAll();
                if (data.movements != null)
                {
                    for (let movement of data.movements)
                    {
                        this.axisRestrictions.push(new AxisRestrictionViewModel(movement.name, movement.min, movement.max));
                        this.axisInversions.push(new AxisInversionViewModel(movement.name, false));
                    }
                }

            });
        });
        this.fixture = ko.observable<FixtureViewModel>(fixture);
        this.axisInversions = ko.observableArray<AxisInversionViewModel>();
        this.axisRestrictions = ko.observableArray<AxisRestrictionViewModel>();
        this.maxBrightness = ko.validatedObservable<number>(100).extend({
            min: 0,
            max: 100
        });
        this.moving = ko.observable<boolean>(false);
        this.fixture.subscribe((newValue: FixtureViewModel) =>
        {
            if (newValue.type() != this.lastFixtureModel)
            {
                this.lastFixtureModel = newValue.type();
                this.load();
            }
        });
    }
    
    
    serialize(): FixtureOptionsData
    {
        let item: FixtureOptionsData = {
            axisInversions: this.axisInversions().filter((value: AxisInversionViewModel) => value.enabled()).map((value: AxisInversionViewModel) => value.name()),
            axisRestrictions: this.axisRestrictions().map((value: AxisRestrictionViewModel, index: number, array: AxisRestrictionViewModel[]) => value.serialize()),
            maxBrightness: this.maxBrightness() / 100
        };
        return item;
    }

    static load(data: FixtureOptionsData, fixture: FixtureViewModel): FixtureOptionsViewModel
    {
        let fixtureOptionsViewModel = new FixtureOptionsViewModel(fixture);
        fixtureOptionsViewModel.load.done(() =>
        {
            for (let axisInversion of fixtureOptionsViewModel.axisInversions())
            {
                axisInversion.enabled(data.axisInversions.indexOf(axisInversion.name()) != -1);
            }

            fixtureOptionsViewModel.maxBrightness(data.maxBrightness * 100);

            for (let restrictionItem of data.axisRestrictions)
            {
                let matches = fixtureOptionsViewModel.axisRestrictions().filter((value: AxisRestrictionViewModel) => value.name() == restrictionItem.name);
                for (let match of matches)
                {
                    match.enabled(true);
                    match.load(restrictionItem);
                }
            }
        });
        
        return fixtureOptionsViewModel;
    }
}