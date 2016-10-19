import * as ko from "knockout";

export interface MovementData
{
    name: string;
    min: number;
    max: number;
}

export class MovementViewModel
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

    static load(data: MovementData): MovementViewModel
    {
        let item = new MovementViewModel()
        item.name(data.name);
        item.min(data.min);
        item.max(data.max);
        return item;
    }

    serialize(): MovementData
    {
        let item: MovementData = {
            name: this.name(),
            min: this.min(),
            max: this.max()
        };
        return item;
    }
}