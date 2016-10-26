import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import * as ko from "knockout";

export interface SACNTransmitterData
{
    name: string;
    type: string;
    description: string;
    delay: number;
    multicast: boolean;
    unicast: string[];
}

class UnicastViewModel
{
    address: KnockoutObservable<string>;

    constructor(address: string)
    {
        this.address = ko.observable<string>(address);
    }

    serialize(): string
    {
        return this.address();
    }
}

export class SACNTransmitterViewModel extends CollectionItemViewModel<SACNTransmitterData> implements NamedViewModel
{
    name: KnockoutObservable<string>;
    description: KnockoutObservable<string>;
    delay: KnockoutObservable<number>;
    multicast: KnockoutObservable<boolean>;
    unicast: KnockoutObservableArray<UnicastViewModel>;

    constructor(name: string)
    {
        super(name, "SACNTransmitters");
        this.name = ko.observable<string>(name);
        this.description = ko.observable<string>("");
        this.delay = ko.observable<number>(0);
        this.multicast = ko.observable<boolean>(true);
        this.unicast = ko.observableArray<UnicastViewModel>();
    }

    load(data: SACNTransmitterData): void
    {
        this.name(data.name);
        this.description(data.description);
        this.delay(data.delay);
        this.multicast(data.multicast);
        this.unicast.removeAll();
        this.unicast(data.unicast.map((value: string) => new UnicastViewModel(value)));
    }

    serialize(): SACNTransmitterData
    {
        let item: SACNTransmitterData = {
            name: this.name(),
            description: this.description(),
            delay: parseInt(this.delay() as any),
            type: "sACN",
            multicast: this.multicast(),
            unicast: this.unicast().map((value: UnicastViewModel) => value.serialize())
        };
        return item;
    }

    addUnicast(): void
    {
        this.unicast.push(new UnicastViewModel(""));
    }

    removeUnicast(unicast: UnicastViewModel): void
    {
        this.unicast.remove(unicast);
    }
}