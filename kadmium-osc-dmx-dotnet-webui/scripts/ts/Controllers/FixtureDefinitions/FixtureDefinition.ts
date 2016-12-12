import { CollectionItemViewModel } from "../CollectionItem";
import { ChannelData, ChannelViewModel } from "./Channel";
import { MovementData, MovementViewModel } from "./Movement";
import { ColorWheelEntryViewModel, ColorWheelEntryData } from "./ColorWheel";
import { MVC } from "../MVC";

import * as ko from "knockout";

export interface FixtureDefinitionKey
{
    manufacturer: string;
    name: string;
}

export interface FixtureDefinitionData
{
    name: string;
    manufacturer: string;
    type: string;
    channels: ChannelData[];
    movements?: MovementData[];
    colorWheel?: ColorWheelEntryData[];
}

export class FixtureDefinitionViewModel extends CollectionItemViewModel<FixtureDefinitionData, FixtureDefinitionKey>
{
    manufacturer: KnockoutObservable<string>;
    name: KnockoutObservable<string>;
    type: KnockoutObservable<string>;
    channels: KnockoutObservableArray<ChannelViewModel>;
    movements: KnockoutObservableArray<MovementViewModel>;
    colorWheel: KnockoutObservableArray<ColorWheelEntryViewModel>;

    constructor(key: FixtureDefinitionKey)
    {
        let name = ko.observable<string>(key.name);
        let manufacturer = ko.observable<string>(key.manufacturer);
        let computedKey = ko.computed<FixtureDefinitionKey>(() => { return { manufacturer: manufacturer(), name: name() } });
        let displayName = ko.computed<string>(() => manufacturer() + " " + name());
        super(computedKey, displayName, "FixtureDefinitions");

        this.manufacturer = manufacturer;
        this.name = name;
        this.type = ko.observable<string>();
        this.channels = ko.observableArray<ChannelViewModel>();
        this.movements = ko.observableArray<MovementViewModel>();
        this.colorWheel = ko.observableArray<ColorWheelEntryViewModel>();
    }

    getLoadURL(): string
    {
        let baseUrl = MVC.getActionURL(this.controllerName, "Load", this.manufacturer());
        let url = baseUrl + "/" + this.name();
        return url;
    }

    getSaveURL(): string
    {
        let baseUrl = MVC.getActionURL(this.controllerName, "Save", this.originalKey.manufacturer);
        let url = baseUrl + "/" + this.originalKey.name;
        return url;
    }

    getDeleteURL(): string
    {
        let baseUrl = MVC.getActionURL(this.controllerName, "Delete", this.originalKey.manufacturer);
        let url = baseUrl + "/" + this.originalKey.name;
        return url;
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

    load(data: FixtureDefinitionData): void
    {
        this.name(data.name);
        this.manufacturer(data.manufacturer);
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

    serialize(): FixtureDefinitionData
    {
        let item: FixtureDefinitionData = {
            name: this.key().name,
            manufacturer: this.manufacturer(),
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