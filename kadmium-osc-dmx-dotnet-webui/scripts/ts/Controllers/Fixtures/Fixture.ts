import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import {ChannelData, ChannelViewModel} from "./Channel";
import {MovementData, MovementViewModel} from "./Movement";

import * as ko from "knockout";

export interface FixtureData
{
    name: string;
    type: string;
    channels: ChannelData[];
    movements: MovementData[];
}

export class FixtureViewModel extends CollectionItemViewModel<FixtureData> implements NamedViewModel
{
    type: KnockoutObservable<string>;
    channels: KnockoutObservableArray<ChannelViewModel>;
    movements: KnockoutObservableArray<MovementViewModel>;
    
    constructor(name: string)
    {
        super(name, "Fixtures");
        this.type = ko.observable<string>();
        this.channels = ko.observableArray<ChannelViewModel>();
        this.movements = ko.observableArray<MovementViewModel>();
    }

    addChannel(): void
    {
        let maxChannel = 1;
        this.channels().forEach((value: ChannelViewModel, index: number, array: ChannelViewModel[]) =>
        {
            if (value.dmx() > maxChannel)
            {
                maxChannel = value.dmx();
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
        for (let movement of data.movements)
        {
            this.movements.push(MovementViewModel.load(movement));
        }
    }

    serialize(): FixtureData
    {
        let item: FixtureData = {
            name: this.name(),
            type: this.type(),
            channels: this.channels().map((value: ChannelViewModel, index: number, array: ChannelViewModel[]) => value.serialize()),
            movements: this.movements().map((value: MovementViewModel, index: number, array: MovementViewModel[]) => value.serialize())
        };
        return item;
    }
}