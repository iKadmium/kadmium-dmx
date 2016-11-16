import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import {ChannelData, ChannelViewModel} from "./Channel";
import {MovementData, MovementViewModel} from "./Movement";
import {ColorWheelEntryViewModel, ColorWheelEntryData} from "./ColorWheel";

import * as ko from "knockout";

export interface FixtureData
{
    name: string;
    type: string;
    channels: ChannelData[];
    movements?: MovementData[];
    colorWheel?: ColorWheelEntryData[];
}

export class FixtureViewModel extends CollectionItemViewModel<FixtureData> implements NamedViewModel
{
    type: KnockoutObservable<string>;
    channels: KnockoutObservableArray<ChannelViewModel>;
    movements: KnockoutObservableArray<MovementViewModel>;
    colorWheel: KnockoutObservableArray<ColorWheelEntryViewModel>;
    
    constructor(name: string)
    {
        super(name, "Fixtures");
        this.type = ko.observable<string>();
        this.channels = ko.observableArray<ChannelViewModel>();
        this.movements = ko.observableArray<MovementViewModel>();
        this.colorWheel = ko.observableArray<ColorWheelEntryViewModel>();
    }

    addChannel(): void
    {
        let maxChannel = 0;
        this.channels().forEach((value: ChannelViewModel, index: number, array: ChannelViewModel[]) =>
        {
            let dmx = parseInt(value.dmx() + "");
            if (dmx > maxChannel)
            {
                maxChannel = dmx;
            }
        });
        this.channels.push(new ChannelViewModel(maxChannel + 1));
    }

    removeChannel(item: ChannelViewModel): void
    {
        this.channels.remove(item);
    }

    addMovement(): void
    {
        this.movements.push(new MovementViewModel());
    }

    removeMovement(item: MovementViewModel): void
    {
        this.movements.remove(item);
    }

    addColor(): void
    {
        this.colorWheel.push(new ColorWheelEntryViewModel());
    }

    removeColor(item: ColorWheelEntryViewModel): void
    {
        this.colorWheel.remove(item);
    }

    load(data: FixtureData): void
    {
        this.name(data.name);
        this.type(data.type);
        this.channels.removeAll();
        this.movements.removeAll();
        for (let channel of data.channels)
        {
            this.channels.push(ChannelViewModel.load(channel));
        }
        if (data.movements != null)
        {
            for (let movement of data.movements)
            {
                this.movements.push(MovementViewModel.load(movement));
            }
        }
        if (data.colorWheel != null)
        {
            for (let colorwheelEntry of data.colorWheel)
            {
                this.colorWheel.push(ColorWheelEntryViewModel.load(colorwheelEntry));
            }
        }
    }

    serialize(): FixtureData
    {
        let item: FixtureData = {
            name: this.name(),
            type: this.type(),
            channels: this.channels().map((value: ChannelViewModel) => value.serialize()),
            movements: this.movements().length == 0 ? null :
                this.movements().map((value: MovementViewModel) => value.serialize()),
            colorWheel: this.colorWheel().length == 0 ? null :
                this.colorWheel().map((value: ColorWheelEntryViewModel) => value.serialize()),
        };
        return item;
    }
}