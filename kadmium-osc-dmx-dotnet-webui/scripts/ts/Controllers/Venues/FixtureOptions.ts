import * as ko from "knockout";

export interface FixtureOptionsData
{
    axisRestrictions: AxisRestrictionData[];
    axisInversions: string[];
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