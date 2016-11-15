import * as ko from "knockout";


export interface ColorWheelEntryData
{
    name: string;
    min: number;
    max: number;
    color: string;
}

export class ColorWheelViewModel
{
    entries: KnockoutObservableArray<ColorWheelEntryViewModel>;

    constructor()
    {
        this.entries = ko.observableArray<ColorWheelEntryViewModel>();
    }

    public get(dmxValue: number): ColorWheelEntryViewModel
    {
        let matches = this.entries().filter((value: ColorWheelEntryViewModel) => value.min() <= dmxValue && value.max() >= dmxValue);
        return (matches.length == 1) ? matches[0] : null;
    }

    static load(data: ColorWheelEntryData[]): ColorWheelViewModel
    {
        let wheel = new ColorWheelViewModel();

        if (data != null)
        {
            for (let entry of data)
            {
                wheel.entries.push(ColorWheelEntryViewModel.load(entry));
            }
        }
        return wheel;
    }
}

export class ColorWheelEntryViewModel
{
    name: KnockoutObservable<string>;
    min: KnockoutObservable<number>;
    max: KnockoutObservable<number>;
    color: KnockoutObservable<string>;

    red: KnockoutComputed<number>;
    green: KnockoutComputed<number>;
    blue: KnockoutComputed<number>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.min = ko.observable<number>();
        this.max = ko.observable<number>();
        this.color = ko.observable<string>("#000000");
        this.red = ko.computed<number>(() => parseInt(this.color().substr(1, 2), 16));
        this.green = ko.computed<number>(() => parseInt(this.color().substr(3, 2), 16));
        this.blue = ko.computed<number>(() => parseInt(this.color().substr(5, 2), 16));
    }
    
    static load(data: ColorWheelEntryData): ColorWheelEntryViewModel
    {
        let entry = new ColorWheelEntryViewModel();
        entry.name(data.name);
        entry.min(data.min);
        entry.max(data.max);
        entry.color(data.color);
        return entry;
    }

    serialize(): ColorWheelEntryData
    {
        let data: ColorWheelEntryData = {
            name: this.name(),
            min: this.min(),
            max: this.max(),
            color: this.color()
        };

        return data;
    }
}