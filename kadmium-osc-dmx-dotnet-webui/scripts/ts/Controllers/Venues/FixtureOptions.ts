import {FixtureViewModel} from "./Fixture";
import {FixtureData} from "../Fixtures/Fixture";
import {MVC} from "../MVC";
import * as ko from "knockout";

export interface FixtureOptionsData
{
    axisRestrictions: AxisRestrictionData[];
    axisInversions: string[];
    maxBrightness: number;
}

interface AxisRestrictionData
{
    name: string;
    min: number;
    max: number;
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
    fixture: KnockoutObservable<FixtureViewModel>;

    constructor(fixture: FixtureViewModel)
    {
        this.axisInversions = ko.observableArray<string>();
        this.axisRestrictions = ko.observableArray<AxisRestrictionViewModel>();
        this.fixture = ko.observable<FixtureViewModel>(fixture);
        this.maxBrightness = ko.validatedObservable<number>(100).extend({
            min: 0,
            max: 100
        });
        this.axis = ko.observableArray<string>();

        this.fixture().type.subscribe((newValue: string) => 
        {
            let url = MVC.getActionURL("Fixtures", "Load", fixture.type());
            $.get(url, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
            {
                let definition = JSON.parse(data) as FixtureData;
                this.axis.removeAll();
                for (let movement of definition.movements)
                {
                    this.axis.push(movement.name);
                }
            });
        });
        this.fixture().type.notifySubscribers();
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