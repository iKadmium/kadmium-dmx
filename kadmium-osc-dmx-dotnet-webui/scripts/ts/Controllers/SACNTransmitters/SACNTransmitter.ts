import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import * as ko from "knockout";

export interface SACNTransmitterData
{
    name: string;
    type: string;
    description: string;
    delay: number;
}

export class SACNTransmitterViewModel extends CollectionItemViewModel<SACNTransmitterData> implements NamedViewModel
{
    name: KnockoutObservable<string>;
    description: KnockoutObservable<string>;
    delay: KnockoutObservable<number>;

    constructor(name: string)
    {
        super(name, "SACNTransmitters");
        this.name = ko.observable<string>(name);
        this.description = ko.observable<string>("");
        this.delay = ko.observable<number>(0);
    }

    load(data: SACNTransmitterData): void
    {
        this.name(data.name);
        this.description(data.description);
        this.delay(data.delay);
    }

    serialize(): SACNTransmitterData
    {
        let item: SACNTransmitterData = {
            name: this.name(),
            description: this.description(),
            delay: parseInt(this.delay() as any),
            type: "sACN"
        };
        return item;
    }
}