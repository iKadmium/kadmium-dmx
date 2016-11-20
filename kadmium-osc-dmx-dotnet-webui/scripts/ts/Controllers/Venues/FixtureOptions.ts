import {FixtureData, FixtureViewModel as FixtureDefinitionViewModel} from "../Fixtures/Fixture";
import {MovementViewModel} from "../Fixtures/Movement";
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
    moving: KnockoutComputed<boolean>;
    fixture: KnockoutObservable<FixtureViewModel>;
    definition: KnockoutObservable<FixtureDefinitionViewModel>;

    lastFixtureModel: string;

    constructor(fixture: FixtureViewModel, definition: KnockoutObservable<FixtureDefinitionViewModel>)
    {
        this.definition = definition;
        definition.subscribe((newValue: FixtureDefinitionViewModel) =>
        {
            if (newValue == undefined)
            {
                return;
            }

            /* from value in this.axisRestrictions
               where !newValue.movements().contains(x => x.name() == value.name())
               select value
            */
            let axisToRemove = this.axisRestrictions().filter((value: AxisRestrictionViewModel) =>
            {
                return !newValue.movements().some((other: MovementViewModel) => other.name() == value.name());
            });

            /* from value in newValue.movements()
               where !axisRestrictions().contains(x => x.name() == value.name())
               select value
            */
            let axisToAdd = newValue.movements().filter((value: MovementViewModel) =>
            {
                return !this.axisRestrictions().some((other: AxisRestrictionViewModel) => other.name() == value.name());
            });
            
            for (let axis of axisToAdd)
            {
                this.axisRestrictions.push(new AxisRestrictionViewModel(axis.name(), axis.min(), axis.max()));
                this.axisInversions.push(new AxisInversionViewModel(axis.name(), false));
            }

            for (let axis of axisToRemove)
            {
                this.axisRestrictions.remove(axis);
                this.axisInversions.remove((item: AxisInversionViewModel) => item.name() == axis.name());
            }
        });
        if (definition() != null && definition().name() != "")
        {
            definition.notifySubscribers();
        }
        this.fixture = ko.observable<FixtureViewModel>(fixture);
        this.axisInversions = ko.observableArray<AxisInversionViewModel>();
        this.axisRestrictions = ko.observableArray<AxisRestrictionViewModel>();
        this.maxBrightness = ko.validatedObservable<number>(100).extend({
            min: 0,
            max: 100
        });
        this.moving = ko.computed<boolean>(() => this.definition() != null && this.definition().movements().length > 0);
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

    load(data: FixtureOptionsData, fixture: FixtureViewModel): void
    {
        fixture.definitionLoadPromise.done(() =>
        {
            for (let axisInversion of this.axisInversions())
            {
                axisInversion.enabled(data.axisInversions.indexOf(axisInversion.name()) != -1);
            }

            this.maxBrightness(data.maxBrightness * 100);

            for (let restrictionItem of data.axisRestrictions)
            {
                let matches = this.axisRestrictions().filter((value: AxisRestrictionViewModel) => value.name() == restrictionItem.name);
                for (let match of matches)
                {
                    match.enabled(true);
                    match.load(restrictionItem);
                }
            }
        });
    }
}