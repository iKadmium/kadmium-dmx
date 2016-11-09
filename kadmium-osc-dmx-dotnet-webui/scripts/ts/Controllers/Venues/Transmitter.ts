import * as ko from "knockout";

export interface TransmitterData
{
    name: string;
    universeID: number;
}

export class TransmitterViewModel
{
    name: KnockoutObservable<string>;
    universeID: KnockoutObservable<number>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.universeID = ko.validatedObservable<number>(1).extend({
            min: 1,
            max: 63999
        });
    }

    serialize(): TransmitterData
    {
        let item: TransmitterData = {
            name: this.name(),
            universeID: parseInt(this.universeID() as any)
        };
        return item;
    }

    static load(data: TransmitterData): TransmitterViewModel
    {
        let transmitter = new TransmitterViewModel();
        transmitter.name = ko.observable<string>(data.name);
        transmitter.universeID = ko.observable<number>(data.universeID);
        return transmitter;
    }
}