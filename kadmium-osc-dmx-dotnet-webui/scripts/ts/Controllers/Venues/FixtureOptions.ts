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

export class AxisRestrictionViewModel
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
            min: parseInt(this.min() as any),
            max: parseInt(this.max() as any)
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

export class FixtureOptionsViewModel
{
    axisInversions: KnockoutObservableArray<string>;
    axisRestrictions: KnockoutObservableArray<AxisRestrictionViewModel>;
    axis: KnockoutObservableArray<string>;
    maxBrightness: KnockoutObservable<number>;
    moving: KnockoutObservable<boolean>;
    fixture: KnockoutObservable<FixtureViewModel>;
    load: KoPlus.Command;
    
    constructor(fixture: FixtureViewModel)
    {
        this.load = ko.command(() => 
        {
            let lazyDefinition = FixtureDefinitionCache.getDefinition(fixture.type());
            return lazyDefinition.done((data: FixtureData) => 
            {
                this.loadDefinition(data);
            });
        });
        this.fixture = ko.observable<FixtureViewModel>(fixture);
        this.axisInversions = ko.observableArray<string>();
        this.axisRestrictions = ko.observableArray<AxisRestrictionViewModel>();
        this.maxBrightness = ko.validatedObservable<number>(100).extend({
            min: 0,
            max: 100
        });
        this.axis = ko.observableArray<string>();
        this.moving = ko.observable<boolean>(false);
    }

    loadDefinition(data: FixtureData): void
    {
        this.axis.removeAll();
        for (let movement of data.movements)
        {
            this.axis.push(movement.name);
        }
        this.moving(this.axis().length > 0);
        this.axis.notifySubscribers();
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
            maxBrightness: this.maxBrightness() / 100
        };
        return item;
    }

    static load(data: FixtureOptionsData, fixture: FixtureViewModel): FixtureOptionsViewModel
    {
        let fixtureOptionsViewModel = new FixtureOptionsViewModel(fixture);
        fixtureOptionsViewModel.axisInversions(data.axisInversions);
        fixtureOptionsViewModel.maxBrightness(data.maxBrightness * 100);
        for (let restrictionItem of data.axisRestrictions)
        {
            fixtureOptionsViewModel.axisRestrictions.push(AxisRestrictionViewModel.load(restrictionItem));
        }
        return fixtureOptionsViewModel;
    }
}