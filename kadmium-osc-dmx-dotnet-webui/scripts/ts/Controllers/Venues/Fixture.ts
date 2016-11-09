import {FixtureOptionsData, FixtureOptionsViewModel} from "./FixtureOptions";
import * as ko from "knockout";

export interface FixtureData
{
    type: string;
    channel: number;
    group: string;
    options: FixtureOptionsData;
}

export class FixtureViewModel
{
    channel: KnockoutObservable<number>;
    type: KnockoutObservable<string>;
    group: KnockoutObservable<string>;
    options: KnockoutObservable<FixtureOptionsViewModel>;

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